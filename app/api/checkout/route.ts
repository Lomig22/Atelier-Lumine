import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { computePrice } from '@/lib/pricing'
import { SignConfig } from '@/lib/types'
import { getSupabaseAdmin } from '@/lib/supabase'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const config = body.config as SignConfig
    const customer = body.customer as { name: string, email: string, address: string }

    if (!config || !customer?.email) {
      return NextResponse.json({ error: 'Paramètres manquants' }, { status: 400 })
    }

    const price = computePrice(config)

    const stripeKey = process.env.STRIPE_SECRET_KEY
    if (!stripeKey) return NextResponse.json({ error: 'Stripe non configuré' }, { status: 500 })

    const stripe = new Stripe(stripeKey, { apiVersion: '2023-10-16' })

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

    // Create order in Supabase (optional if env missing)
    let orderId: string | null = null
    const supa = getSupabaseAdmin()
    if (supa) {
      const { data, error } = await supa.from('orders').insert({
        config,
        price: price.total,
        status: 'pending',
        customer,
      }).select('id').single()
      if (!error && data) orderId = data.id
    }

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      success_url: `${siteUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/checkout`,
      customer_email: customer.email,
      metadata: {
        orderId: orderId || 'no-db',
      },
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: 'eur',
            unit_amount: Math.round(price.total * 100),
            product_data: {
              name: 'Enseigne LED personnalisée',
              description: `${config.text} – ${config.widthCm}x${config.heightCm}cm – ${config.shape} – ${config.ledType}`.slice(0, 500),
              metadata: {
                config: JSON.stringify(config).slice(0, 4500)
              }
            }
          }
        }
      ]
    })

    if (supa && orderId) {
      await supa.from('orders').update({ stripe_session_id: session.id }).eq('id', orderId)
    }

    return NextResponse.json({ url: session.url })
  } catch (e: any) {
    return NextResponse.json({ error: e.message || 'Erreur serveur' }, { status: 500 })
  }
}
