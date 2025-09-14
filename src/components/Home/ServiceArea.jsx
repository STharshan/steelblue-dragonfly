import { BsFilterRight, BsArrowRight, BsFilterLeft } from "react-icons/bs";
import { Link } from "react-router-dom";  // Import Link from react-router-dom

export default function ServiceArea() {
  const services = [
    {
      title: "MOT Testing (Class 4 & 7)",
      desc: "Reliable MOT testing for cars, vans, and light commercial vehicles to keep you road-legal and safe.",
      img: "/head.webp",
      link: "/class-4-7-mot-testing", // Add corresponding route path
    },
    {
      title: "Servicing",
      desc: "Comprehensive car and van servicing to ensure peak performance and prevent costly repairs.",
      img: "/clean.webp",
      link: "/servicing", // Add corresponding route path
    },
    {
      title: "Repairs",
      desc: "From brakes to engines, we handle all types of mechanical repairs with expert care and quality parts.",
      img: "/wash.webp",
      link: "/repairs", // Add corresponding route path
    },
    {
      title: "Diagnostics",
      desc: "Advanced fault-finding using the latest diagnostic tools to quickly identify and fix issues.",
      img: "/service.webp",
      link: "/diagnostics", // Add corresponding route path
    },
    {
      title: "Timing Chains & Wet Belts",
      desc: "We specialise in high-quality timing chain and wet belt replacements, to keep your engine running like new.",
      img: "/head.webp",
      link: "/timing-chains-wet-belts", // Add corresponding route path
    },
  ];

  return (
    <section id="services" className="bg-white py-16 px-4 md:px-10 max-w-7xl mx-auto">
      {/* Title */}
      <div className="text-center mb-12 mt-10">
        <p className="uppercase text- tracking-wide font-semibold mb-2 flex items-center justify-center gap-2">
          <BsFilterRight className="text-lg text-gray-500" />
          Services We Provide
          <BsFilterLeft className="text-lg text-gray-500" />
        </p>
        <h2 className="text-5xl font-bold text-black">Our Service Area</h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 cursor-pointer">
        {services.map((item, index) => (
          <div
            key={index}
            className="group relative rounded-sm text-left p-4"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-56 object-cover rounded-sm mb-4 transition-transform duration-300 group-hover:scale-105 group-hover:z-20"
            />
            <div className="ml-10 max-w-70">
              <h3 className="text-lg font-semibold text-black mb-2">
                {item.title}
              </h3>
              <p className="text-black leading-relaxed mb-6">
                {item.desc}
              </p>
              <Link
                to={item.link}  // Link to the corresponding route
                className="mt-auto border border-gray-300 px-6 py-4 hover:bg-black hover:text-white font-semibold text-black rounded transition flex items-center gap-2"
              >
                VIEW DETAILS
                <BsArrowRight className="text-lg" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
