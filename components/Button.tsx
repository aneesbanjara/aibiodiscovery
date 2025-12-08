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
      className={`bg-[#0A84FF] text-white font-semibold px-5 py-2 rounded-md hover:bg-[#0077E6] transition ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
