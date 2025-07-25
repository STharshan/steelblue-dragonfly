import { BsFilterRight } from "react-icons/bs";
import { useEffect } from "react";

export default function CompanyStats() {
  const stats = [
    {
      icon: "/counter-1.svg",
      hoverIcon: "/icons/user-hover.png",
      value: "15–30%+",
      label: "Performance Gains",
    },
    {
      icon: "/service-1.svg",
      hoverIcon: "/icons/cogs-hover.png",
      value: "1.5 seconds+",
      label: "Faster Acceleration",
    },
    {
      icon: "/car-1.svg",
      hoverIcon: "/icons/crash-hover.png",
      value: "40 lb–ft+",
      label: "Dyno-Verified Results",
    },
    {
      icon: "/save-1.svg",
      hoverIcon: "/icons/star-hover.png",
      value: "24 hours+",
      label: "Rapid Turnaround",
    },
  ];

  return (
    <section className="relative bg-[#f8f8f8] text-black py-16 px-4 md:px-30 overflow-hidden">
      {/* Tyre background */}
      <img
        src="/tier.webp"
        alt="Tyre track"
        className="absolute hidden md:flex bottom-0 right-0 w-1/3 max-w-[280px] z-0 rotate-120 animate-floatY"
      />

      {/* Heading */}
      <div className="relative z-10 max-w-7xl mx-auto mb-12 text-center">
        <p className="uppercase tracking-wider mb-2 flex items-center justify-center gap-2 font-bold">
          <BsFilterRight className="text-lg text-gray-600" />
          company statistics
        </p>
        <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
          Excellence Driven For Getting
          <br /> Unrivaled Results.
        </h2>
      </div>

      {/* Desktop Grid */}
      <div className="relative z-10 max-w-7xl mx-auto hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 px-2">
        {stats.map((stat, index) => {
          const isTall = index === 1 || index === 3;
          return (
            <div
              key={index}
              className={`group bg-[url('/dot-pattern.png')] bg-black bg-opacity-90 text-white 
                        p-8 rounded-md flex flex-col 
                        ${isTall ? "h-[300px]" : "h-[250px]"}`}
            >
              <div className="w-18 h-18 rounded-full flex items-center justify-center mt-2 ml-5">
                <img
                  src={stat.icon}
                  alt="default icon"
                  className="w-10 h-10 block group-hover:hidden"
                />
                <img
                  src={stat.hoverIcon}
                  alt="hover icon"
                  className="w-10 h-10 hidden group-hover:block"
                />
              </div>
              <h3 className="text-4xl font-bold mb-1 mt-5 ml-5">{stat.value}</h3>
              <p className="font-medium text-gray-300 ml-6">{stat.label}</p>
            </div>
          );
        })}
      </div>

      {/* Mobile Scrollable Auto-Scroll */}
      <div className="sm:hidden whitespace-nowrap animate-scroll-x flex gap-4 px-2 pb-2 mt-6">
        {stats.map((stat, index) => {
          const isTall = index === 1 || index === 3;
          return (
            <div
              key={index}
              className={`inline-block min-w-[260px] group bg-[url('/dot-pattern.png')] bg-black bg-opacity-90 text-white 
                          p-6 rounded-md mr-3 
                          ${isTall ? "h-[300px]" : "h-[250px]"}`}
            >
              <div className="w-18 h-18 rounded-full flex items-center justify-center mt-2 ml-3">
                <img
                  src={stat.icon}
                  alt="default icon"
                  className="w-10 h-10 block group-hover:hidden"
                />
                <img
                  src={stat.hoverIcon}
                  alt="hover icon"
                  className="w-10 h-10 hidden group-hover:block"
                />
              </div>
              <h3 className="text-3xl font-bold mb-1 mt-4 ml-3">{stat.value}</h3>
              <p className="font-medium text-gray-300 ml-4">{stat.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
