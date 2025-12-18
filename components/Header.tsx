"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import Button from "./Button";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

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
        className={`mx-auto max-w-7xl flex items-center justify-between px-8 transition-all duration-300 ${
          scrolled ? "py-1" : "py-2"
        }`}
      >
        {/* Logo → Home */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/AIBioDiscovery-logo-withoutBG.png"
            alt="AI BioDiscovery Logo"
            width={scrolled ? 56 : 104}
            height={scrolled ? 56 : 104}
            priority
            className="object-contain transition-all duration-300"
          />
        </Link>

        {/* Navbar */}
        <div
          className={`transition-all duration-300 ${
            scrolled ? "scale-95" : "scale-100"
          }`}
        >
          <Navbar />
        </div>

        {/* CTA */}
        <Button
          text="Learn More"
          className={scrolled ? "px-4 py-1.5 text-sm" : ""}
        />
      </div>
    </header>
  );
};

export default Header;
