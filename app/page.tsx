import Link from 'next/link'
import { ArrowRight, Sparkles, Star, Wand2, Truck, MapPin, ShieldCheck, Leaf, Wrench } from 'lucide-react'

export default function HomePage() {
  const examples = [
    { slug: 'bar', label: 'Bar', background: "url('/images/examples/ex-bar-1.jpg'), url('/images/examples/bar.png'), url('/images/examples/bar.jpg'), url('/images/examples/bar.svg')" },
    { slug: 'restaurant', label: 'Restaurant', background: "url('/images/examples/restaurant.png'), url('/images/examples/ex-restaurant-1.jpg'), url('/images/examples/restaurant.svg')" },
    { slug: 'boutique', src: '/images/examples/boutique.svg', label: 'Boutique' },
    { slug: 'coiffeur', label: 'Salon de coiffure', background: "url('/images/examples/coiffeur.png'), url('/images/examples/ex-coiffeur-1.jpg'), url('/images/examples/coiffeur.svg')" },
    { slug: 'salle-de-sport', label: 'Salle de sport', background: "url('/images/examples/gym.png'), url('/images/examples/salle-de-sport.svg')" },
    { slug: 'hotel', src: '/images/examples/hotel.svg', label: 'Hôtel' },
    { slug: 'cafe', src: '/images/examples/cafe.svg', label: 'Café' },
    { slug: 'evenement', src: '/images/examples/evenement.svg', label: 'Évènement' },
    { slug: 'fleuriste', label: 'Fleuriste', background: "url('/images/examples/fleuriste.svg')" },
    { slug: 'bureaux-1', label: 'Bureaux Open space', background: "url('/images/examples/bureaux-1.svg')" },
  ]
  return (
    <div>
      <section className="relative section overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/hero-custom.jpeg'), url('/images/hero-bar.svg')" }}
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>
        <div className="container relative grid md:grid-cols-2 gap-10 items-center text-white">
          <div>
            <div className="rounded-xl bg-black/35 backdrop-blur-sm p-6 md:p-8 border border-white/10">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">Enseignes Néon sur-mesure, premium et lumineuses</h1>
              <p className="mt-5 text-white/80 text-lg">Personnalisez votre enseigne en temps réel et recevez-la prête à installer.</p>
              <div className="mt-8 flex gap-3">
                <Link href="/customize" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-white text-black hover:bg-neutral-200 transition">Personnalisez votre Néon <ArrowRight size={18} /></Link>
                <Link href="/devis" className="px-5 py-3 rounded-md border border-white/60 text-white hover:bg-white/10 transition">Votre devis gratuit</Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block" />
        </div>
      </section>
      <section id="etapes" className="section border-t border-neutral-200">
        <div className="container">
          <h2 className="text-3xl font-semibold mb-8">3 étapes</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border border-neutral-200 bg-neutral-50">
              <Wand2 className="text-neon.pink" />
              <h3 className="mt-4 text-xl font-medium">Personnaliser</h3>
              <p className="text-neutral-600 mt-2">Texte, taille, police, couleurs, forme et options.</p>
            </div>
            <div className="p-6 rounded-xl border border-neutral-200 bg-neutral-50">
              <Sparkles className="text-neon.blue" />
              <h3 className="mt-4 text-xl font-medium">Obtenir le prix</h3>
              <p className="text-neutral-600 mt-2">Tarification instantanée selon votre design.</p>
            </div>
            <div className="p-6 rounded-xl border border-neutral-200 bg-neutral-50">
              <Star className="text-neon.green" />
              <h3 className="mt-4 text-xl font-medium">Commander & Recevoir</h3>
              <p className="text-neutral-600 mt-2">Paiement sécurisé. Fabrication rapide. Livraison.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section border-t border-neutral-200">
        <div className="container grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src="/images/configurator-user.svg"
              alt="Utilisatrice en train de personnaliser son néon sur le configurateur"
              className="w-full rounded-xl border border-neutral-200 bg-neutral-100 object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Créez votre <span className="text-neon.pink font-semibold filter drop-shadow-[0_0_10px_rgba(255,91,245,.55)]">néon personnalisé</span> en quelques clics grâce à notre <span className="text-neon.blue font-semibold filter drop-shadow-[0_0_10px_rgba(77,234,255,.55)]">configurateur exclusif</span>.
            </h2>
            <p className="mt-4 text-neutral-700 text-lg">
              Jouez instantanément avec les mots, les <span className="text-neon.purple font-medium filter drop-shadow-[0_0_8px_rgba(163,107,255,.5)]">symboles</span>, les <span className="text-neon.green font-medium filter drop-shadow-[0_0_8px_rgba(107,255,181,.5)]">typographies</span> et les <span className="text-neon.yellow font-medium filter drop-shadow-[0_0_8px_rgba(255,243,107,.55)]">couleurs LED</span> pour imaginer un <span className="text-neon.red font-semibold filter drop-shadow-[0_0_10px_rgba(255,107,107,.5)]">néon unique</span>… et le commander directement en ligne.
            </p>
            <p className="mt-4 text-neutral-700">
              Que vous soyez particulier et souhaitiez sublimer votre intérieur, ou professionnel à la recherche d’une <span className="text-neon.yellow font-medium filter drop-shadow-[0_0_8px_rgba(255,243,107,.5)]">enseigne lumineuse</span> qui attire l’œil et renforce votre image, notre configurateur vous donne la liberté de créer un néon <span className="text-neon.blue font-semibold filter drop-shadow-[0_0_8px_rgba(77,234,255,.5)]">100 % sur‑mesure</span>, fidèle à votre style et <span className="text-neon.green font-semibold filter drop-shadow-[0_0_8px_rgba(107,255,181,.5)]">prêt à installer</span>.
            </p>
            <p className="mt-4 text-neutral-700">
              Votre <span className="text-neon.pink font-semibold filter drop-shadow-[0_0_8px_rgba(255,91,245,.55)]">imagination</span> décide. Notre expertise le transforme en <span className="text-neon.red font-semibold filter drop-shadow-[0_0_8px_rgba(255,107,107,.5)]">lumière</span>.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/customize" className="button-primary">Créez votre néon personnalisé 🪄</Link>
              <Link href="/devis" className="button-ghost">Demande de devis✨</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section border-t border-neutral-200">
        <div className="container grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold">Pour qui ?</h2>
            <p className="mt-2 text-neutral-600 text-sm md:text-base max-w-prose">
              Passionné de déco ou pro de l’agencement ? Donnez vie à vos idées avec des néons LED et enseignes lumineuses 100 % sur-mesure, créés main dans la main avec les experts de L'Atelier Luminé.
            </p>
          </div>
          <div className="mt-4 md:mt-0 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {examples.map((ex, i) => (
              <Link
                key={i}
                href={`/pour-qui/${ex.slug}`}
                className="group relative block h-16 md:h-20 rounded-xl overflow-hidden border border-neutral-200 bg-neutral-100"
                aria-label={`Voir la page ${ex.label}`}
              >
                {ex.background ? (
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundImage: ex.background as string }}
                  />
                ) : (
                  <img
                    src={ex.src as string}
                    alt={`${ex.label} - Exemple de néon LED installé`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/10 to-transparent" />
                <div className="relative z-10 h-full flex items-center">
                  <div className="px-4 md:px-6">
                    <span className="text-white font-medium text-base md:text-lg">{ex.label}</span>
                  </div>
                </div>
              </Link>
            ))}
            <div className="col-span-1 sm:col-span-2">
              <Link href="/pour-qui/chambre" className="inline-block text-neutral-700 hover:text-black underline underline-offset-4">ou pour votre chambre ...</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black">
        <div className="container py-10">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-white">
            <div className="flex items-start gap-3">
              <Truck size={22} className="mt-0.5" aria-hidden />
              <div>
                <div className="text-lg md:text-xl font-semibold">Livraison gratuite</div>
                <p className="text-white/75 text-xs md:text-sm">Expédition sous 5 à 7 jours, offerte partout en France.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={22} className="mt-0.5" aria-hidden />
              <div>
                <div className="text-lg md:text-xl font-semibold">Fabriqué en Bretagne</div>
                <p className="text-white/75 text-xs md:text-sm">Production locale dans nos ateliers bretons.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ShieldCheck size={22} className="mt-0.5" aria-hidden />
              <div>
                <div className="text-lg md:text-xl font-semibold">Garantie 2 ans</div>
                <p className="text-white/75 text-xs md:text-sm">Qualité professionnelle et suivi réactif.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Leaf size={22} className="mt-0.5" aria-hidden />
              <div>
                <div className="text-lg md:text-xl font-semibold">Basse consommation</div>
                <p className="text-white/75 text-xs md:text-sm">Technologie LED éco‑énergétique et durable.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Wrench size={22} className="mt-0.5" aria-hidden />
              <div>
                <div className="text-lg md:text-xl font-semibold">Installation simplifiée</div>
                <p className="text-white/75 text-xs md:text-sm">Kit complet et guide pas à pas inclus.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Sparkles size={22} className="mt-0.5" aria-hidden />
              <div>
                <div className="text-lg md:text-xl font-semibold">100 % personnalisé</div>
                <p className="text-white/75 text-xs md:text-sm">Couleurs, tailles, typographies et symboles au choix.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section border-t border-neutral-200">
        <div className="container">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Espace <span className="text-neon.blue font-semibold filter drop-shadow-[0_0_10px_rgba(77,234,255,.55)]">pro</span>
            </h2>
            <p className="mt-3 text-neutral-600 max-w-2xl mx-auto">
              Enseignes et néons LED sur‑mesure pour les professionnels: bars, restaurants, salons, bureaux et évènements.
              Renforcez votre image et attirez l’œil avec des solutions lumineuses premium.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 items-center">
            <div className="p-6 rounded-xl border border-neutral-200 bg-white">
              <img src="/images/logos/pro-bistro.svg" alt="Logo client pro: Bistro" className="mx-auto h-12 object-contain" />
            </div>
            <div className="p-6 rounded-xl border border-neutral-200 bg-white">
              <img src="/images/logos/pro-salon.svg" alt="Logo client pro: Salon" className="mx-auto h-12 object-contain" />
            </div>
            <div className="p-6 rounded-xl border border-neutral-200 bg-white">
              <img src="/images/logos/pro-gym.svg" alt="Logo client pro: Gym" className="mx-auto h-12 object-contain" />
            </div>
          </div>
          <div className="mt-6 text-center">
            <Link href="/pro" className="text-sm text-neutral-700 hover:text-black underline underline-offset-4">Découvrir les offres pro</Link>
          </div>
        </div>
      </section>
      <section className="section border-t border-neutral-200">
        <div className="container grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src="/images/happy-customer.svg"
              alt="Client heureux avec son néon Atelier Luminé"
              className="w-full rounded-xl border border-neutral-200 bg-neutral-100 object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Donnez vie à <span className="text-neon.pink font-semibold filter drop-shadow-[0_0_10px_rgba(255,91,245,.55)]">vos idées</span>
            </h2>
            <p className="mt-4 text-neutral-700">
              Chez L'Atelier Luminé, nous faisons tout pour que vos échanges avec nous soient{' '}
              <span className="text-neon.blue font-medium filter drop-shadow-[0_0_8px_rgba(77,234,255,.5)]"> simples</span>,{' '}
              <span className="text-neon.pink font-medium filter drop-shadow-[0_0_8px_rgba(255,91,245,.5)]"> rapides</span>
              {' '} et <span className="text-neon.green font-medium filter drop-shadow-[0_0_8px_rgba(107,255,181,.5)]"> efficaces</span>.
              Nos graphistes vous conseillent avec précision sur la faisabilité, les dimensions et le budget de votre projet.
            </p>
            <p className="mt-4 text-neutral-700">
              Vous préférez parler de vive voix pour imaginer votre enseigne ou votre{' '}
              <span className="text-neon.red font-semibold filter drop-shadow-[0_0_10px_rgba(255,107,107,.5)]"> néon personnalisé</span>{' '}?
              {' '}Contactez‑nous toute la semaine au{' '}
              <a href="tel:+33637018517" className="underline underline-offset-4"> 06 37 01 85 17</a>{' '}:
              un graphiste vous accompagnera pas à pas pour transformer vos idées en création lumineuse.
            </p>
            <p className="mt-4 text-neutral-700">
              Texte ou logo, signalétique intérieure ou extérieure, façade ou décoration — nous réalisons chaque projet{' '}
              <span className="text-neon.blue font-semibold filter drop-shadow-[0_0_8px_rgba(77,234,255,.5)]">100 % sur‑mesure</span>{' '}
              pour <span className="text-neon.purple font-semibold filter drop-shadow-[0_0_8px_rgba(163,107,255,.5)]">sublimer vos espaces</span>.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/devis" className="button-ghost">Parlez-nous de votre projet</Link>
              <Link href="/customize" className="button-primary">Créer mon projet 🪄</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section border-t border-neutral-200">
        <div className="container">
          <h2 className="text-3xl font-semibold mb-8">Avis clients</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {["Qualité incroyable et glow magnifique.", "Livraison rapide et service client top.", "Personnalisation simple et prix clair."].map((t, i) => (
              <div key={i} className="p-6 rounded-xl border border-neutral-200 bg-neutral-50">
                <p className="text-neutral-700">{t}</p>
                <div className="mt-3 text-neutral-500 text-sm">★★★★★</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
