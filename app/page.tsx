
import { Suspense } from 'react'
import JobList from "./job/page"

export default function Home() {
  return (
    <div className="flex w-full items-center">
      <Suspense fallback={<div>Loading...</div>}>
        <JobList />
      </Suspense>
    </div>
  )
}