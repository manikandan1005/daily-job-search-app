"use client"
import React from 'react';
import { WhatsAppOutlined, ShareAltOutlined } from '@ant-design/icons';
import { Flex } from 'antd';
import FollowUs from '@/components/ui/FollowUs';
import AddButton from '@/components/ui/AddButton';
import { BulletList } from '@/components/ui/BulletList';
import { OverviewCard } from '@/components/ui/OverviewCard';
import { Section } from '@/components/ui/Section';

function Divider() {
  return <hr className="border-t border-gray-200 my-6" />;
}

export default function JobDescription() {
  const job = {
    title: 'Accenture Hiring IT Customer Service Representative 2026 – Complete Job Guide for Freshers',
    categories: [
      { label: 'FRESHERS', className: 'bg-blue-100 text-blue-900' },
      { label: 'EXPERIENCED', className: 'bg-green-100 text-green-900' },
      { label: 'TECH SUPPORT', className: 'bg-amber-100 text-amber-900' },
    ],
    description:
      'Accenture is hiring IT Customer Service Representatives in Coimbatore for candidates with 0–2 years of experience. This is an excellent opportunity for freshers looking to start a career in software, application, and cloud technical support.',
    author: 'Chandan Mahato',
    date: 'April 30, 2026',
    banner: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&q=80',
    applyLink: 'https://www.accenture.com/in-en/careers/jobdetails?id=14154508',

    overview: [
      { label: 'Company', value: 'Accenture' },
      { label: 'Role', value: 'IT Customer Service Rep' },
      { label: 'Experience', value: '0–2 Years' },
      { label: 'Location', value: 'Coimbatore' },
      { label: 'Job Type', value: 'Full-Time' },
      { label: 'Work Mode', value: 'Onsite' },
      { label: 'Job ID', value: '14154508' },
      { label: 'Salary', value: 'As per standards' },
    ],

    responsibilities: [
      'Take ownership of customer issues and provide resolution',
      'Research, diagnose, troubleshoot and resolve application/system issues',
      'Escalate unresolved issues to internal teams',
      'Install and configure applications',
      'Install and configure operating systems using WDS, GHOST, Bootable drives',
      'Log and document technical issues in knowledge database',
      'Track issues until resolved within SLA timelines',
      'Work on changing and emerging technologies',
    ],

    technicalSkills: [
      'Application installation and configuration',
      'Operating System installation',
      'Basic troubleshooting',
      'Issue logging and documentation',
      'Knowledge of Azure/AWS (preferred)',
    ],

    professionalSkills: [
      'Good communication skills',
      'Analytical thinking',
      'Tech-savvy mindset',
      'Flexibility for rotational shifts',
      'Ability to work under pressure',
    ],

    eligibility: [
      { key: 'Education', value: 'Graduate in any stream' },
      { key: 'Experience', value: '0–2 years' },
      { key: 'Note', value: 'Must have completed 15 years of full-time education' },
    ],

    benefits: [
      'Opportunity to work with a global MNC (Accenture)',
      'Exposure to cloud and software support technologies',
      'Career growth in IT support and cloud technologies',
      'Learning certifications (Azure/AWS advantage)',
      'Professional corporate work environment',
    ],

    careerGrowth: [
      'Application Support Engineer',
      'Cloud Support Associate',
      'System Administrator',
      'Technical Support Specialist',
    ],

    preparationTips: [
      'Learn OS installation basics',
      'Understand troubleshooting process',
      'Practice customer communication',
      'Basic cloud concepts (Azure/AWS)',
      'Prepare for support-based interview questions',
    ],

    aboutCompany:
      'Accenture is a global professional services company specializing in digital, cloud, and security solutions. With over 775,000 employees worldwide, Accenture helps businesses reinvent through technology and innovation.',

    tags: [
      'Accenture Jobs',
      'IT Support',
      'Customer Service',
      'Customer Support Jobs',
      'Tech Support Jobs',
      'Freshers Jobs 2026',
      'Coimbatore Jobs',
    ],
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: job.title, url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(job.title + ' ' + job.applyLink)}`);
  };

  return (
    <Flex gap={"10"}>
          <div className="w-full min-h-screen p-4 max-w-[900px] box-border">

      {/* Category Badges */}
      <div className="flex flex-wrap gap-2 mb-5">
        {job.categories.map((c) => (
          <span
            key={c.label}
            className={`text-[11px] font-semibold px-3 py-1 rounded-full tracking-widest ${c.className}`}
          >
            {c.label}
          </span>
        ))}
      </div>
      
      {/* Title */}
      <h1 className="text-2xl lg:text-4xl font-bold text-gray-900 leading-snug mb-5">
        {job.title}
      </h1>

      {/* Meta row */}
      <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
        <div className="text-sm text-gray-500 leading-relaxed">
          <div>By <span className="font-semibold text-gray-800">{job.author}</span></div>
          <div>{job.date}</div>
        </div>
        <div className="flex gap-3">
          <button
            onClick={handleWhatsApp}
            title="Share on WhatsApp"
            className="w-11 h-11 rounded-full bg-[#25D366] flex items-center justify-center text-white text-lg border-0 cursor-pointer hover:opacity-85 active:scale-95 transition-all"
          >
            <WhatsAppOutlined />
          </button>
          <button
            onClick={handleShare}
            title="Share"
            className="w-11 h-11 rounded-full bg-gray-900 flex items-center justify-center text-white text-lg border-0 cursor-pointer hover:opacity-85 active:scale-95 transition-all"
          >
            <ShareAltOutlined />
          </button>
        </div>
      </div>

      {/* Banner */}
      <img
        src={job.banner}
        alt="Job Banner"
        className="w-full h-64 object-cover rounded-xl mb-5 block"
      />

      {/* Apply CTA bar */}
<AddButton
  content="🔥 Hiring Now — Apply Today"
  bgColor="bg-orange-600"
  onClick={() => window.open(job.applyLink)}
/>

      {/* Description */}
      <div className="text-sm text-gray-600 leading-relaxed mb-7 px-5 py-4 bg-gray-50 rounded-xl border-l-4 border-orange-500">
        {job.description}
      </div>

      {/* Overview */}
      
<Section title="Job Overview">
  <OverviewCard items={job.overview} />
</Section>

      <Divider />

      {/* Responsibilities */}
      <Section title="Key Responsibilities">
        <BulletList items={job.responsibilities} />
      </Section>

      <Divider />

      {/* Skills */}
      <Section title="Required Skills">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
              Technical Skills
            </p>
            <BulletList items={job.technicalSkills} />
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
              Professional Skills
            </p>
            <BulletList items={job.professionalSkills} />
          </div>
        </div>
      </Section>

      <Divider />

      {/* Eligibility */}
      <Section title="Eligibility Criteria">
        <div className="bg-gray-50 rounded-xl px-5 py-4 flex flex-col gap-3">
          {job.eligibility.map((e) => (
            <div key={e.key} className="flex gap-4 text-sm items-start">
              <span className="text-gray-400 min-w-[110px]">{e.key}</span>
              <span className="font-semibold text-gray-800">{e.value}</span>
            </div>
          ))}
        </div>
      </Section>

      <Divider />

      {/* Benefits */}
      <Section title="Benefits">
        <BulletList items={job.benefits} />
      </Section>

      <Divider />

      {/* Career Growth */}
      <Section title="Career Growth Paths">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {job.careerGrowth.map((g) => (
            <div
              key={g}
              className="bg-green-50 border-l-4 border-green-600 rounded-lg px-4 py-3 text-sm font-semibold text-green-800"
            >
              {g}
            </div>
          ))}
        </div>
      </Section>

      <Divider />

      {/* Preparation Tips */}
      <Section title="Interview Preparation Tips">
        <BulletList items={job.preparationTips} />
      </Section>

      <Divider />

      {/* About Company */}
      <Section title="About Accenture">
        <p className="text-sm text-gray-500 leading-relaxed">{job.aboutCompany}</p>
      </Section>

      <Divider />

      {/* Tags */}
      <Section title="Tags">
        <div className="flex flex-wrap gap-2">
          {job.tags.map((t) => (
            <span
              key={t}
              className="text-xs px-4 py-1.5 rounded-full border border-gray-300 text-gray-500 bg-white cursor-pointer hover:bg-gray-50 transition-colors"
            >
              {t}
            </span>
          ))}
        </div>
      </Section>

      <Divider />

      {/* Final Apply CTA */}
      <Section title="Apply Now">
        <p className="text-sm text-gray-500 mb-3">
          Click the button below to apply directly on Accenture's official careers page.
          Make sure to read all eligibility criteria before applying.
        </p>
        <a
          href={job.applyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-gray-900 hover:bg-gray-700 text-white text-center font-semibold text-base py-4 rounded-lg transition-colors no-underline"
        >
          Apply on Accenture Careers →
        </a>
      </Section>

    </div>
   
      <FollowUs/>
    
    </Flex>
  );
}