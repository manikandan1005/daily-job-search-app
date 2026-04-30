import { Flex } from 'antd'
import React from 'react'
import { WhatsAppOutlined, ShareAltOutlined } from "@ant-design/icons";
import AddButton from '@/components/ui/AddButton';


export default function JobDescription() {
  const jobDetails = {
    title: "Accenture Hiring IT Customer Service Representative 2026 – Complete Job Guide for Freshers",
    categories: ["FRESHERS", "EXPERIENCED", "TECH SUPPORT"],
    description:
      "Accenture is hiring IT Customer Service Representatives in Coimbatore for candidates with 0–2 years of experience. This is an excellent opportunity for freshers looking to start a career in software, application, and cloud technical support.",
    author: "Chandan Mahato",
    date: "April 30, 2026",
    company: "Accenture",
    role: "IT Customer Service Representative",
    experience: "0-2 Years",
    qualification: "Graduate in any stream (15 years full-time education)",
    location: ["Coimbatore"],
    jobType: ["Full-Time", "Onsite"],
    workMode: "Onsite",
    jobId: "14154508",
    banner: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    tags: [
      "Accenture Jobs",
      "IT Support",
      "Customer Service",
      "Customer Support Jobs",
      "Tech Support Jobs",
      "Freshers Jobs 2026",
      "Coimbatore Jobs"
    ],

    overview: {
      aboutRole:
        "Accenture is hiring IT Customer Service Representatives for handling customer issues, troubleshooting software/application problems, and supporting system-related technical queries.",
      jobNo: "14154508",
      workMode: "Onsite",
      employmentType: "Full-Time",
      location: "Coimbatore"
    },

    responsibilities: [
      "Take ownership of customer issues and provide resolution",
      "Research, diagnose, troubleshoot and resolve application/system issues",
      "Escalate unresolved issues to internal teams",
      "Install and configure applications",
      "Install and configure operating systems using WDS, GHOST, Bootable drives",
      "Log and document technical issues in knowledge database",
      "Track issues until resolved within SLA timelines",
      "Work on changing and emerging technologies"
    ],

    technicalSkills: [
      "Application installation and configuration",
      "Operating System installation",
      "Basic troubleshooting",
      "Issue logging and documentation",
      "Knowledge of Azure/AWS (preferred)"
    ],

    professionalSkills: [
      "Good communication skills",
      "Analytical thinking",
      "Tech-savvy mindset",
      "Flexibility for rotational shifts",
      "Ability to work under pressure"
    ],

    eligibility: {
      education: "Graduate in any stream",
      experience: "0-2 years",
      note: "Must have completed 15 years of full-time education"
    },

    benefits: [
      "Opportunity to work with a global MNC (Accenture)",
      "Exposure to cloud and software support technologies",
      "Career growth in IT support and cloud technologies",
      "Learning certifications (Azure/AWS advantage)",
      "Professional corporate work environment"
    ],

    salary: "As per company standards",

    careerGrowth: [
      "Application Support Engineer",
      "Cloud Support Associate",
      "System Administrator",
      "Technical Support Specialist"
    ],

    preparationTips: [
      "Learn OS installation basics",
      "Understand troubleshooting process",
      "Practice customer communication",
      "Basic cloud concepts (Azure/AWS)",
      "Prepare for support-based interview questions"
    ],

    aboutCompany:
      "Accenture is a global professional services company specializing in digital, cloud, and security solutions. With over 775,000 employees worldwide, Accenture helps businesses reinvent through technology and innovation.",

    applyLink: "https://www.accenture.com/in-en/careers/jobdetails?id=14154508"
  };
  return (
    <div className=' w-full min-h-screen p-3' style={{ minWidth: 280, maxWidth: 900 }}>
      <Flex className='gap-10 flex-col'>
        <h1 className='font-bold text-3xl lg:text-4xl'>{jobDetails.title}</h1>
        <Flex>
          <div>
            <div>{jobDetails.author}</div>
            <div>{jobDetails.date}</div>
          </div>
          <div className="flex items-center gap-3">
            {/* WhatsApp Button */}
            <button
              className="w-[52px] h-[52px] rounded-full flex items-center justify-center transition-transform duration-150 hover:brightness-110 active:scale-90 border-0 cursor-pointer text-xl text-white"
              style={{ background: "#25D366" }}
            >
              <WhatsAppOutlined />
            </button>

            {/* Share Button */}
            <button
              className="w-[52px] h-[52px] rounded-full bg-[#1a1a1a] flex items-center justify-center transition-transform duration-150 hover:brightness-125 active:scale-90 border-0 cursor-pointer text-xl text-white"
            >
              <ShareAltOutlined />
            </button>
          </div>

 
        </Flex>
        
          {/* banner */}
                 <div>
            <img src={jobDetails.banner} className='h-80 w-full'/>
          </div>
          <AddButton content="Hiring Now - Apply today" bgColor="bg-red-500" />      </Flex>
    </div>
  )
}
