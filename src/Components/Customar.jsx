import location from "../../src/assets/banner/location-merchant.png";
import bgImg from "../../src/assets/banner/be-a-merchant-bg.png";

const Customar = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-10">
      <div
        className="relative overflow-hidden rounded-2xl min-h-[300px] md:min-h-[340px] flex items-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        {/* Dark Overlay to make the background dark */}
        <div className="absolute inset-0 bg-black/60 z-0"></div>

        {/* Content */}
        <div className="relative z-10 w-full md:w-3/5 px-6 py-10 md:px-10 lg:px-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight max-w-lg">
            Merchant and Customer Satisfaction
            <br />
            is Our First Priority
          </h2>

          <p className="text-gray-200 text-xs md:text-sm leading-5 mt-4 max-w-lg">
            We value the best delivery experience with the highest customer
            satisfaction. Join us and experience fast, reliable and secure
            parcel delivery.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 mt-6">
            <button className="bg-lime-300 hover:bg-lime-400 text-[#03373D] font-semibold text-xs md:text-sm px-5 py-3 rounded-full transition duration-300">
              Become a Merchant
            </button>

            <button className="border border-lime-300 text-lime-300 hover:bg-lime-300 hover:text-[#03373D] font-semibold text-xs md:text-sm px-5 py-3 rounded-full transition duration-300">
              Earn with ZapShift Courier
            </button>
          </div>
        </div>

        {/* Location Image */}
        <div className="absolute right-0 bottom-0 w-[45%] md:w-[42%] lg:w-[40%] hidden sm:block z-10">
          <img
            src={location}
            alt="Merchant Location"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Customar;
