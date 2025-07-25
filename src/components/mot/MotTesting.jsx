// src/components/TimingIntroSection.jsx

export default function MotTesting () {
    return (
        <section className="w-full bg-white px-4 md:px-10 py-14">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Left Content */}
                <div>
                    <h2 className="text-3xl sm:text-4xl font-bold leading-snug mb-6 text-black">
                        MOT Testing Just Got Smarter—With the Latest Diagnostic Equipment!
                    </h2>
                    <p className="text-gray-700 text-base leading-relaxed mb-4">
                        We’re pleased to announce that we now offer MOT testing using the latest state-of-the-art equipment, suitable for petrol, diesel, and electric vehicles.
                    </p>
                    <p className="text-gray-700 text-base leading-relaxed mb-4">
                        Our new MOT station is designed to deliver fast, accurate, and reliable results—helping to keep you safe and your car road-legal.
                    </p>
                    <p className="text-gray-700 text-base leading-relaxed">
                        Whether you drive a traditional combustion engine or the latest EV, we’ve got you covered with testing systems built for modern vehicles and up-to
                        date regulations.
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
