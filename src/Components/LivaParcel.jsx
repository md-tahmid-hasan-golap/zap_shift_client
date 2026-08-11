import liveTraking from "../../src/assets/banner/live-tracking.png";
import saveDelevery from "../../src/assets/banner/safe-delivery.png";

const LivaParcel = () => {
  const features = [
    {
      image: liveTraking,
      title: "Live Parcel Tracking",
      description:
        "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    },
    {
      image: saveDelevery,
      title: "100% Safe Delivery",
      description:
        "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    },
    {
      image: saveDelevery,
      title: "24/7 Call Center Support",
      description:
        "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns anytime you need us.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-12">
      <div className="space-y-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-5 md:p-7 flex flex-col md:flex-row items-center gap-6 shadow-sm hover:shadow-md transition duration-300"
          >
            {/* Image */}
            <div className="w-full md:w-32 lg:w-36 flex justify-center md:justify-start shrink-0">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-28 md:w-32 lg:w-36 h-auto object-contain"
              />
            </div>

            {/* Divider */}
            <div className="hidden md:block h-16 border-l border-dashed border-[#03373D]"></div>

            {/* Content */}
            <div className="text-center md:text-left">
              <h3 className="text-lg md:text-xl font-bold text-[#03373D] mb-2">
                {feature.title}
              </h3>

              <p className="text-gray-500 text-sm leading-6 max-w-3xl">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom dotted line */}
      <div className="border-b border-dashed border-cyan-700 mt-8"></div>
    </section>
  );
};

export default LivaParcel;
