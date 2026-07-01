import { use } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import CustomarCard from "./CustomarCard";

const CustomarReviews = ({ reviewsPromised }) => {
  const reviews = use(reviewsPromised) || [];

  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-20 sm:py-24 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(184,230,236,0.25),_transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#0f766e]">
            Customer Love
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-[#003d4d] sm:text-4xl lg:text-5xl">
            What Our Customers Are Saying
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
            Thousands of customers trust our delivery service for its speed,
            safety, and reliability. Here&apos;s what they have to say about
            their experience.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-1/2 z-10 hidden -translate-y-1/2 sm:block">
            <button
              type="button"
              aria-label="Previous review"
              className="review-prev flex h-12 w-12 items-center justify-center rounded-full border border-[#dbe7ea] bg-white text-[#003d4d] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <FiChevronLeft className="text-xl" />
            </button>
          </div>

          <div className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 sm:block">
            <button
              type="button"
              aria-label="Next review"
              className="review-next flex h-12 w-12 items-center justify-center rounded-full border border-[#dbe7ea] bg-white text-[#003d4d] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <FiChevronRight className="text-xl" />
            </button>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={1}
            speed={900}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 120,
              modifier: 1.5,
              slideShadows: false,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              nextEl: ".review-next",
              prevEl: ".review-prev",
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.7,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="pb-14"
          >
            {reviews.map((review, index) => (
              <SwiperSlide
                key={review.id}
                className="flex items-center justify-center pb-10"
              >
                {({ isActive }) => (
                  <div
                    className={`w-full transition-all duration-700 ease-out ${
                      isActive
                        ? "scale-[1.02] -translate-y-2 shadow-[0_30px_90px_-35px_rgba(15,23,42,0.35)]"
                        : "scale-[0.94] translate-y-4 opacity-70 blur-[0.5px]"
                    }`}
                  >
                    <CustomarCard review={review} />
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default CustomarReviews;
