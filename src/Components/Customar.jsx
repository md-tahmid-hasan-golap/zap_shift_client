import location from "../../src/assets/banner/location-merchant.png";
import bgImg from "../../src/assets/banner/be-a-merchant-bg.png";

const Customar = () => {
  return (
    <section className="py-16">
      <div
        className="max-w-7xl mx-auto rounded-3xl overflow-hidden bg-[#04363A] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 px-8 md:px-14 py-12">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Merchant and Customer Satisfaction <br />
              is Our First Priority
            </h2>

            <p className="text-gray-300 mt-5 leading-7 max-w-xl">
              We offer the lowest delivery charge with high-quality service and
              100% safety of your product. Pathao courier delivers your parcels
              in every corner of Bangladesh right on time.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button className="bg-lime-300 hover:bg-lime-400 text-black font-semibold px-7 py-3 rounded-full transition duration-300">
                Become a Merchant
              </button>

              <button className="border border-lime-300 text-lime-300 hover:bg-lime-300 hover:text-black font-semibold px-7 py-3 rounded-full transition duration-300">
                Earn with ZapShift Courier
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={location}
              alt="Merchant"
              className="w-full max-w-md object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customar;
