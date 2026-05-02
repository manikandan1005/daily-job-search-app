"use client"
import { useFetch } from '@/hooks/useFetch'
import JobDescription from '../JobDescription'
import React from 'react'


export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params)  // ← unwrap with React.use()
  const { data, loading, err } = useFetch(`/jobs/${id}`)

  if (loading) return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-gray-400 animate-pulse">Loading job details...</p>
    </div>
  )

  if (err || !data) return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-red-400">Failed to load job. Please try again.</p>
    </div>
  )

  return <JobDescription job={data} />
}