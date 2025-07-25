import { useState } from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { MdHeadsetMic } from "react-icons/md";
import { HiOutlineBars3, HiOutlineMapPin} from "react-icons/hi2";
import { HiX } from "react-icons/hi";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full relative z-50">
      {/* Top bar */}
      <div className="bg-black text-gray-400 font-semibold text-sm px-6 md:px-20 py-3 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline-block h-5 border-l-2 border-gray-500"></span>
          <span>Office Hours: Mon–Fri: 09:00AM–6:00PM</span>
        </div>

        <div className="flex items-center gap-3 mt-2 sm:mt-0">
          <span>Follow Us:</span>
          <FaFacebookF className="cursor-pointer text-lg hover:text-blue-600" />
          <FaInstagram className="cursor-pointer text-lg hover:text-pink-500" />
        </div>
      </div>

      {/* Middle section */}
      <div className="bg-white flex flex-col sm:flex-row justify-between items-center gap-4 border-b px-6 md:px-20 py-3">
        {/* Logo + WhatsApp */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <img src="/logo.webp" alt="Logo" className="w-40 h-20 object-contain" />
          <div className="hidden sm:flex items-center gap-2 text-black">
            <FaWhatsapp className="text-4xl text-green-500" />
            <span className="font-medium">+44 7526 227041</span>
          </div>
        </div>

        {/* Call us */}
        <div className="hidden sm:flex items-center gap-2 text-black">
          <MdHeadsetMic className="text-4xl" />
          <div className="text-left text-sm">
            <p className="text-gray-500">Call US 24/7</p>
            <p className="font-medium text-lg">0116 2669749</p>
          </div>
        </div>
      </div>

      {/* Desktop Nav links */}
      <div className="bg-black text-white py-3 px-6 md:px-20 hidden lg:flex justify-between items-center">
        <div className="flex flex-wrap gap-6 font-semibold uppercase">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#legal">Legal Notice</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="flex items-center gap-2">
          <HiOutlineMapPin className="text-xl" />
          <span className="text-lg font-medium">Office Location</span>
        </div>
      </div>

      {/* Mobile Nav toggle */}
      <div className="flex justify-between items-center w-full lg:hidden px-4 py-3 bg-black">
        <button
          onClick={() => setMenuOpen(true)}
          className="p-2 bg-gray-600 rounded-md cursor-pointer hover:bg-black"
        >
          <HiOutlineBars3 className="text-2xl text-white" />
        </button>
        <div className="flex items-center gap-2 text-white">
          <HiOutlineMapPin className="text-xl" />
          <span className="text-lg font-medium">Office Location</span>
        </div>
      </div>

      {/* Sliding mobile menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 transform transition-transform duration-600 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } shadow-lg`}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-4 py-3 border-b bg-black">
          <img src="/logo.webp" alt="Logo" className="h-10" />
          <button onClick={() => setMenuOpen(false)} className="bg-white rounded-full p-1 hover:bg-black">
            <HiX className="text-2xl text-black cursor-pointer hover:text-white" />
          </button>
        </div>

        {/* Links */}
        <ul className="flex flex-col gap-4 p-4 text-black font-medium text-base">
          <li className="border-b-1 border-gray-300" ><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li className="border-b-1 border-gray-300"><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li className="border-b-1 border-gray-300"><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
          <li className="border-b-1 border-gray-300"><a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a></li>
          <li className="border-b-1 border-gray-300"><a href="#legal" onClick={() => setMenuOpen(false)}>Legal Notice</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>
      </div>

      {/* Background overlay when menu is open */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </div>
  );
}
