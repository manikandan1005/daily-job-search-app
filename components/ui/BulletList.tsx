export default function BulletList({ items, color = "indigo" }: { items: string[], color?: "indigo" | "orange" }) {
  const dot = color === "orange" ? "bg-orange-400" : "bg-indigo-400"
  return (
    <ul className="space-y-1">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-2 text-gray-600 text-sm">
          <span className={`w-1.5 h-1.5 rounded-full ${dot} flex-shrink-0`} />
          {item}
        </li>
      ))}
    </ul>
  )
}