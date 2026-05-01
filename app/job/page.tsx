"use client"
import React, { useState, useEffect } from 'react'
import JobCart from './JobCart'

const mockData = [
  {
    title: "Analytics Internship 2026 – Complete Guide for Freshers and Students",
    banner:"https://www.jobalerts4u.in/wp-content/uploads/2025/12/Feature-21.png",
    categories: ["FRESHERS", "INTERNSHIPS"],
    description: "If you are looking to build a career in data analytics...",
    author: "Chandan Mahato",
    location: ["Chennai", "Bangalore"],
    jobType: ["Onsite", "Hybrid"],
    date: "April 29, 2026"
  },
  {
    title: "Freshers Software Engineer 2026 – Complete Job Guide for Entry-Level Candidates",
    categories: ["FRESHERS", "EXPERIENCED"],banner:"https://www.jobalerts4u.in/wp-content/uploads/2025/12/Feature-21.png",
    description: "If you are a recent graduate looking to start your career...",
    author: "Chandan Mahato",
    location: ["Chennai", "Bangalore"],
    jobType: ["Remote", "Onsite", "Hybrid"],
    date: "April 29, 2026"
  },
  {
    title: "IT Apprentice 2026 – Cybersecurity Internship Opportunity",
    categories: ["FRESHERS", "TRAINEE"],banner:"https://www.jobalerts4u.in/wp-content/uploads/2025/12/Feature-21.png",
    description: "If you are looking to start your career in cybersecurity...",
    author: "Chandan Mahato",
    location: ["Chennai", "Bangalore"],
    jobType: ["Remote", "Onsite"],
    date: "April 29, 2026"
  },
  {
    title: "Software Engineer Apprentices 2026 – Full Stack Internship Opportunity",
    categories: ["FRESHERS", "EXPERIENCED"],banner:"https://www.jobalerts4u.in/wp-content/uploads/2025/12/Feature-21.png",
    description: "If you are a fresher or final-year student looking to start...",
    author: "Chandan Mahato",
    location: ["Chennai", "Bangalore"],
    jobType: ["Remote", "Onsite", "Hybrid"],
    date: "April 28, 2026"
  },
  {
    title: "Qualcomm Off Campus Drive 2026 – Hardware Engineer Role for Freshers",
    categories: ["FRESHERS", "TRAINEE"],banner:"https://www.jobalerts4u.in/wp-content/uploads/2025/12/Feature-21.png",
    description: "If you are aiming to start your career in core engineering...",
    author: "Chandan Mahato",
    location: ["Chennai", "Bangalore"],
    jobType: ["Remote", "Onsite"],
    date: "April 28, 2026"
  },
  {
    title: "Airbus Systems Apprentice 2026 – Complete Guide for Freshers",
    categories: ["FRESHERS", "TRAINEE"],
    description: "If you are a fresher dreaming of working in the aerospace industry...",
    author: "Chandan Mahato",banner:"https://www.jobalerts4u.in/wp-content/uploads/2025/12/Feature-21.png",
    location: ["Chennai", "Bangalore"],
    jobType: ["Remote", "Onsite"],
    date: "April 28, 2026"
  },
  {
    title: "Data Operations Apprentice 2026 – Complete Job Guide for Freshers",
    categories: ["FRESHERS", "TRAINEE"],
    description: "If you are a fresher looking to start your career in data...",
    author: "Chandan Mahato",c:"https://www.jobalerts4u.in/wp-content/uploads/2025/12/Feature-21.png",
    location: ["Chennai", "Bangalore"],
    jobType: ["Remote", "Onsite", "Hybrid"],banner:"https://www.jobalerts4u.in/wp-content/uploads/2025/12/Feature-21.png",
    
    date: "April 28, 2026"
  }
];

export default function JobList() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // ✅ Replace this block with your real API call later:
    // const res = await fetch('/api/jobs');
    // const json = await res.json();
    // setData(json);

    const timer = setTimeout(() => {
      setData(mockData);
      setLoading(false);
    }, 1000); // simulates API delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='flex flex-col gap-2 p-3 w-full '>
      {loading
        ? Array.from({ length: 5 }).map((_, i) => (
            <JobCart key={i} prop={null} />   // skeleton cards
          ))
        : data.map((item: any, index: number) => (
            <JobCart key={index} prop={item} />  // real data
          ))
      }
    </div>
  );
}