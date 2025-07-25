export default function WhatWeOffer() {
  const services = [
    {
      title: "Cam Belt Replacement",
      description:
        "Found in many petrol and diesel engines. Should be changed at manufacturer-recommended intervals (often between 60,000–100,000 miles). Failure can lead to catastrophic engine damage.",
      image: "/head.webp",
    },
    {
      title: "Wet Belt Replacement",
      description:
        "Common in newer Ford engines (e.g., 1.0 EcoBoost). Runs inside the engine, lubricated by oil. Neglecting oil changes shortens lifespan, and a snapped belt can destroy the engine.",
      image: "/wash.webp",
    },
    {
      title: "Timing Chain Replacement",
      description:
        "Typically lasts longer than belts but isn’t maintenance-free. Symptoms of wear include rattling sounds, engine misfires, and warning lights.",
      image: "/clean.webp",
    },
  ];

  return (
    <section className="w-full px-4 md:px-10 py-16 bg-white text-black">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl font-semibold mb-10 text-center md:text-left">
          What We Offer:
        </h2>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {services.map((service, index) => (
            <div key={index}>
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover rounded shadow-md mb-4"
              />
              <h3 className="ml-10 font-semibold text-2xl mb-2">{service.title}</h3>
              <div className="max-w-60 ml-10">
                <p className="text-gray-700 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-xl mt-30 text-gray-700 mb-6 text-center md:text-left">
          Don’t wait until it’s too late. Replacing these components on time is far cheaper than fixing the engine damage they can cause.
        </p>

        {/* CTA */}
        <p className="font-semibold text-center md:text-left text-3xl mt-20 mb-10">
          Not sure when your timing system was last checked? Call us on{" "}
          <span className="text-black font-bold">0116 266 9749</span> or pop in with your reg — we’ll check your service history and advise honestly on whether it’s time for a replacement.
        </p>
      </div>
    </section>
  );
}
