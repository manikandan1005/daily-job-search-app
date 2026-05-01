export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-2 p-0 m-0 list-none">
      {items.map((item, i) => (
        <li key={i} className="relative pl-5 text-sm text-gray-600 leading-relaxed">
          <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-orange-500" />
          {item}
        </li>
      ))}
    </ul>
  );
}