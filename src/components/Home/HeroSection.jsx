export default function Hero() {
  return (
    <div className="relative w-full h-[100vh] overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src="/back.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-50 z-10"></div>

      {/* Text content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center text-white">
        <p className="text-base font-semibold uppercase tracking-wide">
          Fair Prices. Trusted Service. Based just off Abbey Lane, Leicester.
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold mt-4 leading-tight max-w-6xl">
          Class 4 & 7 MOT Testing,<br />
          Servicing, Diagnostics, and Repairs
        </h1>

        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <button className="bg-gray-400 text-white px-6 py-4 rounded-md font-semibold uppercase hover:bg-white hover:text-black cursor-pointer transition">
            Get More Info
          </button>
          <button className="border-2 border-white text-white px-6 py-3 rounded-md uppercase font-semibold hover:bg-white hover:text-black cursor-pointer transition">
            About Us
          </button>
        </div>
      </div>
    </div>
  );
}
