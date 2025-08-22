import "./App.css";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Gift,
  MessageCircle,
  Phone,
  Play,
  Sparkles,
  Star,
  Store
} from "lucide-react";
import { useEffect, useMemo } from "react";

function App() {
  return (
    <GiftMeGoodLanding />
  );
}

const ASSETS = [
  {
    src: "/images/gmg/A17F955D-32B5-44AC-8DD4-8A054C264436.JPG",
    alt: "Decorated round hamper with red rose and gold mesh"
  },
  {
    src: "/images/gmg/IMG_8321.JPG",
    alt: "Golden tray hamper with jars, sweets and personalized card"
  },
  {
    src: "/images/gmg/IMG_8341.JPG",
    alt: "Decorated round hamper with magenta flower"
  },
  {
    src: "/images/gmg/IMG_8362.JPG",
    alt: "Rakhi return favors in red organza pouches"
  },
  {
    src: "/images/gmg/IMG_20250624_200642_Original.JPG",
    alt: "Wooden crate with yellow floral tea tins"
  },
  {
    src: "/images/gmg/IMG_20250628_130717_Bokeh_Original.JPG",
    alt: "Festive elephant-print gift boxes with bows"
  },
  {
    src: "/images/gmg/IMG_20250628_131109_Bokeh_Original.JPG",
    alt: "Elephant-print tin set styled with flowers"
  },
  {
    src: "/images/gmg/IMG_20250629_113505_Original.JPG",
    alt: "Jute lace bag with brass diya set"
  },
  {
    src: "/images/gmg/IMG_20250705_150606_Original.JPG",
    alt: "Set of three elephant-print hampers with ribbons"
  },
  {
    src: "/images/gmg/IMG_20250705_182842_Original.JPG",
    alt: "Beauty bouquet pink gift arrangement"
  },
  {
    src: "/images/gmg/IMG_20250706_212121_Original.JPG",
    alt: "Dry fruit platter with floral centerpiece"
  },
  {
    src: "/images/gmg/IMG_20250804_011458_Bokeh_Original.JPG",
    alt: "Snack hampers in floral trays"
  },
  {
    src: "/images/gmg/IMG_20250816_155021_Bokeh_Original.JPG",
    alt: "Snack hamper basket wrapped in tulle"
  }
];

const LOGO_IMG = (
  <img src="/images/gmg/logo.png" alt="GiftMeGood logo"
       className="h-14 w-auto" />
);


function GiftMeGoodLanding() {
  const palette = useMemo(
    () => ({
      wine: "#8B1E3F",
      gold: "#D4AF37",
      blush: "#FFF5F7",
      ink: "#111827",
      surface: "#FFFFFF"
    }),
    []
  );

  // Ensure smooth scrolling for anchor links (nav works on all browsers)
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  // Choose groups for hero / categories / gallery
  const heroGrid = ASSETS.slice(0, 6);
  const categories = [
    { title: "Weddings & Anniversaries", img: ASSETS[5].src },
    { title: "Birthdays", img: ASSETS[9].src },
    { title: "Baby Showers", img: ASSETS[1].src },
    { title: "Corporate Gifting", img: ASSETS[4].src },
    { title: "Personalized Hampers", img: ASSETS[0].src },
    { title: "Festive Collections", img: ASSETS[8].src }
  ];

  return (
    <div className="min-h-screen bg-[rgb(255,249,246)] text-[rgb(17,24,39)]">
      {/* Top announcement */}
      <div className="w-full bg-white/70 backdrop-blur border-b border-black/5">
        <div className="mx-auto max-w-7xl px-4 py-2 text-center text-sm">
          <span className="inline-flex items-center gap-2 text-gray-600">
            <Sparkles className="h-4 w-4 text-[rgb(139,30,63)]" />
            <span>Curated gifts • Handcrafted hampers • Pan-India shipping</span>
          </span>
        </div>
      </div>

      {/* Navbar */}
      <header
        className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-black/5">
        <div
          className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">{LOGO_IMG}</div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#categories"
               className="hover:text-[var(--wine)] font-medium"
               style={{ "--wine": palette.wine }}>Categories</a>
            <a href="#gallery" className="hover:text-[var(--wine)] font-medium"
               style={{ "--wine": palette.wine }}>Gallery</a>
            <a href="#how" className="hover:text-[var(--wine)] font-medium"
               style={{ "--wine": palette.wine }}>How it works</a>
            <a href="#contact" className="hover:text-[var(--wine)] font-medium"
               style={{ "--wine": palette.wine }}>Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="#contact"
               className="hidden sm:inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium border border-black/10 hover:bg-gray-50">
              <Phone className="h-4 w-4 text-[rgb(139,30,63)]" /> Talk to us
            </a>
            <a href="#cta"
               className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white shadow"
               style={{ backgroundColor: palette.wine }}>
              Customize a Hamper <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden" id="top">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0" style={{
            background: "radial-gradient(900px 500px at 10% 20%, rgba(139,30,63,.08), transparent 60%), radial-gradient(600px 400px at 90% 10%, rgba(212,175,55,.10), transparent 60%)"
          }} />
        </div>
        <div
          className="mx-auto max-w-7xl px-4 py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1 initial={{ opacity: 0, y: 10 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ duration: .6 }}
                       className="text-4xl md:text-5xl font-extrabold tracking-tight"
                       style={{ color: palette.wine }}>
              Celebrate Every Moment
            </motion.h1>
            <p className="mt-4 text-lg text-gray-600 max-w-prose">GiftMeGood
              crafts premium, personalized hampers and thoughtful gifts for
              weddings, birthdays, baby showers, corporate events and everything
              in between. Handpicked. Handwrapped. Heartfelt.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#categories"
                 className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white"
                 style={{ backgroundColor: palette.wine }}>
                Explore Categories <Gift className="h-4 w-4" />
              </a>
              <a href="#gallery"
                 className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold border border-black/10 bg-white/80 hover:bg-gray-50">
                View Gallery <Play className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-gray-600">
              <span className="inline-flex items-center gap-1"><BadgeCheck
                className="h-4 w-4 text-[rgb(139,30,63)]" /> Customizable</span>
              <span className="inline-flex items-center gap-1"><Store
                className="h-4 w-4 text-[rgb(139,30,63)]" /> Bulk & Corporate</span>
              <span className="inline-flex items-center gap-1"><Star
                className="h-4 w-4 text-[rgb(139,30,63)]" /> Handcrafted</span>
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-3 gap-3">
              {heroGrid.map((img, i) => (
                <div key={i}
                     className="aspect-square rounded-xl bg-white shadow border border-black/5 overflow-hidden">
                  <img src={img.src} alt={img.alt}
                       className="h-full w-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="mx-auto max-w-7xl px-4 py-16">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl md:text-3xl font-bold"
              style={{ color: palette.wine }}>Shop by Occasion</h2>
          <a href="#cta" className="text-sm font-medium hover:underline">Need
            help choosing?</a>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((c, idx) => (
            <a key={idx} href="#gallery"
               className="group relative overflow-hidden rounded-2xl border border-black/5 shadow">
              <img src={c.img} alt={c.title}
                   className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-0 p-4">
                <p
                  className="text-white text-lg font-semibold drop-shadow">{c.title}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="bg-white/60 border-y border-black/5">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold"
              style={{ color: palette.wine }}>Gallery</h2>
          <p className="mt-2 text-gray-600">A peek into our handcrafted hampers
            and decor-rich gifts.</p>
          <div
            className="mt-8 columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
            <div className="grid gap-4 break-inside-avoid">
              {ASSETS.map((img, i) => (
                <img key={i}
                     className="rounded-2xl border border-black/5 shadow w-full mb-4"
                     src={img.src} alt={img.alt} />
              ))}
            </div>
          </div>
          <div className="mt-6">
            <a href="#contact"
               className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white"
               style={{ backgroundColor: palette.wine }}>
              Book a Consult <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold"
            style={{ color: palette.wine }}>How it works</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            {
              step: 1,
              title: "Tell us the occasion",
              desc: "Share the event, budget and preferences. We’ll shortlist ideas in hours."
            },
            {
              step: 2,
              title: "Personalize it",
              desc: "Pick your hamper style, colours and add-ons. All handcrafted."
            },
            {
              step: 3,
              title: "We deliver with care",
              desc: "Pan-India delivery and on-time coordination for events and corporates."
            }
          ].map((card, i) => (
            <div key={i}
                 className="rounded-2xl border border-black/5 bg-white/80 p-6 shadow">
              <div className="flex items-center gap-2 text-sm font-semibold"
                   style={{ color: palette.wine }}>
                <span
                  className="inline-flex h-7 w-7 items-center justify-center rounded-full text-white"
                  style={{ backgroundColor: palette.wine }}>{card.step}</span>
                Step {card.step}
              </div>
              <h3 className="mt-3 text-lg font-semibold">{card.title}</h3>
              <p className="mt-1 text-gray-600">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="mx-auto max-w-7xl px-4 py-16">
        <div
          className="rounded-3xl overflow-hidden border border-black/5 shadow bg-gradient-to-r from-[rgba(139,30,63,0.95)] to-[rgba(212,175,55,0.5)]">
          <div className="p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h2 className="text-2xl md:text-3xl font-bold">Let’s craft your
                perfect gift</h2>
              <p className="mt-2 text-white/90">Tell us the occasion and budget.
                We’ll send curated options in hours.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#contact"
                   className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold bg-white text-[rgb(139,30,63)]">
                  WhatsApp us <MessageCircle className="h-4 w-4" />
                </a>
                <a href="#contact"
                   className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold border border-white/60 text-white">
                  Get a quick quote <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="rounded-2xl bg-white/85 p-6">
              <form className="grid grid-cols-1 gap-3">
                <input
                  className="rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm"
                  placeholder="Your name" />
                <input
                  className="rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm"
                  placeholder="Email or phone" />
                <input
                  className="rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm"
                  placeholder="Occasion (wedding, birthday, corporate...)" />
                <textarea
                  className="rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm"
                  placeholder="Tell us about your idea" rows={3} />
                <button type="button"
                        className="rounded-xl px-5 py-2.5 text-sm font-semibold text-white"
                        style={{ backgroundColor: palette.wine }}>Request ideas
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-white border-t border-black/5">
        <div className="mx-auto max-w-7xl px-4 py-10 grid md:grid-cols-3 gap-8">
          <div>
            {/*<div className="flex items-center gap-2">{LOGO_SVG}</div>*/}
            <h4 className="font-semibold"
                style={{ color: palette.wine }}>About Us</h4>
            <p className="mt-2 text-sm text-gray-600 max-w-sm">Premium
              handcrafted gifts & decor-rich hampers tailored to your moments.
              Based in India • Shipping Pan-India.</p>
          </div>
          <div>
            <h4 className="font-semibold"
                style={{ color: palette.wine }}>Contact</h4>
            <ul className="mt-2 space-y-2 text-sm text-gray-700">
              <li>
                WhatsApp: <a href="https://wa.me/919972681863" target="_blank"
                             rel="noopener noreferrer"
                             className="font-medium text-[rgb(139,30,63)] hover:underline">+91-9972681863</a>
              </li>
              {/*<li>WhatsApp: <span*/}
              {/*  className="font-medium text-[rgb(139,30,63)]">+91-9972681863</span>*/}
              {/*</li>*/}
              <li>Email: <a href="mailto:hello@giftmegood.co.in"
                            className="font-medium text-[rgb(139,30,63)] hover:underline">hello@giftmegood.co.in</a>
              </li>
              <li>Instagram: <a href="https://www.instagram.com/giftme_good/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-medium text-[rgb(139,30,63)] hover:underline">@giftme_good</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold" style={{ color: palette.wine }}>Quick
              links</h4>
            <ul className="mt-2 space-y-1 text-sm text-gray-700">
              <li><a href="#categories"
                     className="hover:underline">Categories</a></li>
              <li><a href="#gallery" className="hover:underline">Gallery</a>
              </li>
              <li><a href="#how" className="hover:underline">How it works</a>
              </li>
              <li><a href="#top" className="hover:underline">Back to top</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-black/5">
          <div
            className="mx-auto max-w-7xl px-4 py-4 text-xs text-gray-500 flex items-center justify-between">
            <span>© {new Date().getFullYear()} GiftMeGood</span>
            <span>Made with love • Handwrapped</span>
          </div>
        </div>
      </footer>
    </div>
  );
}


export default App;
