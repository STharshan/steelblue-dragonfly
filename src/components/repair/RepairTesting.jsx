// src/components/TimingIntroSection.jsx

export default function RepairTesting () {
    return (
        <section className="w-full bg-white px-4 md:px-10 py-14">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Left Content */}
                <div>
                    <h2 className="text-3xl sm:text-4xl font-bold leading-snug mb-6 text-black">
                        Class 4 & 7 Repairs -We've Got You Covered
                    </h2>
                    <p className="text-gray-700 text-base leading-relaxed mb-4">
                        At our garage, we handle a full range of Class 4 and Class 7 vehicle repairs, from routine fixes to more complex mechanical work. Whether you drive a standard car, a van, or a light commercial vehicle, our experienced technicians are equipped to get the job done right – first time, every time.
                    </p>
                </div>

                {/* Right Image */}
                <div className="w-full">
                    <img
                        src="/repair.webp" // <-- Place your image in /public or update path
                        alt="Timing Chain Service"
                        className="w-full h-auto rounded-md shadow-md object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
