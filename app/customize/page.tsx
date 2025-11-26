"use client"

import { useEffect, useMemo, useRef, useState } from 'react'
import { fontOptions } from '@/lib/fonts'
import { computePrice } from '@/lib/pricing'
import { PriceResult, SignConfig } from '@/lib/types'
import { useRouter } from 'next/navigation'
import { Wand2, Check, Sparkles } from 'lucide-react'

const defaultConfig: SignConfig = {
  text: 'Atelier Luminé',
  fontId: 'poppins',
  widthCm: 80,
  heightCm: 30,
  fillColor: '#ffffff',
  strokeColor: '#ff5bf5',
  strokeWidth: 2,
  glowIntensity: 60,
  background: true,
  plexiglass: true,
  shape: 'rectangle',
  ledType: 'neon',
}

export default function CustomizePage() {
  const [cfg, setCfg] = useState<SignConfig>(defaultConfig)
  const [price, setPrice] = useState<PriceResult>(() => computePrice(defaultConfig))
  const router = useRouter()

  useEffect(() => {
    setPrice(computePrice(cfg))
  }, [cfg])

  const onValidate = () => {
    localStorage.setItem('atelier-sign-config', JSON.stringify(cfg))
    router.push('/checkout')
  }

  return (
    <div className="container section">
      <div className="mb-8 flex items-center gap-3">
        <Wand2 className="text-neon.pink" />
        <h1 className="text-3xl font-semibold">Personnaliser mon enseigne LED</h1>
      </div>
      <div className="grid lg:grid-cols-2 gap-10">
        <Preview cfg={cfg} />
        <Controls cfg={cfg} onChange={setCfg} price={price} onValidate={onValidate} />
      </div>
    </div>
  )
}

function Preview({ cfg }: { cfg: SignConfig }) {
  const containerRef = useRef<HTMLDivElement>(null)

  // Simple neon style using box-shadows to emulate glow
  const fontClass = useMemo(() => fontOptions.find(f => f.id === cfg.fontId)?.className ?? '', [cfg.fontId])

  return (
    <div>
      <div className="text-sm text-white/60 mb-2">Aperçu en direct</div>
      <div ref={containerRef} className="aspect-[4/3] w-full rounded-2xl border border-white/10 p-6 bg-black/60 flex items-center justify-center overflow-hidden">
        <div className={`text-center ${fontClass}`} style={{ width: '100%', height: '100%' }}>
          <div
            className="mx-auto flex items-center justify-center"
            style={{
              width: '100%',
              height: '100%',
              background: cfg.background ? 'rgba(255,255,255,0.02)' : 'transparent',
              borderRadius: cfg.shape === 'circle' ? '9999px' : 16,
              position: 'relative',
            }}
          >
            <span
              style={{
                color: cfg.fillColor,
                WebkitTextStroke: `${cfg.strokeWidth}px ${cfg.strokeColor}`,
                textShadow: `0 0 ${Math.max(4, cfg.glowIntensity / 10)}px ${cfg.strokeColor}, 0 0 ${Math.max(8, cfg.glowIntensity / 6)}px ${cfg.fillColor}`,
                fontSize: 'min(14vw, 14vh)',
                lineHeight: 1,
                display: 'inline-block',
                padding: '0.15em 0.25em',
              }}
            >
              {cfg.text || ' '}
            </span>
            {cfg.plexiglass && (
              <div className="pointer-events-none absolute inset-0 rounded-2xl" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0))' }} />
            )}
          </div>
        </div>
      </div>
      <div className="mt-3 text-xs text-white/50">Dimensions: {cfg.widthCm} × {cfg.heightCm} cm · Type LED: {cfg.ledType} · Forme: {cfg.shape}</div>
    </div>
  )
}

function Controls({ cfg, onChange, price, onValidate }: { cfg: SignConfig, onChange: (c: SignConfig) => void, price: PriceResult, onValidate: () => void }) {
  const set = (patch: Partial<SignConfig>) => onChange({ ...cfg, ...patch })

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm text-white/70 mb-2">Texte</label>
        <input value={cfg.text} onChange={e => set({ text: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-white/20" placeholder="Votre texte" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-sm text-white/70 mb-2">Police</label>
          <select value={cfg.fontId} onChange={e => set({ fontId: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2">
            {fontOptions.map(f => (
              <option key={f.id} value={f.id}>{f.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm text-white/70 mb-2">Type LED</label>
          <select value={cfg.ledType} onChange={e => set({ ledType: e.target.value as any })} className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2">
            <option value="neon">Néon Flex</option>
            <option value="dot">LED Points</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Range label="Largeur (cm)" value={cfg.widthCm} min={20} max={200} step={1} onChange={v => set({ widthCm: v })} />
        <Range label="Hauteur (cm)" value={cfg.heightCm} min={10} max={120} step={1} onChange={v => set({ heightCm: v })} />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Color label="Couleur remplissage" value={cfg.fillColor} onChange={v => set({ fillColor: v })} />
        <Color label="Couleur contour" value={cfg.strokeColor} onChange={v => set({ strokeColor: v })} />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Range label="Épaisseur contour" value={cfg.strokeWidth} min={0} max={10} step={1} onChange={v => set({ strokeWidth: v })} />
        <Range label="Intensité du glow" value={cfg.glowIntensity} min={0} max={100} step={1} onChange={v => set({ glowIntensity: v })} />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Select label="Forme" value={cfg.shape} onChange={v => set({ shape: v as any })} options={[
          { value: 'rectangle', label: 'Rectangle' },
          { value: 'outline', label: 'Découpe autour du texte' },
          { value: 'circle', label: 'Cercle' },
          { value: 'custom', label: 'Forme personnalisée' },
        ]} />
        <Toggle label="Support plexiglas" value={cfg.plexiglass} onChange={v => set({ plexiglass: v })} />
      </div>

      <div className="mt-4 p-4 rounded-lg border border-white/10 bg-white/[0.03]">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="text-sm text-white/60">Prix estimé</div>
            <div className="text-3xl font-semibold">{price.total.toFixed(2)} €</div>
          </div>
          <button onClick={onValidate} className="button-primary inline-flex items-center gap-2">
            <Check size={18} /> Valider mon design
          </button>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-white/60">
          <div>Surface: {price.breakdown.baseAreaCm2} cm²</div>
          <div>Base: {price.breakdown.baseCost.toFixed(2)} €</div>
          <div>Forme ×{price.breakdown.shapeMultiplier}</div>
          <div>LED ×{price.breakdown.ledMultiplier}</div>
          <div>Couleurs: {price.breakdown.colorsSurcharge.toFixed(2)} €</div>
          <div>Glow: {price.breakdown.glowSurcharge.toFixed(2)} €</div>
          <div>Contour: {price.breakdown.outlineSurcharge.toFixed(2)} €</div>
          <div>Plexi: {price.breakdown.plexiSurcharge.toFixed(2)} €</div>
        </div>
        <div className="mt-3 text-xs text-white/40">Prix indicatif. Le prix final est calculé au paiement.</div>
      </div>
    </div>
  )
}

function Range({ label, value, min, max, step, onChange }: { label: string, value: number, min: number, max: number, step: number, onChange: (v: number) => void }) {
  return (
    <div>
      <label className="block text-sm text-white/70 mb-2">{label} <span className="text-white/40">{value}</span></label>
      <input type="range" min={min} max={max} step={step} value={value} onChange={e => onChange(Number(e.target.value))} className="w-full" />
    </div>
  )
}

function Color({ label, value, onChange }: { label: string, value: string, onChange: (v: string) => void }) {
  return (
    <div>
      <label className="block text-sm text-white/70 mb-2">{label}</label>
      <div className="flex items-center gap-3">
        <input type="color" value={value} onChange={e => onChange(e.target.value)} className="h-10 w-14 bg-white/5 border border-white/10 rounded" />
        <input value={value} onChange={e => onChange(e.target.value)} className="flex-1 bg-white/5 border border-white/10 rounded-md px-3 py-2" />
      </div>
    </div>
  )
}

function Select({ label, value, onChange, options }: { label: string, value: string, onChange: (v: string) => void, options: { value: string, label: string }[] }) {
  return (
    <div>
      <label className="block text-sm text-white/70 mb-2">{label}</label>
      <select value={value} onChange={e => onChange(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2">
        {options.map(o => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    </div>
  )
}

function Toggle({ label, value, onChange }: { label: string, value: boolean, onChange: (v: boolean) => void }) {
  return (
    <div>
      <label className="block text-sm text-white/70 mb-2">{label}</label>
      <button onClick={() => onChange(!value)} className={`w-full px-3 py-2 rounded-md border border-white/10 ${value ? 'bg-white text-black' : 'bg-white/5 text-white'}`}>{value ? 'Oui' : 'Non'}</button>
    </div>
  )
}
