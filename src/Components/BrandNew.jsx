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
    <section className="py-10">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={2}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={3000}
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 6,
          },
        }}
      >
        {brands.map((brand, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center items-center h-20">
              <img
                src={brand}
                alt={`Brand ${index + 1}`}
                className="h-10 md:h-12 object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BrandNew;
