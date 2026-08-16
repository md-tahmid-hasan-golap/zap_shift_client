import { use } from "react";
import customarTop from "../../src/assets/banner/customer-top.png";
import CustomarCard from "./CustomarCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CustomarReview = ({ data }) => {
  const reviews = use(data);

  return (
    <div>
      {/* Heading Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-5">
            <img
              src={customarTop}
              alt="Customer"
              className="w-32 sm:w-40 md:w-48"
            />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#03373D]">
            What our customers are saying
          </h2>

          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Enhance posture, mobility, and well-being effortlessly with Posture
            Pro. Achieve proper alignment, reduce pain, and strengthen your body
            with ease!
          </p>
        </div>
      </section>

      {/* Customer Slider */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          centeredSlides={true}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          speed={800}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1.5,
            },

            768: {
              slidesPerView: 2.2,
            },

            1024: {
              slidesPerView: 3,
            },
          }}
          className="customer-swiper !pb-14"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <CustomarCard review={review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default CustomarReview;
