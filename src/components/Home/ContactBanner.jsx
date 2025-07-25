import { BsFilterRight } from "react-icons/bs";

export default function ContactBanner() {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/men.webp"
          alt="Mechanic background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" /> {/* Optional dark overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 md:px-20 py-24">
        <div className="flex flex-col lg:flex-row items-center lg:items-center justify-center lg:justify-between gap-10 text-center lg:text-left">
          <div>
            <p className="uppercase tracking-wider mb-2 flex justify-center lg:justify-start items-center gap-2 font-bold text-white">
              <BsFilterRight className="text-lg" />
              Get Our Service
            </p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-white">
              Get Premium Auto Car Service
              <br className="block sm:hidden" />
              Feel Free To Contact Us.
            </h2>
          </div>
          <div className="flex justify-center lg:justify-end w-full lg:w-auto">
            <a
              href="#contact"
              className="inline-block px-7 py-4 border-2 border-white text-white font-bold text-sm rounded hover:bg-white hover:text-black transition"
            >
              CONTACT US
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}
