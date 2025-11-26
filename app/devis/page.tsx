"use client"

import { useState } from 'react'

export default function DevisPage() {
  const [dragOver, setDragOver] = useState(false)
  const [files, setFiles] = useState<File[]>([])
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const onDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setDragOver(false)
    const list = Array.from(e.dataTransfer.files || [])
    if (list.length) setFiles(prev => [...prev, ...list])
  }

  const onChangeFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const list = Array.from(e.target.files || [])
    if (list.length) setFiles(prev => [...prev, ...list])
  }

  const removeFile = (name: string) => setFiles(prev => prev.filter(f => f.name !== name))

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setMessage(null)
    setError(null)
    try {
      const form = new FormData(e.currentTarget)
      files.forEach(f => form.append('files', f))
      const res = await fetch('/api/devis', { method: 'POST', body: form })
      if (!res.ok) throw new Error(await res.text())
      setMessage('Merci ! Votre demande a bien été envoyée. Réponse sous 24h.')
      setFiles([])
      e.currentTarget.reset()
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Erreur lors de l’envoi')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container section">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Obtenez votre devis en moins de 24h</h2>
          <form onSubmit={onSubmit} className="space-y-5">
            <div>
              <label className="block text-sm text-neutral-700 mb-2">Nom du projet</label>
              <input name="projectName" required placeholder='Ex: Néon "Mon Café" mur intérieur' className="w-full bg-white border border-neutral-300 rounded-md px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm text-neutral-700 mb-2">Brève description</label>
              <textarea name="description" required placeholder="Décrivez votre projet en quelques lignes" className="w-full bg-white border border-neutral-300 rounded-md px-3 py-2 min-h-[110px]" />
            </div>
            <div>
              <label className="block text-sm text-neutral-700 mb-2">Mise en place</label>
              <div className="flex items-center gap-6 text-sm">
                <label className="inline-flex items-center gap-2">
                  <input type="radio" name="placement" value="interieur" defaultChecked className="accent-black" />
                  Intérieur
                </label>
                <label className="inline-flex items-center gap-2">
                  <input type="radio" name="placement" value="exterieur" className="accent-black" />
                  Extérieur
                </label>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm text-neutral-700 mb-2">Largeur (cm)</label>
                <input name="widthCm" type="number" min={10} max={500} step={1} placeholder="ex: 120" className="w-full bg-white border border-neutral-300 rounded-md px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm text-neutral-700 mb-2">Hauteur (cm)</label>
                <input name="heightCm" type="number" min={10} max={500} step={1} placeholder="ex: 60" className="w-full bg-white border border-neutral-300 rounded-md px-3 py-2" />
              </div>
            </div>
            <div>
              <label
                onDragOver={(e) => { e.preventDefault(); setDragOver(true) }}
                onDragLeave={() => setDragOver(false)}
                onDrop={onDrop}
                className={`block rounded-lg border-2 border-dashed ${dragOver ? 'border-neutral-600 bg-neutral-50' : 'border-neutral-300 bg-white'} p-6 text-center cursor-pointer`}
              >
                <div className="text-sm text-neutral-600">Glissez-déposez vos fichiers ici, ou cliquez pour sélectionner</div>
                <div className="text-xs text-neutral-500 mt-1">Formats acceptés: PDF, PNG, JPG, SVG</div>
                <input name="files" type="file" multiple accept=".pdf,.png,.jpg,.jpeg,.svg" className="hidden" onChange={onChangeFiles} />
              </label>
              {files.length > 0 && (
                <ul className="mt-3 space-y-1 text-sm">
                  {files.map(f => (
                    <li key={f.name} className="flex items-center justify-between bg-neutral-50 border border-neutral-200 rounded px-3 py-1.5">
                      <span className="truncate">{f.name}</span>
                      <button type="button" onClick={() => removeFile(f.name)} className="text-neutral-600 hover:text-black">Retirer</button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              <div>
                <label className="block text-sm text-neutral-700 mb-2">Nom / Prénom</label>
                <input name="fullName" required placeholder="Ex: Jean Dupont" className="w-full bg-white border border-neutral-300 rounded-md px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm text-neutral-700 mb-2">Entreprise (optionnel)</label>
                <input name="company" placeholder="Ex: Café des Halles" className="w-full bg-white border border-neutral-300 rounded-md px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm text-neutral-700 mb-2">Téléphone</label>
                <input name="phone" type="tel" required placeholder="Ex: 06 12 34 56 78" className="w-full bg-white border border-neutral-300 rounded-md px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm text-neutral-700 mb-2">Email</label>
                <input name="email" type="email" required placeholder="vous@exemple.com" className="w-full bg-white border border-neutral-300 rounded-md px-3 py-2" />
              </div>
            </div>
            {error && <div className="text-red-600 text-sm">{error}</div>}
            {message && <div className="text-green-700 text-sm">{message}</div>}
            <button disabled={loading} className="button-primary w-full md:w-auto">{loading ? 'Envoi…' : 'Envoyer ma demande'}</button>
          </form>
        </div>
        <div>
          <h1 className="mt-4 text-3xl md:text-4xl font-bold">Atelier Luminé transforme votre idée en néon</h1>
          <p className="mt-2 text-neutral-700 font-medium">+ de 10 000 clients satisfaits ⭐️⭐️⭐️⭐️⭐️</p>
          <p className="mt-4 text-neutral-600 max-w-prose">Partagez vos inspirations, dimensions et contraintes d’installation. Notre équipe vous conseille sur les meilleures options et vous envoie un devis personnalisé.</p>
          <ul className="mt-6 space-y-2 text-neutral-700">
            <li>✅ Réponse rapide en moins de 24h</li>
            <li>✅ Réponse du gérant</li>
            <li>✅ Équipe de graphistes professionnels bretons</li>
            <li>✅ Livraison gratuite</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
