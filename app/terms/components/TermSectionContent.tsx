import Link from 'next/link'
import { TermSection } from '../terms-data'
import BulletList from '@/components/ui/BulletList'

 

export default function TermSectionContent({ section }: { section: TermSection }) {
  const { type, description, items, note } = section

  if (type === "list" || type === "list-text") return (
    <div className="space-y-3">
      {description && <p className="text-gray-600 text-sm leading-relaxed">{description}</p>}
      <BulletList items={items!} />
      {note && <p className="text-gray-500 text-sm italic mt-2">{note}</p>}
    </div>
  )
  
  

  if (type === "link") return (
    <div className="space-y-3">
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      <Link href="/contact"
        className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors">
        Go to Contact Page →
      </Link>
    </div>
  )

  return <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
}