import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import brand1 from "../../src/assets/brands/amazon.png";
import brand2 from "../../src/assets/brands/amazon_vector.png";
import brand3 from "../../src/assets/brands/casio.png";
import brand4 from "../../src/assets/brands/moonstar.png";
import brand5 from "../../src/assets/brands/randstad.png";
import brand6 from "../../src/assets/brands/star.png";
import brand7 from "../../src/assets/brands/start_people.png";

const BrandNew = () => {
  const brands = [brand1, brand2, brand3, brand4, brand5, brand6, brand7];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Heading */}
      <h3 className="text-center text-2xl md:text-3xl font-bold text-[#03373D] mb-10">
        We've helped thousands of sales teams
      </h3>

      {/* Brand Slider */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={2}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 40,
          },

          768: {
            slidesPerView: 4,
            spaceBetween: 50,
          },

          1024: {
            slidesPerView: 5,
            spaceBetween: 60,
          },

          1280: {
            slidesPerView: 6,
            spaceBetween: 70,
          },
        }}
      >
        {brands.map((brand, index) => (
          <SwiperSlide key={index}>
            <div className="h-20 flex items-center justify-center">
              <img
                src={brand}
                alt={`Brand ${index + 1}`}
                className="max-w-[120px] max-h-[60px] w-auto object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BrandNew;
