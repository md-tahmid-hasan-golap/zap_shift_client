import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import banner1 from "../../src/assets/banner/banner1.png";
import banner2 from "../../src/assets/banner/banner2.png";
import banner3 from "../../src/assets/banner/banner3.png";

const Banner = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 mt-6">
      <Carousel
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        showIndicators={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        transitionTime={700}
        stopOnHover={true}
        swipeable={true}
        emulateTouch={true}
        dynamicHeight={false}
        selectedItem={0}
      >
        <div>
          <img
            src={banner1}
            alt="Banner 1"
            className="w-full h-[220px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-3xl"
          />
        </div>

        <div>
          <img
            src={banner2}
            alt="Banner 2"
            className="w-full h-[220px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-3xl"
          />
        </div>

        <div>
          <img
            src={banner3}
            alt="Banner 3"
            className="w-full h-[220px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-3xl"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
