// src/components/CamBeltHeader.jsx
import { Link } from "react-router-dom";
import { FaAngleDoubleRight } from "react-icons/fa";

export default function ServiceHeader() {
  return (
    <section
      className="relative bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/breadcumb.webp')" }} // replace with your image
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-10 py-20 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Title & Breadcrumb */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 mt-40">
            Servicing
          </h1>
          <div className="flex items-center justify-center md:justify-start text-lg mb-2 space-x-2 text-gray-400 font-semibold">
            <Link to="/" className=" font-semibold hover:underline">Home</Link>
            <FaAngleDoubleRight />
            <span>Servicing</span>
          </div>
        </div>
      </div>
    </section>
  );
}
