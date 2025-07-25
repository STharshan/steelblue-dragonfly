export default function WhatSetsUsApart() {
  const items = [
    {
      number: "01",
      text: `We’ve been looking after local drivers and businesses for over 20 years, delivering a wide range of services for all makes and models—including petrol, diesel, hybrid, and electric vehicles.`,
    },
    {
      number: "02",
      text: `From everyday servicing to advanced diagnostics and major mechanical repairs, we cover it all:`,
    },
    {
      number: "03",
      text: `Unlock Your Car’s True Potential From precision ECU remapping to expert BMW servicing, we help your vehicle perform the way it was built to — sharper, stronger, and more responsive.`,
    },
    {
      number: "04",
      text: `Cleaner Engines, Better performance With HY-CARBON hydrogen cleaning, we remove the carbon buildup that robs your engine of power and efficiency — giving you smoother running, lower emissions, and a better drive.`,
    },
    {
      number: "05",
      text: `Smarter Diagnostics, Faster Fixes Our advanced Snap-on diagnostic equipment helps us find faults faster and fix them right first time — saving you time, stress, and guesswork.`,
    },
    {
      number: "06",
      text: `Prevention Over Costly Repairs Cam belts, wet belts, and timing chains don’t last forever. We specialise in preventative replacements to protect your engine and your wallet.`,
    },
    {
      number: "07",
      text: `Main Dealer Quality Without the Price Tag We use high-quality parts, follow manufacturer-approved procedures, and offer the same level of care — without the dealership markup`,
    },
  ];

  return (
    <section className="relative bg-[#0F1116] text-white py-16 px-4 md:px-10 overflow-hidden">
      <h2 className="text-5xl font-bold text-center mb-12">
        What Sets Us Apart:
      </h2>

      {/* Card grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10 max-w-6xl mx-auto mb-30">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white text-gray-800 p-8 text-center rounded-sm hover:bg-black cursor-pointer hover:text-white hover:border-2 relative hover:z-70 transition-all duration-600"
          >
            <div className="flex justify-center mb-6 mt-4">
              <div className="w-20 h-20 bg-[#F9D9DA] rounded-full flex items-center justify-center">
                <div className="w-13 h-13 bg-[#b4bac2] rounded-full flex items-center justify-center text-white font-bold">
                  {item.number}
                </div>
              </div>
            </div>
            <div className="max-w-60 mx-auto">
              <p className="leading-relaxed whitespace-pre-line">{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tyre track image at bottom right */}
      <img
        src="/tier.webp"
        alt="Tyre Track"
        className="absolute bottom-0 right-0 w-1/2 max-w-[400px] z-0 opacity-90 pointer-events-none"
      />
    </section>
  );
}
