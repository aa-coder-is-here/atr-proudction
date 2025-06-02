"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Code2, LineChart, Lightbulb, FileText } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";

const services = [
  {
    title: "Bespoke Web Development",
    description: "You Imagine it. We Build it. We can create pretty much anything you can think of.",
    icon: <Code2 className="w-10 h-10 mb-4" />,
  },
  {
    title: "Digital Marketing of any type, Organic or Paid",
    description:
      "From multilingual SEO to paid ads across search, social, video, etc; we can help with all.",
    icon: <LineChart className="w-10 h-10 mb-4" />,
  },
  {
    title: "Technology Consultancy",
    description:
      "Honest and direct advice on anything technology or digital marketing related.",
    icon: <Lightbulb className="w-10 h-10 mb-4" />,
  },
  {
    title: "Content Generation / Marketing",
    description:
      "From hospitality and tourism to healthcare and retail we can create the content needed.",
    icon: <FileText className="w-10 h-10 mb-4" />,
  },
];

export default function Services() {
  return (
    <section className="relative bg-[#022143] py-16 px-4 overflow-hidden">
      {/* Decorative Images */}
      <div className="absolute top-0 right-0 w-48 opacity-50">
        <img src="https://www.naxtech.com/images/square-shape.png" alt="decor" />
      </div>
      <div className="absolute bottom-0 left-0 w-48 opacity-50">
        <img src="https://www.naxtech.com/images/square-shape.png" alt="decor" />
      </div>

      <div className="text-center text-white mb-12">
        <p className="text-sm font-light">What We Do</p>
        <h2 className="text-3xl md:text-4xl font-bold">
          Real-World <span className="text-white underline decoration-white">Excellence</span>
        </h2>
      </div>

      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white text-gray-800 rounded-2xl aspect-[4/5] p-6 flex flex-col justify-between hover:bg-blue-900 hover:text-white transition duration-300 shadow-lg cursor-pointer"
          >
            <div>
              {service.icon}
              <h3 className="font-semibold text-lg mb-2 leading-snug">{service.title}</h3>
              <p className="text-sm font-light">{service.description}</p>
            </div>
            <div className="pt-4">
              <a href="#" className="text-sm font-semibold inline-flex items-center group">
                More about our services
                <span className="ml-1 transform group-hover:translate-x-1 transition">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Swiper */}
      <div className="md:hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="!pb-10"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white text-gray-800 rounded-2xl w-[90%] h-[400px] mx-auto p-6 flex flex-col justify-between hover:bg-blue-900 hover:text-white transition duration-300 shadow-lg">
                <div>
                  {service.icon}
                  <h3 className="font-semibold text-lg mb-2 leading-snug">{service.title}</h3>
                  <p className="text-sm font-light">{service.description}</p>
                </div>
                <div className="pt-4">
                  <a href="#" className="text-sm font-semibold inline-flex items-center group">
                    More about our services
                    <span className="ml-1 transform group-hover:translate-x-1 transition">→</span>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <style jsx global>{`
          .swiper-pagination-bullets {
            bottom: 0 !important;
          }
          .swiper-pagination-bullet {
            background-color: #fff;
            opacity: 0.5;
            width: 10px;
            height: 10px;
            margin: 0 5px;
            transition: all 0.3s ease;
          }
          .swiper-pagination-bullet-active {
            background-color: #38bdf8;
            opacity: 1;
            transform: scale(1.2);
          }
        `}</style>
      </div>
    </section>
  );
}