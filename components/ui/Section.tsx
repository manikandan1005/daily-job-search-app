export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-7">
      <h2 className="text-lg font-bold text-gray-900 mb-3 pb-2 border-b border-gray-200">{title}</h2>
      {children}
    </div>
  );
}