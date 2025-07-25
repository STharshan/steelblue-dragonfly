// src/components/TimingIntroSection.jsx

export default function TimingIntroSection() {
  return (
    <section className="w-full bg-white px-4 md:px-10 py-14">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold leading-snug mb-6 text-black">
            Cam Belts, Wet Belts & Protected Timing Chains – Keep Your Engine
          </h2>
          <p className="text-gray-700 text-base leading-relaxed mb-4">
            Your engine relies on precise timing to run smoothly—and that’s exactly what cam belts, wet belts, and timing chains are responsible for. If they’re worn, stretched, or due for replacement, they can cause major damage if left unattended.
          </p>
          <p className="text-gray-700 text-base leading-relaxed">
            At our garage, we specialise in timing system maintenance and replacements for most makes and models, using quality parts and trusted techniques to keep your engine performing at its best.
          </p>
        </div>

        {/* Right Image */}
        <div className="w-full">
          <img
            src="/cambelt.webp" // <-- Place your image in /public or update path
            alt="Timing Chain Service"
            className="w-full h-auto rounded-md shadow-md object-cover"
          />
        </div>
      </div>
    </section>
  );
}
