import Navbar from "./Navbar";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center px-10 py-6 border-t border-gray-200 text-gray-600 text-sm">
      <p>© 2023 AlBioDiscovery. All rights reserved.</p>
      <Navbar />
    </footer>
  );
};

export default Footer;
