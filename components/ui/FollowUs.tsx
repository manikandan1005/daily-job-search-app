'use client';

import React from 'react';
import { WhatsAppOutlined, InstagramOutlined, LinkedinOutlined } from '@ant-design/icons';

const TelegramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

const socialLinks = [
  { label: 'Join WhatsApp', href: 'https://wa.me/yourlink',             color: '#25D366', icon: <WhatsAppOutlined /> },
  { label: 'Join Telegram', href: 'https://t.me/yourlink',              color: '#2563EB', icon: <TelegramIcon /> },
  { label: 'Instagram',     href: 'https://instagram.com/yourlink',     color: '#E91E8C', icon: <InstagramOutlined /> },
  { label: 'LinkedIn',      href: 'https://linkedin.com/in/yourlink',   color: '#000000', icon: <LinkedinOutlined /> },
];

export default function FollowUs() {
  return (
    <div className="relative border border-gray-200 hidden lg:flex rounded-2x max-h-80 p-6 pt-8 w-full max-w-sm">

      {/* "Follow Us" pill overlapping top border */}
      <div className="absolute -top-4 left-6 bg-white px-2">
        <span className="border border-gray-300 rounded-full px-5 py-1.5 font-bold text-base text-gray-900 whitespace-nowrap inline-block">
          Follow Us
        </span>
      </div>

      {/* Buttons — bg color via style to avoid Tailwind purge issue */}
      <div className="flex flex-col gap-3 mt-2">
        {socialLinks.map(({ label, href, color, icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: color }}
            className="flex items-center gap-3 text-white font-semibold text-base px-5 py-3 rounded-full no-underline hover:opacity-90 active:scale-95 transition-all w-full"
          >
            <span className="text-lg text-white leading-none">{icon}</span>
            <p className="text-lg text-white ">{label}</p>
          </a>
        ))}
      </div>
    </div>
  );
}