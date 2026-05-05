import { Suspense } from 'react'
import JobList from './JobList'

export default function JobPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center text-gray-400 animate-pulse">Loading...</div>}>
      <JobList />
    </Suspense>
  )
}