import liveParcel from "../../src/assets/banner/live-tracking.png";
import safeDelivery from "../../src/assets/banner/safe-delivery.png";
import support from "../../src/assets/banner/safe-delivery.png"; // যদি আলাদা support image থাকে তাহলে সেটা import কর

const features = [
  {
    image: liveParcel,
    title: "Live Parcel Tracking",
    description:
      "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
  },
  {
    image: safeDelivery,
    title: "100% Safe Delivery",
    description:
      "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
  },
  {
    image: support,
    title: "24/7 Call Center Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
  },
];

const LiveParcel = () => {
  return (
    <section className="mt-7 bg-[#f8f8f8] rounded-lg">
      <div className="max-w-6xl mx-auto px-5 border-y border-dashed border-gray-300 py-12">
        <div className="space-y-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 flex flex-col md:flex-row items-center gap-6"
            >
              {/* Image */}
              <div className="md:w-40 flex justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-28 md:w-32 object-contain"
                />
              </div>

              {/* Divider */}
              <div className="hidden md:block h-24 border-l border-dashed border-sky-400"></div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold text-[#003B49] mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-500 leading-7 text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveParcel;
