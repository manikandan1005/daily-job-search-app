'use client';

import React from 'react';

interface AddButtonProps {
  content: string;
  bgColor?: string;
  onClick?: () => void;
  href?: string;
  icon?: React.ReactNode;
  variant?: 'solid' | 'outline' | 'glow';
  size?: 'sm' | 'md' | 'lg';
  pulse?: boolean;
  fullWidth?: boolean;
}

export default function AddButton({
  content,
  bgColor,
  onClick,
  href,
  icon,
  variant = 'solid',
  size = 'md',
  pulse = false,
  fullWidth = false,
}: AddButtonProps) {

  const sizeClasses = {
    sm: 'text-sm px-5 py-2',
    md: 'text-base px-7 py-3',
    lg: 'text-xl px-10 py-4',
  }[size];

  const variantClasses = {
    solid: `${bgColor || 'bg-orange-500'} text-white border-0 shadow-md`,
    outline: `bg-transparent border-2 ${bgColor ? bgColor.replace('bg-', 'border-') : 'border-orange-500'} ${bgColor ? bgColor.replace('bg-', 'text-') : 'text-orange-500'}`,
    glow: `${bgColor || 'bg-orange-500'} text-white border-0 shadow-lg`,
  }[variant];

  const base = `
    relative inline-flex items-center justify-center gap-2
    font-bold rounded-full cursor-pointer
    hover:opacity-90 hover:-translate-y-0.5
    active:scale-95 transition-all duration-200
    ${sizeClasses}
    ${variantClasses}
    ${fullWidth ? 'w-full' : ''}
  `;

  const inner = (
    <>
      {pulse && (
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white opacity-80" />
        </span>
      )}
      {icon && <span className="text-lg leading-none">{icon}</span>}
      {content}
    </>
  );

  if (href) {
    return (
      <div className="w-full p-2 flex items-center justify-center">
        <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} no-underline`}>
          {inner}
        </a>
      </div>
    );
  }

  return (
    <div className="w-full p-2 flex items-center justify-center">
      <button className={base} onClick={onClick}>
        {inner}
      </button>
    </div>
  );
}