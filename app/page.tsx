"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  Building2,
  ChevronRight,
  Coffee,
  Compass,
  MapPin,
  Menu,
  MessageCircle,
  Search,
  Sparkles,
  Stethoscope,
  Store,
  TrendingUp,
  UtensilsCrossed,
  X,
  Zap,
} from "lucide-react";

const CATEGORIES = [
  {
    icon: UtensilsCrossed,
    title: "Restaurants",
    description: "Fine dining, street food, and hidden gems.",
    count: "2,400+",
    accent: "from-amber-500/20 to-orange-600/5",
    iconBg: "bg-amber-500/15 text-amber-400",
  },
  {
    icon: Stethoscope,
    title: "Clinics",
    description: "Dental, aesthetic, and wellness centers on one map.",
    count: "890+",
    accent: "from-emerald-500/20 to-teal-600/5",
    iconBg: "bg-emerald-500/15 text-emerald-400",
  },
  {
    icon: Coffee,
    title: "Cafés",
    description: "Third-wave coffee, coworking spaces, and boutique venues.",
    count: "1,650+",
    accent: "from-rose-500/20 to-pink-600/5",
    iconBg: "bg-rose-500/15 text-rose-400",
  },
  {
    icon: Store,
    title: "Retail",
    description: "Luxury retail, boutiques, and local designers.",
    count: "3,100+",
    accent: "from-violet-500/20 to-purple-600/5",
    iconBg: "bg-violet-500/15 text-violet-400",
  },
  {
    icon: Building2,
    title: "Hotels",
    description: "Boutique hotels, resorts, and business travel stays.",
    count: "420+",
    accent: "from-sky-500/20 to-blue-600/5",
    iconBg: "bg-sky-500/15 text-sky-400",
  },
  {
    icon: Zap,
    title: "Services",
    description: "Salons, spas, fitness, and premium lifestyle services.",
    count: "1,200+",
    accent: "from-cyan-500/20 to-indigo-600/5",
    iconBg: "bg-cyan-500/15 text-cyan-400",
  },
];

const STATS = [
  { value: "12K+", label: "Listed Businesses" },
  { value: "48", label: "Cities" },
  { value: "4.8", label: "Average Rating" },
];

const WHATSAPP_NUMBER = "905551234567";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello Gladiator! I'd like to learn more about the platform."
);

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <>
      <style jsx global>{`
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }
        @keyframes pulse-ring {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          100% {
            transform: scale(1.4);
            opacity: 0;
          }
        }
        .animate-fade-up {
          animation: fade-up 0.8s ease-out forwards;
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-shimmer {
          background-size: 200% auto;
          animation: shimmer 4s linear infinite;
        }
        .animate-pulse-ring::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          border: 2px solid #d4af37;
          animation: pulse-ring 2s ease-out infinite;
        }
        .delay-100 {
          animation-delay: 0.1s;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
        .opacity-0-start {
          opacity: 0;
        }
      `}</style>

      <div className="min-h-screen bg-[#0a0a0f] text-zinc-100 antialiased">
        {/* Header */}
        <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-xl">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <a href="#" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#d4af37] to-[#8b6914] text-sm font-black tracking-tighter text-[#0a0a0f]">
                G
              </span>
              <span className="text-lg font-bold tracking-wide">
                GLADIATOR
                <span className="text-[#d4af37]">.</span>
              </span>
            </a>

            <nav className="hidden items-center gap-8 md:flex">
              <a
                href="#categories"
                className="text-sm text-zinc-400 transition hover:text-white"
              >
                Categories
              </a>
              <a
                href="#discover"
                className="text-sm text-zinc-400 transition hover:text-white"
              >
                Discover
              </a>
              <a
                href="#join"
                className="text-sm text-zinc-400 transition hover:text-white"
              >
                List Your Business
              </a>
              <a
                href="#join"
                className="rounded-full bg-gradient-to-r from-[#d4af37] to-[#b8860b] px-5 py-2 text-sm font-semibold text-[#0a0a0f] transition hover:brightness-110"
              >
                Join the Platform
              </a>
            </nav>

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="rounded-lg p-2 text-zinc-400 transition hover:bg-white/5 hover:text-white md:hidden"
              aria-label="Menu"
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {menuOpen && (
            <div className="animate-fade-in border-t border-white/5 bg-[#0a0a0f] px-4 py-4 md:hidden">
              <nav className="flex flex-col gap-3">
                <a
                  href="#categories"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-2 text-zinc-300 hover:bg-white/5"
                >
                  Categories
                </a>
                <a
                  href="#discover"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-2 text-zinc-300 hover:bg-white/5"
                >
                  Discover
                </a>
                <a
                  href="#join"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg bg-[#d4af37] px-3 py-2 text-center font-semibold text-[#0a0a0f]"
                >
                  Join the Platform
                </a>
              </nav>
            </div>
          )}
        </header>

        {/* Hero */}
        <section className="relative overflow-hidden pt-16">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-[#d4af37]/8 blur-[120px]" />
            <div className="absolute -left-40 top-40 h-80 w-80 rounded-full bg-violet-600/10 blur-[100px]" />
            <div className="absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-amber-600/10 blur-[100px]" />
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
                backgroundSize: "64px 64px",
              }}
            />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-20 sm:px-6 lg:px-8 lg:pb-32 lg:pt-28">
            <div
              className={`mx-auto max-w-4xl text-center ${visible ? "animate-fade-up" : "opacity-0-start"}`}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-[#d4af37]">
                <Sparkles className="h-3.5 w-3.5" />
                Premium Discovery Platform
              </div>

              <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-7xl">
                Discover the Best in{" "}
                <span className="bg-gradient-to-r from-[#f5e6b8] via-[#d4af37] to-[#8b6914] bg-clip-text text-transparent animate-shimmer">
                  Your City
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
                Gladiator brings together curated businesses—from restaurants and
                clinics to cafés and boutique shops. Location, services, and
                experiences, all in one place.
              </p>

              {/* Search bar */}
              <div
                className={`mx-auto mt-10 max-w-xl ${visible ? "animate-fade-up delay-200 opacity-0-start" : "opacity-0-start"}`}
              >
                <div className="group flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-2 pl-4 shadow-2xl shadow-black/40 backdrop-blur-sm transition focus-within:border-[#d4af37]/40 focus-within:bg-white/[0.07]">
                  <Search className="h-5 w-5 shrink-0 text-zinc-500" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search restaurants, clinics, or neighborhoods..."
                    className="flex-1 bg-transparent py-3 text-sm text-white outline-none placeholder:text-zinc-500"
                  />
                  <button
                    type="button"
                    className="flex items-center gap-1.5 rounded-xl bg-[#d4af37] px-5 py-3 text-sm font-semibold text-[#0a0a0f] transition hover:brightness-110"
                  >
                    Search
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div
                className={`mt-10 flex flex-wrap items-center justify-center gap-6 ${visible ? "animate-fade-up delay-300 opacity-0-start" : "opacity-0-start"}`}
              >
                {STATS.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-2xl font-bold text-[#d4af37]">{stat.value}</p>
                    <p className="mt-0.5 text-xs text-zinc-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating cards */}
            <div className="relative mx-auto mt-16 hidden max-w-5xl lg:block">
              <div className="animate-float absolute -left-4 top-8 rounded-2xl border border-white/10 bg-[#12121a]/90 p-4 shadow-xl backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20">
                    <UtensilsCrossed className="h-5 w-5 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">La Maison</p>
                    <p className="text-xs text-zinc-500">Fine Dining · 4.9 ★</p>
                  </div>
                </div>
              </div>
              <div className="animate-float absolute -right-4 top-16 rounded-2xl border border-white/10 bg-[#12121a]/90 p-4 shadow-xl backdrop-blur-md delay-200">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20">
                    <Stethoscope className="h-5 w-5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Elite Dental</p>
                    <p className="text-xs text-zinc-500">Clinic · 4.8 ★</p>
                  </div>
                </div>
              </div>
              <div className="mx-auto flex h-48 items-center justify-center rounded-3xl border border-white/5 bg-gradient-to-b from-white/[0.04] to-transparent">
                <Compass className="h-16 w-16 text-[#d4af37]/30" />
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section id="categories" className="relative py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-[#d4af37]">
                Categories
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Every Industry, One Platform
              </h2>
              <p className="mt-4 text-zinc-400">
                Filter by your needs and instantly discover top-rated, verified
                businesses near you.
              </p>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {CATEGORIES.map((cat, i) => (
                <article
                  key={cat.title}
                  className={`group relative overflow-hidden rounded-2xl border border-white/8 bg-[#12121a] p-6 transition duration-500 hover:-translate-y-1 hover:border-[#d4af37]/30 hover:shadow-lg hover:shadow-[#d4af37]/5 ${visible ? "animate-fade-up opacity-0-start" : "opacity-0-start"}`}
                  style={{ animationDelay: `${0.1 * i}s` }}
                >
                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${cat.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                  />
                  <div className="relative">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl ${cat.iconBg}`}
                    >
                      <cat.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold">{cat.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                      {cat.description}
                    </p>
                    <div className="mt-5 flex items-center justify-between">
                      <span className="text-xs font-medium text-[#d4af37]">
                        {cat.count} businesses
                      </span>
                      <span className="flex items-center gap-1 text-xs text-zinc-500 transition group-hover:text-[#d4af37]">
                        Explore <ChevronRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Discover strip */}
        <section id="discover" className="border-y border-white/5 bg-[#0e0e14] py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold sm:text-3xl">
                  Location-Based Smart Discovery
                </h2>
                <p className="mt-4 text-zinc-400">
                  View the best venues near you on the map, read reviews, and get
                  directions with a single tap.
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    "Real-time location and distance",
                    "Verified customer reviews",
                    "Instant booking and contact",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-zinc-300">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#d4af37]/15 text-[#d4af37]">
                        <MapPin className="h-3.5 w-3.5" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-[#1a1a24] to-[#12121a] p-8">
                <div className="flex items-center gap-2 text-[#d4af37]">
                  <TrendingUp className="h-5 w-5" />
                  <span className="text-sm font-medium">Trending This Week</span>
                </div>
                <div className="mt-6 space-y-4">
                  {["Nusr-Et Steakhouse", "Vogue Dental Clinic", "%100 Arabica"].map(
                    (name, i) => (
                      <div
                        key={name}
                        className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3 transition hover:border-[#d4af37]/20"
                      >
                        <span className="text-sm font-medium">{name}</span>
                        <span className="text-xs text-zinc-500">#{i + 1} trending</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA — Join platform */}
        <section id="join" className="relative py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl border border-[#d4af37]/20 bg-gradient-to-br from-[#1a1510] via-[#12121a] to-[#0a0a0f] p-10 sm:p-14 lg:p-16">
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#d4af37]/15 blur-[80px]" />
              <div className="relative mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                  Bring Your Business to{" "}
                  <span className="text-[#d4af37]">Gladiator</span>
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-zinc-400">
                  Reach thousands of potential customers. Grow your brand with a
                  premium storefront, analytics dashboard, and priority listings.
                </p>
                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <a
                    href="#join"
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#d4af37] to-[#b8860b] px-8 py-4 text-base font-bold text-[#0a0a0f] shadow-lg shadow-[#d4af37]/20 transition hover:scale-[1.02] hover:brightness-110 sm:w-auto"
                  >
                    Start Free Application
                    <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                  </a>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 px-8 py-4 text-base font-medium text-white transition hover:border-[#25D366]/50 hover:bg-[#25D366]/10 sm:w-auto"
                  >
                    <MessageCircle className="h-5 w-5 text-[#25D366]" />
                    Talk to Sales
                  </a>
                </div>
                <p className="mt-6 text-xs text-zinc-600">
                  First 30 days of premium listing free · No credit card required
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/5 py-10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-center text-sm text-zinc-500 sm:flex-row sm:px-6 sm:text-left lg:px-8">
            <p>
              © {new Date().getFullYear()} Gladiator. All rights reserved.
            </p>
            <p>Discover · Connect · Grow</p>
          </div>
        </footer>

        {/* WhatsApp FAB */}
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact us on WhatsApp"
          className="animate-pulse-ring group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/40"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-7 w-7"
            aria-hidden
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <span className="pointer-events-none absolute -top-10 right-0 whitespace-nowrap rounded-lg bg-[#12121a] px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition group-hover:opacity-100">
            Message us
          </span>
        </a>
      </div>
    </>
  );
}
