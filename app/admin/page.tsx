"use client"

import { useState } from 'react'

export default function AdminPage() {
  const [key, setKey] = useState('')
  const [loading, setLoading] = useState(false)
  const [orders, setOrders] = useState<any[]>([])
  const [error, setError] = useState<string | null>(null)

  const load = async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/orders', { headers: { 'x-admin-key': key } })
      if (!res.ok) throw new Error(await res.text())
      const data = await res.json()
      setOrders(data.orders || [])
    } catch (e: any) {
      setError(e.message || 'Erreur')
    } finally {
      setLoading(false)
    }
  }

  const exportSVG = async (config: any) => {
    try {
      const res = await fetch('/api/export-svg', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ config }),
      })
      if (!res.ok) throw new Error(await res.text())
      const blob = await res.blob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'enseigne.svg'
      document.body.appendChild(a)
      a.click()
      a.remove()
      URL.revokeObjectURL(url)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div className="container section">
      <h1 className="text-3xl font-semibold mb-6">Admin · Commandes</h1>
      <div className="flex gap-3 mb-6">
        <input value={key} onChange={e => setKey(e.target.value)} placeholder="Admin key" className="bg-white/5 border border-white/10 rounded-md px-3 py-2" />
        <button onClick={load} className="button-ghost">Charger</button>
      </div>
      {error && <div className="text-red-400 text-sm mb-4">{error}</div>}
      <div className="grid gap-3">
        {orders.map((o) => (
          <div key={o.id} className="p-4 rounded-lg border border-white/10 bg-white/[0.03]">
            <div className="font-medium">Commande {o.id}</div>
            <div className="text-sm text-white/70">Prix: {o.price} € · Statut: {o.status}</div>
            <div className="mt-2">
              <button onClick={() => exportSVG(o.config)} className="button-ghost">Exporter SVG</button>
            </div>
            <pre className="mt-2 text-xs whitespace-pre-wrap text-white/60">{JSON.stringify(o.config, null, 2)}</pre>
          </div>
        ))}
      </div>
    </div>
  )
}
