// src/components/WhyChooseUs.jsx
export default function CarbonWhyChooseUs() {
    const features = [
        {
            image: "/EGR.webp",
            description:
                "The EGR Valve",
        },
        {
            image: "/intake.webp",
            description: "The Intake Valves",
        },
        {
            image: "/EGR.webp",
            description: "The Turbocharger",
        },
        {
            image: "/headlight.webp",
            description:
                "The Diesel Particulate Filter (DPF)",
        },
    ];

    return (
        <section className="px-4 py-12 md:px-10 max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-left mb-5">
                What Does a HY-CARBON Clean Do?
            </h2>
            <p className="text-lg text-gray-500 mb-18">This process uses hydrogen technology to safely and effectively remove carbon build-up from key engine components without dismantling anything. It’s completely safe, eco-friendly, and takes under an hour.</p>

            <h2 className="text-4xl mb-12 font-bold">HY-CARBON Clean targets and treats carbon in:</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {features.map((item, index) => (
                    <div
                        key={index}
                        className="relative group overflow-hidden rounded-lg shadow-lg h-60"
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
                Whether your vehicle is showing signs of carbon build-up or you just want to maintain peak engine health, a HY-CARBON clean is an ideal preventative maintenance service.
            </p>

            <p className="text-3xl font-bold text-left mt-6 text-black">
               To find out how HY-CARBON cleaning can help your vehicle, give us a call on 0116 266 9749, or pop in to see us — we’re happy to explain how it works and whether it’s right for your car or van.
            </p>
        </section>
    );
}
