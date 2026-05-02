'use client';

import React, { useEffect } from 'react';
import { ClockCircleOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import { useRouter } from 'next/navigation';

export default function JobCart({ prop }: any) {
  const router = useRouter();
  useEffect(()=>{
    console.log(prop)
  },[])

  return (
    <Card
      loading={!prop}
      hoverable
      onClick={() => prop && router.push(`/job-description/${prop.id}`)}
      style={{ minWidth: 280, maxWidth: 900 }}
      styles={{ body: { padding: 3 } }}
    >
      <div className="flex flex-col lg:flex-row items-start gap-4">

        {/* Banner */}
        <img
          src={prop?.banner}
          alt={prop?.title}
          className="w-full lg:w-48 h-auto object-cover rounded-md flex-shrink-0"
        />

        {/* Content */}
        <div className="flex flex-col gap-2 p-2 flex-1">

          {/* Title */}
          <p className="font-bold text-xl leading-snug line-clamp-2 m-0">{prop?.title}</p>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {prop?.categories?.map((i: string) => (
              <span
                key={i}
                className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded"
              >
                {i}
              </span>
            ))}
          </div>

          {/* Date */}
          <span className="font-semibold text-sm text-gray-600">
            <ClockCircleOutlined className="mr-1" />
            {prop?.date}
          </span>

          {/* Location */}
          <div className="flex flex-wrap gap-2">
            {prop?.location?.map((loc: string) => (
              <span
                key={loc}
                className="bg-green-500 text-white text-xs px-2 py-0.5 rounded"
              >
                {loc}
              </span>
            ))}
          </div>

          {/* Job Type */}
          <div className="flex flex-wrap gap-2">
            {prop?.jobType?.map((type: string) => (
              <span
                key={type}
                className="bg-purple-500 text-white text-xs px-2 py-0.5 rounded"
              >
                {type}
              </span>
            ))}
          </div>

        </div>
      </div>
    </Card>
  );
}