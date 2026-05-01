"use client"
import { useState } from 'react'
import { Section } from '../privacy-data'
import SectionContent from './SectionContent'

export default function AccordionItem({ section, index }: { section: Section; index: number }) {
  const [open, setOpen] = useState(index === 0)
  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
      <button onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 bg-white hover:bg-indigo-50/50 transition-colors text-left">
        <div className="flex items-center gap-4">
          <span className="text-xs font-black text-indigo-300 tracking-widest">{section.number}</span>
          <span className="font-bold text-gray-900">{section.title}</span>
        </div>
        <span className={`text-indigo-500 text-lg transition-transform duration-200 ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      {open && (
        <div className="px-6 pb-6 pt-1 bg-white border-t border-gray-50">
          <SectionContent section={section} />
        </div>
      )}
    </div>
  )
}