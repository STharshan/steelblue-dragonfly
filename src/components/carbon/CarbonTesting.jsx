// src/components/TimingIntroSection.jsx

export default function CarbonTesting () {
    return (
        <section className="w-full bg-white px-4 md:px-10 py-14">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Left Content */}
                <div>
                    <h2 className="text-3xl sm:text-4xl font-bold leading-snug mb-6 text-black">
                        We’re Excited to Introduce Our New HY-CARBON Engine Cleaning Station!
                    </h2>
                    <p className="text-gray-700 text-base leading-relaxed mb-4">
                        The team are proud to announce the arrival of our HY-CARBON engine cleaning system – a cutting-edge solution designed to clean your engine from the inside out and help your vehicle run smoother, cleaner, and more efficiently.
                    </p>
                    <p className="text-gray-700 text-base leading-relaxed mb-4">
                       Over time, soot and carbon deposits naturally build up in your engine as a result of the combustion process. If left untreated, this can lead to a range of problems, including:
                    </p>
                </div>

                {/* Right Image */}
                <div className="w-full">
                    <img
                        src="/engine.webp" // <-- Place your image in /public or update path
                        alt="Timing Chain Service"
                        className="w-full h-auto rounded-md shadow-md object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
