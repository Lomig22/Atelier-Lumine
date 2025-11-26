import { NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabase'

export async function GET(req: Request) {
  const adminKey = process.env.ADMIN_DASHBOARD_KEY
  const headerKey = req.headers.get('x-admin-key')
  if (!adminKey || headerKey !== adminKey) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const supa = getSupabaseAdmin()
  if (!supa) return NextResponse.json({ error: 'Supabase non configuré' }, { status: 500 })

  const { data, error } = await supa.from('orders').select('*').order('created_at', { ascending: false }).limit(100)
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ orders: data })
}
