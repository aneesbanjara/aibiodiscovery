"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Approach", href: "/approach" },
  { label: "Research", href: "/research" },
  { label: "Team", href: "/team" },
  { label: "Vision", href: "/vision" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium">
      {navItems.map((item) => {
        const isActive =
          pathname === item.href ||
          (item.href !== "/" && pathname.startsWith(item.href));

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`
              relative px-1 py-1 transition-colors
              text-gray-700 hover:text-[#0A84FF]
              ${isActive ? "text-[#0A84FF]" : ""}
            `}
          >
            {isActive && (
              <>
                {/* Top Left */}
                <span className="absolute left-0 top-0 h-2 w-2 border-l-2 border-t-2 border-[#0A84FF]" />
                {/* Top Right */}
                <span className="absolute right-0 top-0 h-2 w-2 border-r-2 border-t-2 border-[#0A84FF]" />
                {/* Bottom Left */}
                <span className="absolute left-0 bottom-0 h-2 w-2 border-l-2 border-b-2 border-[#0A84FF]" />
                {/* Bottom Right */}
                <span className="absolute right-0 bottom-0 h-2 w-2 border-r-2 border-b-2 border-[#0A84FF]" />
              </>
            )}

            {item.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
