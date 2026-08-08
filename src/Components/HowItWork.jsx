import bookingIcon from "../../src/assets/banner/bookingIcon.png";

const HowItWork = () => {
  const works = [
    {
      id: 1,
      title: "Booking Pick & Drop",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      id: 2,
      title: "Cash On Delivery",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      id: 3,
      title: "Delivery Hub",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      id: 4,
      title: "Booking SME & Corporate",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-[#03373D] mb-10">How it Works</h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {works.map((work) => (
          <div
            key={work.id}
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition duration-300"
          >
            <img
              src={bookingIcon}
              alt={work.title}
              className="w-12 h-12 mb-5"
            />

            <h3 className="text-lg font-bold text-[#03373D] mb-3">
              {work.title}
            </h3>

            <p className="text-gray-500 text-sm leading-7">
              {work.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWork;
