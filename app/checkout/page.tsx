"use client"

import { useEffect, useMemo, useState } from 'react'
import { SignConfig } from '@/lib/types'
import { computePrice } from '@/lib/pricing'

export default function CheckoutPage() {
  const [cfg, setCfg] = useState<SignConfig | null>(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const raw = localStorage.getItem('atelier-sign-config')
    if (raw) setCfg(JSON.parse(raw))
  }, [])

  const price = useMemo(() => (cfg ? computePrice(cfg) : null), [cfg])

  const onPay = async () => {
    if (!cfg || !price) return
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ config: cfg, customer: { name, email, address } })
      })
      if (!res.ok) throw new Error(await res.text())
      const data = await res.json()
      if (data.url) window.location.href = data.url
      else throw new Error('URL de paiement indisponible')
    } catch (e: any) {
      setError(e.message || 'Erreur de paiement')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container section">
      <h1 className="text-3xl font-semibold mb-6">Récapitulatif & Paiement</h1>
      {!cfg ? (
        <div className="text-white/70">Aucun design trouvé. Veuillez <a className="underline" href="/customize">revenir au configurateur</a>.</div>
      ) : (
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/[0.03]">
              <div className="text-sm text-white/60 mb-2">Aperçu</div>
              <div className="aspect-[4/3] w-full rounded-lg border border-white/10 flex items-center justify-center" style={{ background: cfg.background ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
                <span style={{
                  color: cfg.fillColor,
                  WebkitTextStroke: `${cfg.strokeWidth}px ${cfg.strokeColor}`,
                  textShadow: `0 0 ${Math.max(4, cfg.glowIntensity / 10)}px ${cfg.strokeColor}, 0 0 ${Math.max(8, cfg.glowIntensity / 6)}px ${cfg.fillColor}`,
                  fontSize: 'min(10vw, 10vh)',
                  lineHeight: 1,
                }}>{cfg.text}</span>
              </div>
              <ul className="mt-4 text-sm text-white/70 space-y-1">
                <li>Police: {cfg.fontId}</li>
                <li>Dimensions: {cfg.widthCm} × {cfg.heightCm} cm</li>
                <li>Couleurs: remplissage {cfg.fillColor}, contour {cfg.strokeColor}</li>
                <li>Forme: {cfg.shape} · LED: {cfg.ledType} · Plexiglas: {cfg.plexiglass ? 'Oui' : 'Non'}</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="p-4 rounded-lg border border-white/10 bg-white/[0.03] space-y-4">
              <div>
                <div className="text-sm text-white/60">Prix final</div>
                <div className="text-3xl font-semibold">{price!.total.toFixed(2)} €</div>
              </div>
              <div className="grid gap-3">
                <input value={name} onChange={e => setName(e.target.value)} placeholder="Nom complet" className="bg-white/5 border border-white/10 rounded-md px-3 py-2" />
                <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="bg-white/5 border border-white/10 rounded-md px-3 py-2" />
                <textarea value={address} onChange={e => setAddress(e.target.value)} placeholder="Adresse" className="bg-white/5 border border-white/10 rounded-md px-3 py-2 min-h-[90px]" />
              </div>
              {error && <div className="text-red-400 text-sm">{error}</div>}
              <button disabled={loading} onClick={onPay} className="button-primary w-full">{loading ? 'Création du paiement…' : 'Payer avec Stripe'}</button>
              <div className="text-xs text-white/50">Paiement sécurisé via Stripe. Vous recevrez un email de confirmation.</div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
