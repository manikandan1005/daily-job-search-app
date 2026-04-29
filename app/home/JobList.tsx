"use client"
import React, { useState, useEffect } from 'react'
import JobCart from './JobCart'

export default function JobList() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("http://localhost:4000/v1/jobs");
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false); // ✅ runs after fetch, not after 5 seconds
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className='flex flex-col gap-5 p-3 m-2 bg-red-800'>
      {loading
        ? Array.from({ length: 5 }).map((_, i) => (
            <JobCart key={i} prop={null} />
          ))
        : data.map((item: any, index: number) => (
            <JobCart key={index} prop={item} />
          ))
      }
    </div>
  );
}