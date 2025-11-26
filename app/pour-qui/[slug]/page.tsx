import Link from 'next/link'
import { notFound } from 'next/navigation'

const pages: Record<string, { label: string; background: string }> = {
  'bar': { label: 'Bar', background: "url('/images/examples/ex-bar-1.jpg'), url('/images/examples/bar.png'), url('/images/examples/bar.jpg'), url('/images/examples/bar.svg')" },
  'restaurant': { label: 'Restaurant', background: "url('/images/examples/restaurant.png'), url('/images/examples/ex-restaurant-1.jpg'), url('/images/examples/restaurant.svg')" },
  'boutique': { label: 'Boutique', background: "url('/images/examples/boutique.svg')" },
  'coiffeur': { label: 'Salon de coiffure', background: "url('/images/examples/coiffeur.png'), url('/images/examples/ex-coiffeur-1.jpg'), url('/images/examples/coiffeur.svg')" },
  'salle-de-sport': { label: 'Salle de sport', background: "url('/images/examples/gym.png'), url('/images/examples/salle-de-sport.svg')" },
  'hotel': { label: 'Hôtel', background: "url('/images/examples/hotel.svg')" },
  'cafe': { label: 'Café', background: "url('/images/examples/cafe.svg')" },
  'evenement': { label: 'Évènement', background: "url('/images/examples/evenement.svg')" },
  'fleuriste': { label: 'Fleuriste', background: "url('/images/examples/fleuriste.svg')" },
  'bureaux-1': { label: 'Bureaux Open space', background: "url('/images/examples/bureaux-1.svg')" },
  'chambre': { label: 'Chambre', background: "url('/images/examples/chambre.svg')" },
}

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }))
}

export default function PourQuiPage({ params }: { params: { slug: string } }) {
  const item = pages[params.slug]
  if (!item) return notFound()

  return (
    <div>
      <section className="relative section overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: item.background }} />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <div className="container relative text-white">
          <h1 className="text-4xl md:text-5xl font-bold">{item.label}</h1>
          <p className="mt-4 text-white/80">Inspirations et réalisations pour {item.label.toLowerCase()}.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/customize" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-white text-black hover:bg-neutral-200 transition">Créez votre néon personnalisé</Link>
            <Link href="/devis" className="px-5 py-3 rounded-md border border-white/60 text-white hover:bg-white/10 transition">Demande de devis</Link>
          </div>
        </div>
      </section>
      <section className="section border-t border-neutral-200">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="aspect-video rounded-xl overflow-hidden border border-neutral-200 bg-neutral-100">
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: item.background }} />
            </div>
            <div className="aspect-video rounded-xl overflow-hidden border border-neutral-200 bg-neutral-100">
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: item.background }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
