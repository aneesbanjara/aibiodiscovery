"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Approach", href: "/approach" },
  { label: "Research", href: "/research" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

interface NavbarProps {
  mobile?: boolean;
  onLinkClick?: () => void; // callback for mobile links
}

const Navbar = ({ mobile, onLinkClick }: NavbarProps) => {
  const pathname = usePathname();

  return (
    <nav
      className={`${
        mobile
          ? "flex flex-col gap-4 p-4 text-xl font-medium"
          : "hidden md:flex items-center gap-8 text-[20px] font-medium"
      }`}
    >
      {navItems.map((item) => {
        const isActive =
          pathname === item.href ||
          (item.href !== "/" && pathname.startsWith(item.href));

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onLinkClick} // <-- close menu when clicked
            className={`relative px-2 py-1 transition-colors text-gray-700 hover:text-[#0A84FF] ${
              isActive ? "text-[#0A84FF]" : ""
            }`}
          >
            {isActive && !mobile && (
              <>
                <span className="absolute left-0 top-0 h-3 w-3 border-l-3 border-t-3 border-[#0A84FF]" />
                <span className="absolute right-0 top-0 h-3 w-3 border-r-3 border-t-3 border-[#0A84FF]" />
                <span className="absolute left-0 bottom-0 h-3 w-3 border-l-3 border-b-3 border-[#0A84FF]" />
                <span className="absolute right-0 bottom-0 h-3 w-3 border-r-3 border-b-3 border-[#0A84FF]" />
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
