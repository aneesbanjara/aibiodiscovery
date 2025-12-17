"use client";

import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`
        inline-flex items-center justify-center
        rounded-full
        bg-[#0A84FF]
        px-6 py-2.5
        text-sm font-semibold text-white
        shadow-sm
        transition-all duration-200
        hover:bg-[#006EDC]
        hover:shadow-md
        focus:outline-none focus:ring-2 focus:ring-[#0A84FF]/40
        ${className}
      `}
    >
      {text}
    </button>
  );
};

export default Button;
