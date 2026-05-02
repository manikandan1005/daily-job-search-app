"use client"
import React from 'react';
import { WhatsAppOutlined, ShareAltOutlined } from '@ant-design/icons';
import { Flex } from 'antd';
import FollowUs from '@/components/ui/FollowUs';
import AddButton from '@/components/ui/AddButton';
import BulletList from '@/components/ui/BulletList';
import { OverviewCard } from '@/components/ui/OverviewCard';
import { Section } from '@/components/ui/Section';

function Divider() {
  return <hr className="border-t border-gray-200 my-6" />;
}

export default function JobDescription({ job }: { job: any }) {
  const j = job?.job_detail  // ← unwrap from API response

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: j?.title, url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(j?.title + ' ' + j?.applyLink)}`);
  };

  return (
    <Flex gap={"10"}>
      <div className="w-full min-h-screen p-4 max-w-[900px] box-border">

        <div className="flex flex-wrap gap-2 mb-5">
          {j?.categories?.map((c: any) => (
            <span key={c.label} className={`text-[11px] font-semibold px-3 py-1 rounded-full tracking-widest ${c.className}`}>
              {c.label}
            </span>
          ))}
        </div>

        <h1 className="text-2xl lg:text-4xl font-bold text-gray-900 leading-snug mb-5">{j?.title}</h1>

        <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
          <div className="text-sm text-gray-500 leading-relaxed">
            <div>By <span className="font-semibold text-gray-800">{j?.author}</span></div>
            <div>{new Date(job?.created_date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
          </div>
          <div className="flex gap-3">
            <button onClick={handleWhatsApp} title="Share on WhatsApp"
              className="w-11 h-11 rounded-full bg-[#25D366] flex items-center justify-center text-white text-lg border-0 cursor-pointer hover:opacity-85 active:scale-95 transition-all">
              <WhatsAppOutlined />
            </button>
            <button onClick={handleShare} title="Share"
              className="w-11 h-11 rounded-full bg-gray-900 flex items-center justify-center text-white text-lg border-0 cursor-pointer hover:opacity-85 active:scale-95 transition-all">
              <ShareAltOutlined />
            </button>
          </div>
        </div>

        <img src={j?.banner} alt="Job Banner" className="w-full h-64 object-cover rounded-xl mb-5 block" />

        <AddButton content="🔥 Hiring Now — Apply Today" bgColor="bg-orange-600" onClick={() => window.open(j?.applyLink)} />

        <div className="text-sm text-gray-600 leading-relaxed mb-7 px-5 py-4 bg-gray-50 rounded-xl border-l-4 border-orange-500">
          {j?.description}
        </div>

        <Section title="Job Overview"><OverviewCard items={j?.overview} /></Section>
        <Divider />
        <Section title="Key Responsibilities"><BulletList items={j?.responsibilities} color="orange" /></Section>
        <Divider />
        <Section title="Required Skills">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Technical Skills</p>
              <BulletList items={j?.technicalSkills} color="orange" />
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Professional Skills</p>
              <BulletList items={j?.professionalSkills} color="orange" />
            </div>
          </div>
        </Section>
        <Divider />
        <Section title="Eligibility Criteria">
          <div className="bg-gray-50 rounded-xl px-5 py-4 flex flex-col gap-3">
            {j?.eligibility?.map((e: any) => (
              <div key={e.key} className="flex gap-4 text-sm items-start">
                <span className="text-gray-400 min-w-[110px]">{e.key}</span>
                <span className="font-semibold text-gray-800">{e.value}</span>
              </div>
            ))}
          </div>
        </Section>
        <Divider />
        <Section title="Benefits"><BulletList items={j?.benefits} color="orange" /></Section>
        <Divider />
        <Section title="Career Growth Paths">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {j?.careerGrowth?.map((g: string) => (
              <div key={g} className="bg-green-50 border-l-4 border-green-600 rounded-lg px-4 py-3 text-sm font-semibold text-green-800">{g}</div>
            ))}
          </div>
        </Section>
        <Divider />
        <Section title="Interview Preparation Tips"><BulletList items={j?.preparationTips} color="orange" /></Section>
        <Divider />
        <Section title="About Company"><p className="text-sm text-gray-500 leading-relaxed">{j?.aboutCompany}</p></Section>
        <Divider />
        <Section title="Tags">
          <div className="flex flex-wrap gap-2">
            {j?.tags?.map((t: string) => (
              <span key={t} className="text-xs px-4 py-1.5 rounded-full border border-gray-300 text-gray-500 bg-white cursor-pointer hover:bg-gray-50 transition-colors">{t}</span>
            ))}
          </div>
        </Section>
        <Divider />
        <Section title="Apply Now">
          <p className="text-sm text-gray-500 mb-3">Click the button below to apply directly. Make sure to read all eligibility criteria before applying.</p>
          <a href={j?.applyLink} target="_blank" rel="noopener noreferrer"
            className="block w-full bg-gray-900 hover:bg-gray-700 text-white text-center font-semibold text-base py-4 rounded-lg transition-colors no-underline">
            Apply Now →
          </a>
        </Section>

      </div>
      <FollowUs />
    </Flex>
  );
}