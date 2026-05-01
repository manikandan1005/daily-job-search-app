export default function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-2 text-gray-600 text-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  )
}