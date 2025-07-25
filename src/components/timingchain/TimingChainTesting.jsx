// src/components/TimingIntroSection.jsx

export default function TimingChainTesting() {
    return (
        <section className="w-full bg-white px-4 md:px-10 py-14">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Left Content */}
                <div>
                    <h2 className="text-3xl sm:text-4xl font-bold leading-snug mb-6 text-black">
                       Expert Timing Chain & Wet Belt Replacement for Long-Lasting Engine Health
                    </h2>
                    <p className="text-gray-700 text-base leading-relaxed mb-4">
                        Timing components are critical to your engine’s performance and reliability. Whether your car runs on a timing chain or a wet belt (common in many newer engines like Ford’s EcoBoost), replacing them on time prevents major — and costly — engine damage.
                    </p>
                    <p className="text-gray-700 text-base leading-relaxed mb-4">
                        We specialise in high-quality timing chain and wet belt replacements, using OE-grade parts and precise fitting methods to keep your engine running like new.
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
