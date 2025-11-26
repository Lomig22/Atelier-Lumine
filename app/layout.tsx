import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'
import { poppinsClass } from '@/lib/fonts'

export const metadata: Metadata = {
  title: 'Atelier Luminé',
  description: 'Enseignes LED personnalisées',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={poppinsClass}>
      <body>
        <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/80">
          <div className="container relative h-16 grid grid-cols-[1fr_auto_1fr] items-center pr-14 md:pr-16">
            <Link href="/" className="text-xl font-semibold tracking-wide text-neutral-900">Atelier Luminé</Link>
            <nav className="hidden md:flex gap-2 justify-self-center">
                <div className="relative group">
                  <Link href="/customize" className="px-3 py-2 text-sm font-medium text-neutral-700 hover:text-black">Néon personnalisé</Link>
                  <div className="absolute left-0 top-full mt-2 hidden group-hover:block z-50">
                    <div className="w-[520px] rounded-xl border border-neutral-200 bg-white shadow-lg p-4 grid grid-cols-2 gap-3">
                      <a href="/customize" className="block rounded-lg overflow-hidden border border-neutral-200">
                        <div className="relative w-full pb-[56%] bg-neutral-100">
                          <img src="/images/nav/neon-custom-1.svg" alt="Texte libre en néon" className="absolute inset-0 h-full w-full object-cover" />
                        </div>
                        <div className="px-3 py-2 text-sm text-neutral-700">Texte libre en néon</div>
                      </a>
                      <a href="/customize" className="block rounded-lg overflow-hidden border border-neutral-200">
                        <div className="relative w-full pb-[56%] bg-neutral-100">
                          <img src="/images/nav/neon-custom-2.svg" alt="Couleurs & tailles" className="absolute inset-0 h-full w-full object-cover" />
                        </div>
                        <div className="px-3 py-2 text-sm text-neutral-700">Couleurs & tailles</div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <Link href="/pro" className="px-3 py-2 text-sm font-medium text-neutral-700 hover:text-black">Néon Pro</Link>
                  <div className="absolute left-0 top-full mt-2 hidden group-hover:block z-50">
                    <div className="w-[520px] rounded-xl border border-neutral-200 bg-white shadow-lg p-4 grid grid-cols-2 gap-3">
                      <a href="/pro" className="block rounded-lg overflow-hidden border border-neutral-200">
                        <div className="relative w-full pb-[56%] bg-neutral-100">
                          <img src="/images/nav/pro-retail.svg" alt="Bureaux & Retail" className="absolute inset-0 h-full w-full object-cover" />
                        </div>
                        <div className="px-3 py-2 text-sm text-neutral-700">Bureaux & Retail</div>
                      </a>
                      <a href="/pro" className="block rounded-lg overflow-hidden border border-neutral-200">
                        <div className="relative w-full pb-[56%] bg-neutral-100">
                          <img src="/images/nav/pro-event.svg" alt="Évènementiel" className="absolute inset-0 h-full w-full object-cover" />
                        </div>
                        <div className="px-3 py-2 text-sm text-neutral-700">Évènementiel</div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <Link href="/enseignes-lumineuses" className="px-3 py-2 text-sm font-medium text-neutral-700 hover:text-black">Enseignes Lumineuses</Link>
                  <div className="absolute left-0 top-full mt-2 hidden group-hover:block z-50">
                    <div className="w-[520px] rounded-xl border border-neutral-200 bg-white shadow-lg p-4 grid grid-cols-2 gap-3">
                      <a href="/enseignes-lumineuses" className="block rounded-lg overflow-hidden border border-neutral-200">
                        <div className="relative w-full pb-[56%] bg-neutral-100">
                          <img src="/images/nav/enseignes-vitrine.svg" alt="Vitrines" className="absolute inset-0 h-full w-full object-cover" />
                        </div>
                        <div className="px-3 py-2 text-sm text-neutral-700">Vitrines</div>
                      </a>
                      <a href="/enseignes-lumineuses" className="block rounded-lg overflow-hidden border border-neutral-200">
                        <div className="relative w-full pb-[56%] bg-neutral-100">
                          <img src="/images/nav/enseignes-facade.svg" alt="Façades" className="absolute inset-0 h-full w-full object-cover" />
                        </div>
                        <div className="px-3 py-2 text-sm text-neutral-700">Façades</div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <Link href="/collections" className="px-3 py-2 text-sm font-medium text-neutral-700 hover:text-black">Nos Collections</Link>
                  <div className="absolute left-0 top-full mt-2 hidden group-hover:block z-50">
                    <div className="w-[780px] rounded-xl border border-neutral-200 bg-white shadow-lg p-4 grid grid-cols-3 gap-3">
                      <a href="/collections" className="block rounded-lg overflow-hidden border border-neutral-200">
                        <div className="relative w-full pb-[56%] bg-neutral-100">
                          <img src="/images/nav/collections-salon.svg" alt="Salon" className="absolute inset-0 h-full w-full object-cover" />
                        </div>
                        <div className="px-3 py-2 text-sm text-neutral-700">Salon</div>
                      </a>
                      <a href="/collections" className="block rounded-lg overflow-hidden border border-neutral-200">
                        <div className="relative w-full pb-[56%] bg-neutral-100">
                          <img src="/images/nav/collections-chambre.svg" alt="Chambre" className="absolute inset-0 h-full w-full object-cover" />
                        </div>
                        <div className="px-3 py-2 text-sm text-neutral-700">Chambre</div>
                      </a>
                      <a href="/collections" className="block rounded-lg overflow-hidden border border-neutral-200">
                        <div className="relative w-full pb-[56%] bg-neutral-100">
                          <img src="/images/nav/collections-bureau.svg" alt="Bureau" className="absolute inset-0 h-full w-full object-cover" />
                        </div>
                        <div className="px-3 py-2 text-sm text-neutral-700">Bureau</div>
                      </a>
                    </div>
                  </div>
                </div>
            </nav>
            <div className="justify-self-end flex items-center gap-4">
              <a
                href="tel:+33637018517"
                className="button-ghost font-medium"
                aria-label="Appeler Atelier Luminé"
              >
                06 37 01 85 17
              </a>
              <Link href="/devis" className="button-primary font-medium">
                Devis gratuit
              </Link>
            </div>
            <Link
              href="/checkout"
              aria-label="Voir le panier"
              className="absolute right-4 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-10 h-10 rounded-md border border-neutral-300 text-neutral-700 hover:bg-neutral-100 transition"
            >
              <ShoppingCart size={18} />
              <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-black text-white text-[10px] leading-[18px] text-center">0</span>
            </Link>
          </div>
        </header>
        <main>{children}</main>
        <footer className="border-t border-neutral-200 bg-white">
          <div className="container py-10 text-sm text-neutral-500">© {new Date().getFullYear()} Atelier Luminé</div>
        </footer>
      </body>
    </html>
  )
}
