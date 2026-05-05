"use client"
import Link from 'next/link'

const categories = [
  { label: 'Fresher Jobs', href: '/job?type=fresher' },
  { label: 'Internships', href: '/job?type=internship' },
  { label: 'Experience Jobs', href: '/job?type=experience' },
]

const quickLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 px-6 py-12">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">

        {/* Brand */}
        <div className="flex flex-col gap-3">
          <h2 className=" text-red-500 text-2xl font-extrabold">#
            <span className="text-white">Daily</span>Jobs
          </h2>
          <p className="text-sm text-red-400 leading-relaxed">
            <span className="font-semibold text-white">DailyJobs</span> provides the latest{' '}
            <span className="font-semibold text-white">fresher & internship job updates</span>.
            We ensure you get <span className="font-semibold text-white">verified opportunities</span>{' '}
            to kick-start your career.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-col gap-3">
          <h3 className="text-white font-bold text-base tracking-wide">Categories</h3>
          <ul className="flex flex-col gap-2">
            {categories.map((item) => (
              <li key={item.label}>
                <Link href={item.href}
                  className="text-sm text-gray-400 hover:text-red-400 transition-colors no-underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-3">
          <h3 className="text-white font-bold text-base tracking-wide">Quick Links</h3>
          <ul className="flex flex-col gap-2">
            {quickLinks.map((item) => (
              <li key={item.label}>
                <Link href={item.href}
                  className="text-sm text-gray-400 hover:text-red-400 transition-colors no-underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="max-w-5xl mx-auto mt-10 pt-6 border-t border-gray-800 text-center text-xs text-gray-600">
        © {new Date().getFullYear()} DailyJobs. All rights reserved.
      </div>
    </footer>
  )
}