import Banner from "./Banner";
import BrandNew from "./BrandNew";
import Customar from "./Customar";
import CustomarReviews from "./CustomarReviews";
import Faq from "./Faq";
import HowItWork from "./HowItWork";
import LiveParcel from "./LiveParcel";
import OurServices from "./OurServices";
const reviewsPromised = fetch("/reviews.json").then((res) => res.json());

const Home = () => {
  return (
    <div>
      <Banner />
      <HowItWork />
      <OurServices />
      <BrandNew />
      <LiveParcel />
      <Customar />
      <CustomarReviews reviewsPromised={reviewsPromised} />
      <Faq />
    </div>
  );
};

export default Home;
