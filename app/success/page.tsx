"use client"

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

function SuccessInner() {
  const params = useSearchParams()
  const sessionId = params.get('session_id')
  return (
    <div className="container section text-center">
      <h1 className="text-3xl font-semibold">Merci pour votre commande ✨</h1>
      <p className="text-white/70 mt-3">Votre paiement a été traité. Nous préparons votre enseigne.</p>
      {sessionId && <p className="text-white/50 mt-2 text-sm">Référence Stripe: {sessionId}</p>}
      <a className="button-primary mt-8 inline-block" href="/">Retour à l’accueil</a>
    </div>
  )
}

export default function SuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="container section text-center">
          <h1 className="text-3xl font-semibold">Merci pour votre commande ✨</h1>
          <p className="text-white/70 mt-3">Chargement…</p>
        </div>
      }
    >
      <SuccessInner />
    </Suspense>
  )
}
