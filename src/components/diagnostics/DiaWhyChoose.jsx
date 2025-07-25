// src/components/WhyChooseUs.jsx
export default function DiaWhyChooseUs() {
    const features = [
        {
            image: "/up.webp",
            description:
                "Covers most makes & models - including modern petrol, diesel, hybrid, and electric vehicles",
        },
        {
            image: "/tyre.webp",
            description: "Up-to-date software— We download the latest Snap-on updates every month, keeping us in sync with new vehicle systems",
        },
        {
            image: "/inspect.webp",
            description: "Deep system scans – Reads and clears fault codes from engine, transmission, ABS, airbags, DPF, and more",
        },
        {
            image: "/computer.webp",
            description:
                "Clear reporting—We’ll you a printout explain the results in plain English, not just hand",
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
                Whether it’s a check engine light, sensor fault, or an intermittent electrical issue, our Snap-on diagnostics can get to the root of the problem with dealer level accuracy – without the dealer-level prices.
            </p>

            <p className="text-3xl font-bold text-left mt-6 text-black">
                Got a warning light or a fault code? Give us a call on 0116 266 9749 or stop
                by the garage for a professional diagnostic check.
            </p>
        </section>
    );
}
