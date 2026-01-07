"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import Button from "./Button";
import { Menu, X } from "lucide-react"; // hamburger icon

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 transition-all duration-300">
      <div
        className={`mx-auto max-w-7xl flex items-center justify-between px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
          scrolled ? "py-1" : "py-2"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 sm:gap-3">
          <Image
            src="/AIBioDiscovery-logo-withoutBG.png"
            alt="AI BioDiscovery Logo"
            width={scrolled ? 48 : 88}
            height={scrolled ? 48 : 88}
            priority
            className="object-contain transition-all duration-300 w-12 sm:w-16 lg:w-[88px]"
          />
        </Link>

        {/* Desktop Navbar */}
        <div
          className={`hidden md:block transition-all duration-300 ${
            scrolled ? "scale-95" : "scale-100"
          }`}
        >
          <Navbar />
        </div>

        {/* CTA Button (Desktop only) */}
        <div className="hidden sm:block">
          <Link href="/contact">
            <Button
              text="Learn More"
              className={`transition-all duration-300 ${
                scrolled ? "px-4 py-1.5 text-sm" : "px-6 py-2"
              }`}
            />
          </Link>
        </div>

        {/* Hamburger Icon (Mobile only) */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A84FF]"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          {/* Pass a callback to close menu when a link is clicked */}
          <Navbar mobile onLinkClick={() => setMobileMenuOpen(false)} />
        </div>
      )}
    </header>
  );
};

export default Header;
