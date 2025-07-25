// src/components/TimingIntroSection.jsx

export default function DiagnosticsTesting () {
    return (
        <section className="w-full bg-white px-4 md:px-10 py-14">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Left Content */}
                <div>
                    <h2 className="text-3xl sm:text-4xl font-bold leading-snug mb-6 text-black">
                        Advanced Vehicle Diagnostics with Snap-on Technology
                    </h2>
                    <p className="text-gray-700 text-base leading-relaxed mb-4">
                        We’re proud to use top-of-the-range Snap-on diagnostic equipment – trusted by professionals worldwide and updated monthly with the latest manufacturer-level software.
                    </p>
                    <p className="text-gray-700 text-base leading-relaxed mb-4">
                        Whether your car is showing a warning light, suffering from a loss of power, or just doesn’t feel quite right, our diagnostics service helps pinpoint issues quickly, accurately, and cost-effectively—saving you time and guesswork.
                    </p>           
                </div>

                {/* Right Image */}
                <div className="w-full">
                    <img
                        src="/check.webp" // <-- Place your image in /public or update path
                        alt="Timing Chain Service"
                        className="w-full h-auto rounded-md shadow-md object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
