"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex gap-6 text-gray-800 text-[16px] font-medium">
      <Link href="/" className="hover:text-[#0A84FF] transition">
        Home
      </Link>
      <Link href="/approach" className="hover:text-[#0A84FF] transition">
        Approach
      </Link>
      <Link href="/research" className="hover:text-[#0A84FF] transition">
        Research
      </Link>
      {/* <Link href="/about" className="hover:text-[#0A84FF] transition">
        About
      </Link> */}
      <Link href="/vision" className="hover:text-[#0A84FF] transition">
        Vision
      </Link>
      <Link href="/team" className="hover:text-[#0A84FF] transition">
        Team
      </Link>
      <Link href="/vision" className="hover:text-[#0A84FF] transition">
        Contact
      </Link>
    </nav>
  );
};

export default Navbar;
