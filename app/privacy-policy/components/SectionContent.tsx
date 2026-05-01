import Link from 'next/link'
import { Section } from '../privacy-data'
import BulletList from '@/components/ui/BulletList'


export default function SectionContent({ section }: { section: Section }) {
  const { type, description, personal, nonPersonal, items, note, warning, optOutUrl } = section

  if (type === "list-ab") return (
    <div className="space-y-4">
      <div>
        <p className="font-semibold text-gray-800 mb-2">a. Personal Information</p>
        <BulletList items={personal!} />
              </div>
      <div>
        <p className="font-semibold text-gray-800 mb-2">b. Non-Personal Information</p>
        <BulletList items={nonPersonal!} />
        <p className="text-gray-500 text-sm mt-3 italic">Collected automatically to improve user experience.</p>
      </div>
    </div>
  )

  if (type === "list") return (
    <div className="space-y-3">
      {description && <p className="text-gray-600 text-sm">{description}</p>}
      <BulletList items={items!} />
      {note && <p className="text-gray-500 text-sm italic">{note}</p>}
    </div>
  )

  if (type === "note") return (
    <div className="space-y-3">
      <p className="text-gray-600 text-sm">{description}</p>
      <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 flex gap-3">
        <span>🍪</span>
        <p className="text-amber-800 text-sm">{note}</p>
      </div>
    </div>
  )

  if (type === "adsense") return (
    <div className="space-y-3">
      <p className="text-gray-600 text-sm">{description}</p>
      <div className="bg-blue-50 border border-blue-100 rounded-xl px-4 py-3">
        <p className="text-blue-700 text-sm">
          Opt out:{" "}
          <a href={optOutUrl} target="_blank" rel="noopener noreferrer" className="underline font-medium">
            google.com/settings/ads
          </a>
        </p>
      </div>
    </div>
  )

  if (type === "warning") return (
    <div className="space-y-3">
      <p className="text-gray-600 text-sm">{description}</p>
      <div className="bg-red-50 border border-red-100 rounded-xl px-4 py-3 flex gap-3">
        <span>⚠️</span>
        <p className="text-red-700 text-sm">{warning}</p>
      </div>
    </div>
  )

  if (type === "link") return (
    <div className="space-y-3">
      <p className="text-gray-600 text-sm">{description}</p>
      <Link href="/contact" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors">
        Go to Contact Page →
      </Link>
    </div>
  )

  return <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
}