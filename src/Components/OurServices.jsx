import service from "../../src/assets/banner/service.png";

const services = [
  {
    title: "Express & Standard Delivery",
    description:
      "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pickup to drop-off.",
    active: false,
  },
  {
    title: "Nationwide Delivery",
    description:
      "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    active: true,
  },
  {
    title: "Fulfillment Solution",
    description:
      "We provide customized fulfillment services including inventory management, order processing, packaging, and after-sales support.",
    active: false,
  },
  {
    title: "Cash on Home Delivery",
    description:
      "100% cash on delivery available anywhere in Bangladesh with guaranteed safety of your product.",
    active: false,
  },
  {
    title: "Corporate Service / Contract In Logistics",
    description:
      "Customized corporate logistics services with warehouse and inventory management support.",
    active: false,
  },
  {
    title: "Parcel Return",
    description:
      "Our reverse logistics service allows customers to return or exchange products with online business merchants.",
    active: false,
  },
];

const OurServices = () => {
  return (
    <section className="bg-[#073B3A] py-20 rounded-lg mt-7">
      <div className="max-w-7xl mx-auto px-5">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto  p-6 rounded-md mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>

          <p className="text-gray-300 text-sm leading-7">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments—we deliver
            on time, every time.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 text-center transition duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                item.active ? "bg-[#D5F35B]" : "bg-white"
              }`}
            >
              <div className="w-16 h-16 rounded-full bg-[#EEF2FF] flex items-center justify-center mx-auto mb-6">
                <img
                  src={service}
                  alt="service"
                  className="w-8 h-8 object-contain"
                />
              </div>

              <h3 className="text-xl font-bold text-[#073B3A] mb-4 leading-8">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-7 text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
