"use client"
import React from 'react'

const stats = [
  { value: "500+", label: "Daily Job Listings" },
  { value: "10K+", label: "Job Seekers Helped" },
  { value: "100%", label: "Free to Use" },
]

const offerings = [
  {
    icon: "📅",
    title: "Daily Updated Listings",
    desc: "Fresh job postings every day so you never miss an opportunity.",
  },
  {
    icon: "🎓",
    title: "Fresher & Internship Roles",
    desc: "Curated opportunities specifically for students and fresh graduates.",
  },
  {
    icon: "📋",
    title: "Clear Job Details",
    desc: "Simple, organized job info — no clutter, just what you need.",
  },
  {
    icon: "🔍",
    title: "Easy Navigation",
    desc: "Filter by location, role type, and experience level with ease.",
  },
]

const audiences = [
  { icon: "🧑‍🎓", label: "Fresh Graduates" },
  { icon: "📚", label: "Students seeking Internships" },
  { icon: "💼", label: "Entry-level Job Seekers" },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-violet-600 via-indigo-600 to-blue-500 text-white px-6 py-24 text-center">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="relative max-w-3xl mx-auto">
          <span className="inline-block bg-white/20 text-white text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
            About Us
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Welcome to{" "}
            <span className="underline decoration-yellow-300 decoration-4 underline-offset-4">
              #DailyJobs
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-2xl mx-auto">
            A platform designed to help job seekers find the latest opportunities quickly and easily —
            built for freshers, students, and entry-level candidates across India.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-indigo-50 border-y border-indigo-100 py-10 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-3xl md:text-4xl font-black text-indigo-600">{s.value}</p>
              <p className="text-sm text-gray-500 mt-1 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-indigo-500 font-bold uppercase tracking-widest text-xs">Our Mission</span>
            <h2 className="text-3xl font-extrabold mt-2 mb-4 leading-snug">
              Making Job Search <br />
              <span className="text-indigo-600">Simple & Accessible</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to make job searching easier for students and fresh graduates by
              providing reliable and easy-to-access job information in one place — no complexity,
              no confusion, just opportunities.
            </p>
          </div>
          <div className="bg-gradient-to-br from-indigo-50 to-violet-50 border border-indigo-100 rounded-2xl p-8">
            <p className="text-indigo-700 text-lg font-semibold italic leading-relaxed">
              "We believe every fresher deserves a fair chance at finding their first job — 
              and we're here to make that search a little easier."
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-indigo-500 font-bold uppercase tracking-widest text-xs">What We Offer</span>
            <h2 className="text-3xl font-extrabold mt-2">Everything You Need to Get Hired</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {offerings.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Source */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-indigo-500 font-bold uppercase tracking-widest text-xs">How We Source Jobs</span>
          <h2 className="text-3xl font-extrabold mt-2 mb-6">Reliable & Verified Listings</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Job listings on this platform are collected from various public sources such as company
            websites, job portals, and official announcements. While we try to provide accurate
            information, users are advised to verify details before applying.
          </p>
          <div className="inline-flex items-center gap-2 bg-yellow-50 border border-yellow-200 text-yellow-800 text-sm font-medium px-4 py-2 rounded-full">
            ⚠️ Always verify job details directly with the company before applying.
          </div>
        </div>
      </section>

      {/* Who Can Use */}
      <section className="bg-gradient-to-br from-indigo-600 to-violet-600 text-white py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-white/70 font-bold uppercase tracking-widest text-xs">Who Can Use This Platform</span>
          <h2 className="text-3xl font-extrabold mt-2 mb-10">Built For You</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {audiences.map((a) => (
              <div key={a.label} className="bg-white/15 backdrop-blur rounded-2xl p-6 border border-white/20">
                <div className="text-4xl mb-3">{a.icon}</div>
                <p className="font-semibold text-white">{a.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-16 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
          <h3 className="font-extrabold text-lg mb-3 flex items-center gap-2">
            <span>📌</span> Disclaimer
          </h3>
          <p className="text-gray-600 leading-relaxed text-sm">
            We are <strong>not a recruitment agency</strong> and do not directly hire candidates.
            We only share job information to help users find opportunities. All listings are sourced
            from publicly available information and we hold no responsibility for their accuracy.
          </p>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-4">Have Questions?</h2>
          <p className="text-gray-500 mb-8">
            If you have any questions, suggestions, or concerns — we'd love to hear from you.
            We're continuously working to improve this platform.
          </p>
          <a
            href="/contact"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-8 py-3 rounded-full transition-colors"
          >
            Contact Us →
          </a>
        </div>
      </section>

    </main>
  )
}