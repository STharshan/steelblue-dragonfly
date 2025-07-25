// TestimonialSlider.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { GrServices } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Paul B",
    content:
      "Took my car in for mot today (Tuesday) first class service great friendly staff. Thanks for the coffee girls see you all next year",
  },
  {
    name: "Jed K",
    content:
      "Car taken in for inspection of noises and to verify diagnostic made by another garage. Confirmed to be a timing chain & tensioner issue. Repairs made in a timely fashion and cost of parts and labour reasonable. Replaced kit has fixed the problems I was experiencing.",
  },
  {
    name: "Ranj B",
    content:
      "Absolutely brilliant service. I run a transport company so I need a reliable maintenance team and these guys are on the ball keep me moving. Recommend these guys.",
  },
  {
    name: "Charlie C",
    content:
      "Fanntastic service! Very welcoming and pleasant people. Very good reasonabley priced. A very happy customer.",
  },
];

export default function TestimonialSlider() {
  return (
    <div className="w-full px-4 md:px-10 py-10 bg-white mb-20">
      <div className="relative">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 5000 }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="relative"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col md:flex-row gap-4 md:gap-6 p-6 h-full">
                {/* Icon Block (Top on mobile, Left on desktop) */}
                <div className="relative flex flex-row sm:flex-col items-center justify-center gap-4 min-w-[60px] mx-auto md:mx-0">
                  {/* Top Line - horizontal (mobile) and vertical (desktop) */}

                  {/* Top Icon */}
                  <GrServices className="text-gray-300 text-3xl" />

                  {/* Middle Line */}
                  <div className="bg-gray-500 sm:w-px sm:h-10 w-14 h-px" />

                  {/* User Icon */}
                  <div className="bg-gray-300 p-5 rounded-full z-10">
                    <FaRegUser className="text-4xl" />
                  </div>

                  {/* Bottom Line */}
                  <div className="bg-gray-500 sm:w-px sm:h-10 w-14 h-px" />
                </div>


                {/* Content Block */}
                <div className="flex-1 mt-4 md:mt-0 text-center md:text-left">
                  <p className="text-gray-700 text-sm leading-relaxed">{item.content}</p>
                  <p className="mt-4 font-bold text-black">{item.name}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Swiper Pagination */}
          <div className="swiper-pagination !absolute mt-10 left-1/2 -translate-x-1/2 flex gap-3 z-10" />
        </Swiper>
      </div>

      {/* Pagination Bullet Styling */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background-color: #cbd5e1;
          width: 10px;
          height: 10px;
          border-radius: 9999px;
          opacity: 1;
          margin-top:10px;
        }
        .swiper-pagination-bullet-active {
          background-color: gray;
          position: relative;
        }
        .swiper-pagination-bullet-active::before {
          content: '';
          position: absolute;
          top: -6px;
          left: -6px;
          width: 22px;
          height: 22px;
          border: 2px solid gray;
          border-radius: 9999px;
        }
      `}</style>
    </div>
  );
}
