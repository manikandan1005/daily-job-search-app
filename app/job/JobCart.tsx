"use client"
import React, { useState, useEffect } from 'react';
import { ClockCircleOutlined } from '@ant-design/icons';
import { Card, Flex } from 'antd';
import { useRouter } from 'next/navigation';

export default function JobCart({ prop }: any) {
  const router = useRouter();
 // const img: string = "https://www.jobalerts4u.in/wp-content/uploads/2025/12/Feature-21.png";

  return (
    <Card
      loading={!prop}   // loading when prop is null/undefined (API not yet returned)
      hoverable
      onClick={() => prop && router.push("/job-description")}
      style={{ minWidth: 280, maxWidth: 900 }}
      styles={{body: { padding: 3 }}}
    >
      <div className="flex gap-4 flex-col lg:flex-row items-start ">
        <img src={prop?.banner} alt={prop?.title} className="w-100 h-50" />
        <div className="flex gap-1 flex-col">
          <p className="font-bold line-clamp-2 text-xl">{prop?.title}</p>
          <div className="flex gap-4">
            {prop?.categories.map((i: string) => (
              <li className="bg-blue-400 text-xs! text-white px-1 py-0.3" key={i}>{i}</li>
            ))}
          </div>
          <div>
            <span className='font-bold'><ClockCircleOutlined /> {prop?.date}</span>
          </div>
          <div className="flex gap-2">
            {prop?.location.map((loc: string) => (
              <span key={loc} className="bg-green-400 text-xs! text-white px-1 py-0.3">{loc}</span>
            ))}
          </div>
          <div className="flex gap-2">
            {prop?.jobType.map((type: string) => (
              <span key={type} className="bg-purple-400 text-xs! text-white px-2 py-0.3">{type}</span>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}