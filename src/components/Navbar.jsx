import { useState } from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { MdHeadsetMic } from "react-icons/md";
import { HiOutlineBars3, HiOutlineMapPin } from "react-icons/hi2";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import { HashLink as Link1 } from 'react-router-hash-link';


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
          <a href="https://www.facebook.com/@unitthreemots?_rdr" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="cursor-pointer text-lg hover:text-blue-600" />
          </a>
          <a href="https://www.instagram.com/unit_three_mots?igsh=ZWFlZThjNTRrYWE%3D" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="cursor-pointer text-lg hover:text-pink-500" />
          </a>
        </div>
      </div>

      {/* Middle section */}
      <div className="bg-white flex flex-col sm:flex-row justify-between items-center gap-4 border-b px-6 md:px-20 py-3">
        {/* Logo + WhatsApp */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <img src="/logo.webp" alt="Logo" className="w-40 h-20 object-contain" />

          <a
            href="https://wa.me/447526227041"  // WhatsApp API link with the phone number
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 text-black hover:text-green-500 cursor-pointer"
          >
            <FaWhatsapp className="text-4xl" />
            <span className="font-medium">+44 7526 227041</span>
          </a>
        </div>

        {/* Call us */}
        <div className="hidden sm:flex items-center gap-2 text-black">
          <MdHeadsetMic className="text-4xl" />
          <div className="text-left text-sm">
            <p className="text-gray-500">Call Us 24/7</p>
            <a
              href="tel:+441162669749" // The phone number with country code
              className="font-medium text-lg hover:text-gray-400 cursor-pointer"
            >
              0116 2669749
            </a>
          </div>
        </div>
      </div>

      {/* Desktop Nav links */}
      <div className="bg-black text-white py-3 px-6 md:px-20 hidden lg:flex justify-between items-center">
        <div className="flex flex-wrap gap-6 font-semibold uppercase  cursor-pointer">
          <div className="flex flex-wrap gap-6 font-semibold uppercase cursor-pointer">
            <Link to="/" className="hover:text-gray-400">Home</Link>
            <Link1 smooth to="#about" className="hover:text-gray-400">About</Link1>
            <Link1 smooth to="#services" className="hover:text-gray-400">Services</Link1>
            <Link to="/gallery" className="hover:text-gray-400">Gallery</Link>
            <Link to="/legal-notice" className="hover:text-gray-400">Legal Notice</Link>
            <Link to="/contact" className="hover:text-gray-400">Contact</Link>
          </div>
        </div>
        <a
          href="https://www.google.com/maps/place/Unit+Three+MOTs+Ltd/@52.660352,-1.133101,17z/data=!4m6!3m5!1s0x487761aeb430bab5:0x2bfdd6586763cda0!8m2!3d52.6602859!4d-1.1308683!16s%2Fg%2F11gl119_9r?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-gray-400 cursor-pointer"
        >
          <HiOutlineMapPin className="text-xl" />
          <span className="text-lg font-medium uppercase">Office Location</span>
        </a>

      </div>

      {/* Mobile Nav toggle */}
      <div className="flex justify-between items-center w-full lg:hidden px-4 py-3 bg-black">
        <button
          onClick={() => setMenuOpen(true)}
          className="p-2 bg-gray-600 rounded-md cursor-pointer hover:bg-black"
        >
          <HiOutlineBars3 className="text-2xl text-white" />
        </button>
        <a
          href="https://www.google.com/maps/place/Unit+Three+MOTs+Ltd/@52.660352,-1.133101,17z/data=!4m6!3m5!1s0x487761aeb430bab5:0x2bfdd6586763cda0!8m2!3d52.6602859!4d-1.1308683!16s%2Fg%2F11gl119_9r?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white hover:text-gray-300"
        >
          <HiOutlineMapPin className="text-xl" />
          <span className="text-lg font-medium uppercase">Office Location</span>
        </a>

      </div>

      {/* Sliding mobile menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 transform transition-transform duration-600 ease-in-out ${menuOpen ? "translate-x-0" : "-translate-x-full"
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
