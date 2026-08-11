import Banner from "./Banner";
import BrandNew from "./BrandNew";
import Customar from "./Customar";
import FaqSection from "./FaqSection";
import HowItWork from "./HowItWork";
import LivaParcel from "./LivaParcel";
import OurServices from "./OurServices";

const Home = () => {
  return (
    <div>
      <Banner />
      <HowItWork />
      <OurServices />
      <BrandNew />
      <LivaParcel />
      <Customar />
      <FaqSection />
    </div>
  );
};

export default Home;
