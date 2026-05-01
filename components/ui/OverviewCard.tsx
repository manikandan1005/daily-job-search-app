type OverviewItem = {
  label: string;
  value: string;
};

export function OverviewCard({ items }: { items: OverviewItem[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {items.map((i) => (
        <div key={i.label} className="bg-gray-100 rounded-lg px-4 py-3">
          <p className="text-[11px] text-gray-400 uppercase tracking-widest mb-1">
            {i.label}
          </p>
          <p className="text-sm font-semibold text-gray-800">{i.value}</p>
        </div>
      ))}
    </div>
  );
}