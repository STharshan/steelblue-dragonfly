// src/components/WhyChooseUs.jsx
export default function WhyChooseUs() {
  const features = [
    {
      image: "/spary.webp",
      description:
        "Advanced diagnostic equipment ensures accurate fault detection and reduced test times",
    },
    {
      image: "/wash.webp",
      description: "Certified technicians with years of experience",
    },
    {
      image: "/head.webp",
      description: "EV-compatible MOT testing, ready for the latest models",
    },
    {
      image: "/spary.webp",
      description:
        "Minor issues fixed free of charge (where possible and time permitting) – saving you the hassle of booking a return visit",
    },
    {
      image: "/wheel.webp",
      description: "Comfortable waiting area while your car is being tested",
    },
  ];

  return (
    <section className="px-4 py-12 md:px-10 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
        Why Choose Us for Your MOT?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {features.map((item, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg h-90"
          >
            {/* Image with blur on hover */}
            <img
              src={item.image}
              alt="MOT feature"
              className="w-full h-full object-cover transition duration-500 group-hover:blur-sm"
            />

            {/* Centered description on hover */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transform translate-y-10 group-hover:translate-y-0 transition-all duration-500 ease-in-out bg-white bg-opacity-95 px-4 py-3 rounded shadow text-center max-w-xs">
                <p className="text-gray-800 font-medium text-sm md:text-base">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-lg mt-12 mb-8 text-left text-gray-700">
        <span className="font-semibold">Small Fixes, Big Convenience:</span> If
        your vehicle fails due to minor issues, such as a bulb or wiper blade,
        we’ll do our best to fix it on the spot at no extra cost, whenever time
        and parts allow. That’s one less thing for you to worry about!
      </p>

      <p className="text-3xl font-bold text-left mt-6 text-black">
        MOT Due Soon? Don’t leave it until the last minute. Book early to
        secure your preferred date and avoid the rush. Call us now on{" "}
        <span className="text-blue-600">0116 266 9749</span>, or drop by the
        garage and we’ll get you booked in.
      </p>
    </section>
  );
}
