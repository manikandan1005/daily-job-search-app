"use client"
import React from 'react'
import { useSearchParams } from 'next/navigation'
import JobCart from './JobCart'
import { useFetch } from '@/hooks/useFetch'

export default function JobList() {
  const { data: dataFromApi, loading, err } = useFetch("/jobs")
  const searchParams = useSearchParams()
  const type = searchParams.get("type")  // "fresher" | "internship" | "experience" | null
  const search = searchParams.get("search")?.toLowerCase()

const filteredData = dataFromApi?.filter((job: any) => {
  const matchesType = type
    ? job.categories?.some((c: string) =>
        c.toLowerCase().includes(type.toLowerCase())
      )
    : true

  const matchesSearch = search
    ? job.location?.some((loc: string) =>
        loc.toLowerCase().includes(search)
      ) ||
      job.categories?.some((c: string) =>
        c.toLowerCase().includes(search)
      )
    : true

  return matchesType && matchesSearch})

  return (
    <div className='flex flex-col gap-2 p-3 w-full'>
      {loading
        ? Array.from({ length: 5 }).map((_, i) => (
            <JobCart key={i} prop={null} />
          ))
        : filteredData?.map((item: any) => (
            <JobCart key={item.id} prop={item} />
          ))
      }
    </div>
  )
}