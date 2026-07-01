import "react-responsive-carousel/lib/styles/carousel.min.css"; // Required
import bannerImage1 from "../../src/assets/banner/banner1.png";
import bannerImage2 from "../../src/assets/banner/banner2.png";
import bannerImage3 from "../../src/assets/banner/banner3.png";
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <div className="banner-container mt-7">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={3000} // Added for better UX
        transitionTime={500}
      >
        <div>
          <img src={bannerImage1} alt="Banner 1" />
        </div>
        <div>
          <img src={bannerImage2} alt="Banner 2" />
        </div>
        <div>
          <img src={bannerImage3} alt="Banner 3" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
