import { termsSections, termsChips } from './terms-data'
import TermAccordionItem from './components/TermAccordionItem'

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-600 via-rose-600 to-pink-600 text-white px-6 py-24 text-center">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "28px 28px" }} />
        <div className="relative max-w-2xl mx-auto">
          <span className="inline-block bg-white/15 text-white/90 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">Legal</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Terms & Conditions</h1>
          <p className="text-white/70 text-sm">Last Updated: <span className="text-white font-semibold">April 30, 2026</span></p>
          <p className="text-white/60 text-sm mt-4 max-w-lg mx-auto leading-relaxed">
            By accessing and using Daily Job Search, you agree to comply with and be bound by the following terms.
          </p>
        </div>
      </section>

      {/* Chips */}
      <section className="bg-white border-b border-gray-100 px-6 py-5">
        <div className="max-w-3xl mx-auto flex flex-wrap gap-2 justify-center">
          {termsChips.map((chip) => (
            <span key={chip} className="bg-orange-50 border border-orange-100 text-orange-700 text-xs font-semibold px-3 py-1.5 rounded-full">
              {chip}
            </span>
          ))}
        </div>
      </section>

      {/* Accordion */}
      <section className="py-14 px-6">
        <div className="max-w-3xl mx-auto space-y-3">
          {termsSections.map((section, i) => (
            <TermAccordionItem key={section.number} section={section} index={i} />
          ))}
        </div>
      </section>

      <section className="pb-16 px-6 text-center">
        <p className="text-gray-400 text-xs">© {new Date().getFullYear()} Daily Job Search. All rights reserved.</p>
      </section>

    </main>
  )
}