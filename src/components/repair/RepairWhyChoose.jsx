// src/components/WhyChooseUs.jsx
export default function RepairWhyChooseUs() {
    const features = [
        {
            image: "/crud.webp",
            description:
                "MOT Repairs—We’ll take care of any issues flagged during your test, helping you pass quickly and safely",
        },
        {
            image: "/door.webp",
            description: "Cambelt & Timing Chain Replacements—Crucial maintenance to avoid major engine damage",
        },
        {
            image: "/shock.webp",
            description: "Clutch Repairs & Replacements—Smooth gear changes and restored performance",
        },
        {
            image: "/crine.webp",
            description:
                "Engine Diagnostic issues & Fault Finding—Using advanced tools to pinpoint issues fast",
        },
    ];

    return (
        <section className="px-4 py-12 md:px-10 max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-left mb-5">
                Repair Services Include:
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

            <p className="text-4xl font-semibold mt-12 mb-8 text-left">
                BMW Specialist Services
            </p>
            <p className="text-gray-500 mb-15 text-lg">If you own a BMW, you’re in safe hands. We specialise in BMW diagnostics, repairs, and servicing, with the tools and knowledge to deal with common and complex issues specific to BMW models.</p>
            <p className="text-black text-xl mb-15">We understand BMW systems inside and out – so you get main-dealer expertise without the main-dealer price tag.</p>
            <p className="text-3xl font-bold text-left mt-6 mb-5 text-black">
                Need a repair? MOT work? Cambelt due?Call us today on 0116 2669749, or drop in for a no-obligation quote. We’ll explain everything clearly and only carry out work you’ve approved.
            </p>
        </section>
    );
}
