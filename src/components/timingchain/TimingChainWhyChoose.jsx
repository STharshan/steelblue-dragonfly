export default function TimingChainWhyChoose() {
    const services = [
        {
            title: "Specialist tools & training",
            description:
                "We use the correct manufacturer-specific locking kits and torque settings",
            image: "/head.webp",
        },
        {
            title: "Quick turnaround",
            description:
                "Most timing jobs completed in 1–2 days",
            image: "/wash.webp",
        },
        {
            title: "Wet belt experts",
            description:
                "Experienced with Ford EcoBoost and other wet belt systems",
            image: "/clean.webp",
        },
        {
            title: "Service history checks",
            description:
                "We verify your car’s timing intervals to avoid premature failure",
            image: "/clean.webp",
        },
    ];

    return (
        <section className="w-full px-4 md:px-10 py-16 bg-white text-black">
            <div className="max-w-6xl mx-auto">
                {/* Title */}
                <h2 className="text-4xl font-bold mb-10 text-center md:text-left">
                    Why Choose Us for Timing Chains & Wet Belts?
                </h2>

                {/* Grid of Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
                    {services.map((service, index) => (
                        <div key={index}>
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-48 object-cover rounded shadow-md mb-4"
                            />
                            <h3 className="ml-10 font-semibold text-2xl mb-2">{service.title}</h3>
                            <div className="max-w-60 ml-10">
                                <p className="text-gray-700 leading-relaxed">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Note */}
                <p className="text-xl mt-30 text-gray-700 mb-6 text-center md:text-left">
                    Don’t wait for a rattling noise or engine warning – if your car is due or overdue, it’s time to act. A failed timing system can lead to complete engine failure.
                </p>

                {/* CTA */}
                <p className="font-semibold text-center md:text-left text-3xl mt-20 mb-10">
                    Think your timing chain or wet belt is due? <br />
                    Call us now on 0116 266 9749 or visit the garage for honest advice and a free timing inspection.
                </p>
            </div>
        </section>
    );
}
