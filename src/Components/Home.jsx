import Banner from "./Banner";
import BrandNew from "./BrandNew";
import Customar from "./Customar";
import CustomarReview from "./CustomarReview";
import FaqSection from "./FaqSection";
import HowItWork from "./HowItWork";
import LivaParcel from "./LivaParcel";
import OurServices from "./OurServices";
const reviewsPrmised = fetch("/public/reviews.json").then((res) => res.json());

const Home = () => {
  return (
    <div>
      <Banner />
      <HowItWork />
      <OurServices />
      <BrandNew />
      <LivaParcel />
      <Customar />
      <CustomarReview data={reviewsPrmised} />
      <FaqSection />
    </div>
  );
};

export default Home;
