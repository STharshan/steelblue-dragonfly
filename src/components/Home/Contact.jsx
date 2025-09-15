// src/components/ContactSection.jsx
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";
import { BsFilterRight } from "react-icons/bs";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 w-full px-4 md:px-10 bg-white text-black"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Side */}
        <div className="flex flex-col">
          {/* Header and Info */}
          <div>
            <p className="flex flex-wrap items-start gap-2 uppercase text-sm tracking-wider font-bold mb-1 mt-15">
              <span className="leading-snug">
                We’re here to help – Book your appointment or ask a question anytime
              </span>
            </p>
            <h2 className="text-5xl font-bold mb-10 mt-2">Contact Us</h2>
            {/* Working Time */}
            <div className="flex items-start gap-4 mb-6">
              <div className="text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 mt-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-700 font-medium">Working Time</p>
                <p className="font-semibold">Mon–Fri 09:AM–05:PM</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 mb-10">
              <div className="text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 mt-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15a.75.75 0 00.75-.75v-3.098a.75.75 0 00-.527-.717l-2.591-.864a.75.75 0 00-.908.36l-.845 1.69a11.25 11.25 0 01-5.12-5.12l1.69-.845a.75.75 0 00.36-.908l-.864-2.591a.75.75 0 00-.717-.527H3a.75.75 0 00-.75.75z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-700 font-medium">Phone</p>
                <a
                  href="tel:+441162669749" // Phone number with country code
                  className="font-semibold hover:underline"
                >
                  01162669749
                </a>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3 mt-5">
            <a
              target="_blank"
              href="#https://www.instagram.com/unit_three_mots?igsh=ZWFlZThjNTRrYWE%3D"
              className="w-10 h-10 rounded bg-black flex items-center justify-center text-white hover:text-pink-500"
            >
              <FaInstagram className="text-xl" />
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/@unitthreemots?_rdr"
              className="w-10 h-10 rounded bg-[#3b5998] flex items-center justify-center text-white hover:text-blue-800"
            >
              <FaFacebookF className="text-xl" />
            </a>
            <a
              target="_blank"
              href="https://wa.me/447526227041"
              className="w-10 h-10 rounded bg-[#25d366] flex items-center justify-center text-white hover:text-green-600"
            >
              <FaWhatsapp className="text-xl" />
            </a>
          </div>
        </div>

        {/* Right Side (Form unchanged) */}
        <div className="bg-gray-100 p-6 md:p-10 rounded-md mt-15">
          <h3 className="text-xl font-bold mb-6">Send A Message</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your name*"
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              placeholder="Your email*"
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              placeholder="Subject*"
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              rows="4"
              placeholder="Your message (optional)"
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-black text-white py-3 font-semibold rounded hover:bg-gray-800 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
