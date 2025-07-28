import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { GrMapLocation } from "react-icons/gr";
import { BsFilterRight } from "react-icons/bs";

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#0F1116] text-white px-4 md:px-20 py-10">
      {/* Top info bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-4 text-center text-sm font-medium mb-10">
        <div className="flex flex-col md:flex-row items-center gap-5">
          <img src="/contact.svg" className="text-2xl" />
          <div className="flex flex-col 
          text-center md:text-left gap-2">
            <p className="uppercase text-gray-300">We are open Monday–Friday</p>
            <p className="text-3xl font-semibold">7:00 am – 9:00 pm</p>
          </div>
        </div>

        <div className="bg-gray-400 p-6 -mt-10 flex flex-col md:flex-row items-center justify-center gap-5">
          <LiaPhoneVolumeSolid className="text-6xl mt-5 mb-5" />
          <div className="flex flex-col text-center gap-2 md:text-left">
            <p className="uppercase">Have a question?</p>
            <p className="text-2xl font-bold">0116 2669749</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <GrMapLocation className="text-5xl" />
          <div className="md:text-left">
            <p className="uppercase">Need a repair? Our address</p>
            <p className="text-2xl font-semibold text-white">
              Unit 3 Wesley St, Leicester LE4 5QG
            </p>
          </div>
        </div>
      </div>


      {/* About section content */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 mt-5 md:mt-50 text-center md:text-left">
        {/* Text */}
        <div className="lg:w-1/2">
          <p className="uppercase text-xs font-bold tracking-widest mb-2 flex gap-2 justify-center md:justify-start">
            <BsFilterRight className="text-xl" />
            Decades of Trusted Automotive Experience
          </p>
          <h2 className="text-5xl font-bold mb-8 mt-5">About Us</h2>
          <p className="text-gray-300 leading-relaxed">
            Welcome to Unit 3 Motors, where quality workmanship, trusted advice, and
            decades of experience come together under one roof. Based in Leicester, we’ve
            built a solid reputation for honest, expert vehicle care—backed by the latest tools,
            training, and technology.
          </p>
          <p className="text-gray-300 mb-14 leading-relaxed">
            Whether you're in for an MOT, a service, or a more complex repair, we treat every
            vehicle like it’s our own.
          </p>
          <button className="bg-gray-400 uppercase hover:text-black px-6 py-4 rounded-md font-semibold hover:bg-white cursor-pointer transition">
            Get More Info
          </button>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 h-80">
          <img
            src="/men.webp"
            alt="Mechanic"
            className="w-full h-auto"
          />
        </div>
      </div>

    </section>
  );
}
