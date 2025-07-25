// src/components/TimingIntroSection.jsx

export default function ServiceTesting() {
    return (
        <section className="w-full bg-white px-4 md:px-10 py-14">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Left Content */}
                <div>
                    <h2 className="text-3xl sm:text-4xl font-bold leading-snug mb-6 text-black">
                        Expert Vehicle Servicing for Every Make, Model, and Budget
                    </h2>
                    <p className="text-gray-700 text-base leading-relaxed mb-4">
                        Professional Vehicle Servicing for All Makes & Models Whether you drive a brand-new car under warranty or an older runabout that just needs a little TLC, we offer servicing options to suit every need and budget.
                    </p>
                    <p className="text-gray-700 text-base leading-relaxed mb-4">
                        From quick oil changes to full services that meet main dealer warranty requirements, our expert technicians are here to keep your vehicle running smoothly, safely, and efficiently.
                    </p>
                </div>

                {/* Right Image */}
                <div className="w-full">
                    <img
                        src="/door.webp" // <-- Place your image in /public or update path
                        alt="Timing Chain Service"
                        className="w-full h-auto rounded-md shadow-md object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
