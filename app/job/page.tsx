"use client"
import React, { useState, useEffect } from 'react'
import JobCart from './JobCart'
import { useFetch } from '@/hooks/useFetch';





export default function JobList() {
  const { data: dataFromApi,loading, err  }=useFetch("/jobs")

   console.log(dataFromApi)

  return (
    <div className='flex flex-col gap-2 p-3 w-full '>
      {loading
        ? Array.from({ length: 5 }).map((_, i) => (
            <JobCart key={i} prop={null} />   // skeleton cards
          ))
        : dataFromApi.map((item: any, index: number) => (
            <JobCart key={item.id} prop={item} />  // real data
          ))
      }
    </div>
  );
}