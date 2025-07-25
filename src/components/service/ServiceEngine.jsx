// src/components/EngineSymptoms.jsx
export default function ServiceEngine() {
  const symptoms = [
    "",
    "Increased fuel consumption, costing you more at the pump",
    "Warning lights appearing on the dashboard",
    "Trouble passing your MOT due to elevated emissions and pollutants",
  ];

  return (
    <section className="px-4 py-10 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {symptoms.map((text, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg h-60 shadow group transition-all duration-500"
          >
            {/* Sliding black overlay */}
            <div className="absolute inset-0 bg-black translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></div>

            {/* Content */}
            <div className="relative z-10 p-6 h-full flex flex-col justify-between transition-colors duration-300 group-hover:text-white">
              <div>
                <div className="flex justify-between items-start">
                  {/* Circle changes on hover */}
                  <div className="w-10 h-10 rounded-full bg-gray-100 group-hover:bg-gray-400 transition-colors duration-300 mb-4"></div>

                  {/* Hand icon only shows on hover */}
                  <img
                    src="/hand.svg"
                    alt="hand icon"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 -mt-5"
                  />
                </div>

                {/* Text */}
                <p className="font-medium text-gray-600 group-hover:text-white text-lg max-w-60 transition-colors duration-300">
                  {text}
                </p>

                {/* Underline */}
                <hr className="w-full border-gray-400 group-hover:border-white mt-5 transition-colors duration-300" />
              </div>

              {/* Bottom mini line */}
              <hr className="w-10 border-black group-hover:border-white transition-colors duration-300" />
            </div>
          </div>
        ))}
      </div>
        <p className="mt-20 text-lg font-semibold">We use quality oils, filters, and components, and we’ll always give you honest advice about what your vehicle needs—no upselling, no pressure.</p>
    </section>
  );
}
