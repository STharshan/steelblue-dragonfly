// src/components/Footer.jsx
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";
import { BsClock } from "react-icons/bs";
import { FaAnglesRight } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className="w-full pt-12 px-4 md:px-10 bg-cover bg-center"
      style={{ backgroundImage: "url('/footer.webp')" }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-gray-200">
        {/* Company Info */}
        <div className="space-y-4">
          <img src="/logo.webp" alt="logo" className="w-60 h-32 mx-auto sm:mx-0 object-contain" />
          <p className="text-sm text-gray-800">
            Feel free to get in touch with us. We will be happy to answer any
            questions about our services and products.
          </p>
          <div className="flex gap-4 pt-2">
            <a href="#" className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-full">
              <FaFacebookF className="hover:text-blue-700" />
            </a>
            <a href="https://www.instagram.com/unit_three_mots?igsh=ZWFlZThjNTRrYWE%3D" className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-full">
              <FaInstagram className="hover:text-pink-700" />
            </a>
            <a href="https://wa.me/447526227041" className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-full">
              <FaWhatsapp className="hover:text-green-700" />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-2xl">Our Services</h3>
          <div className="w-4 h-0.5 bg-gray-400 mb-4"></div>
          <ul className="text-lg space-y-3 mt-7 text-gray-700">
            {[
              { label: "Cam belts, Wet belts & Timing chains", path: "/cam-belts-wet-belts-timing-chains" },
              { label: "Class 4 & 7 Mot Testing", path: "/class-4-7-mot-testing" },
              { label: "Contact", path: "/contact" },
              { label: "Diagnostics", path: "/diagnostics" },
              { label: "Gallery", path: "/gallery" },
              { label: "Home", path: "/" },
              { label: "HY-CARBON", path: "/hy-carbon" },
              { label: "Legal Notice", path: "/legal-notice" },
              { label: "Repairs", path: "/repairs" },
              { label: "Servicing", path: "/servicing" },
              { label: "Timing Chains & Wet Belts", path: "/timing-chains-wet-belts" },
            ].map((service, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <FaAnglesRight className="mt-1 text-gray-600 flex-shrink-0" />
                <Link to={service.path} className="hover:text-gray-500 transition">
                  {service.label}
                </Link>
              </li>
            ))}
          </ul>

        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold text-2xl">Contact Us</h4>
          <div className="w-4 h-0.5 bg-gray-400 mb-4"></div>
          <div className="mt-7 space-y-4 text-sm text-gray-700">
            <div className="flex items-start gap-3">
              <BsClock className="text-xl mt-1" />
              <div>
                <p className="font-semibold">Working Time</p>
                <p className="font-semibold text-lg">Mon–Fri : 09.00 am–05.00 pm</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaPhoneAlt className="text-xl mt-1" />
              <div>
                <p className="font-semibold">Phone</p>
                <a
                  href="tel:+441162669749" // Phone number with country code
                  className="text-lg font-semibold hover:text-gray-500"
                >
                  0116 2669749
                </a>
              </div>
            </div>
          </div>
          <div className="ml-7 mt-2 text-gray-700 font-semibold">
            <ul className="space-y-1">
              <li>
                <Link
                  to="/terms&condition" // Redirects to the Terms & Conditions page
                  className="hover:text-gray-500 transition"
                >
                  Term & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy" // Assuming you have a privacy policy page as well
                  className="hover:text-gray-500 transition"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Photo Gallery */}
        <div>
          <h4 className="font-semibold text-2xl">Photos Gallery</h4>
          <div className="w-4 h-0.5 bg-gray-400 mb-4"></div>
          <div className="grid grid-cols-3 gap-4 mt-7">
            {[
              "bus.webp",
              "car.webp",
              "cup.webp",
              "van.webp",
              "tanel.webp",
              "chair.webp",
            ].map((img, i) => (
              <img
                key={i}
                src={`/${img}`}
                className="w-full h-auto object-cover rounded shadow-sm max-h-28"
                alt={`gallery-${i}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar – full width black background */}
      <div className="w-340 -ml-10 bg-black mt-20">
        <div className="px-24 py-5 text-gray-300 flex items-center justify-end gap-100">
          <p className="text-center">
            <span>© 2025</span> All Rights Reserved By{" "}
            <a target="_blank" href="https://www.ansely.co.uk/" className="text-red-600 font-bold hover:underline">
              Ansely
            </a>
          </p>
          <a href="/" className="text-gray-400 bg-white rounded-full p-2.5 hover:text-white transition">
            <FaArrowUp className="text-lg" />
          </a>
        </div>
      </div>

    </footer>
  );
}
