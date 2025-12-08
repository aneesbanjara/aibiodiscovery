import Image from "next/image";
import Navbar from "./Navbar";
import Button from "./Button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-10 py-2 bg-white shadow-sm">
      {/* Left: Logo */}
      <div className="flex items-center gap-3">
        <Image
          src="/AIBioDiscovery-logo-withoutBG.png"
          alt="AI BioDiscovery Logo"
          width={40}
          height={40}
        />
        <h1 className="text-xl font-bold text-gray-900">AI BioDiscovery</h1>
      </div>

      {/* Center: Navbar */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Navbar />
      </div>

      {/* Right: Learn More button */}
      <div>
        <Button text="Learn More" />
      </div>
    </header>
  );
};

export default Header;
