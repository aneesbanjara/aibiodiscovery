import Image from "next/image";
import Navbar from "./Navbar";
import Button from "./Button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-8 py-4">
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/AIBioDiscovery-logo-withoutBG.png"
            alt="AI BioDiscovery Logo"
            width={96}
            height={96}
            priority
            className="object-contain"
          />
          {/* <span className="text-xl font-semibold tracking-tight text-gray-900">
            AI BioDiscovery
          </span> */}
        </div>

        {/* Center: Navbar */}
        <Navbar />

        {/* Right: CTA */}
        <Button text="Learn More" />
      </div>
    </header>
  );
};

export default Header;
