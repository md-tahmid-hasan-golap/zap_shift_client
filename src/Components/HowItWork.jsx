import { motion } from "framer-motion";
import bookingIcon from "../../src/assets/banner/bookingIcon.png";

const HowItWork = () => {
  // Animation settings for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  // Animation settings for individual cards
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-12 px-6 bg-gray-50 mt-7 rounded-lg">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">How It Works</h2>

        {/* Applying motion.div to the grid container */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Card 1 */}
          <motion.div
            variants={cardVariants}
            className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center"
          >
            <img src={bookingIcon} alt="Booking" className="w-16 h-16 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Booking Pick & Drop</h3>
            <p className="text-gray-600 text-sm">
              From personal packages to business shipments — we deliver.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={cardVariants}
            className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center"
          >
            <img
              src={bookingIcon}
              alt="Confirmation"
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Cash On Delivery</h3>
            <p className="text-gray-600 text-sm">
              From personal packages to business shipments — we deliver.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={cardVariants}
            className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center"
          >
            <img src={bookingIcon} alt="Hub" className="w-16 h-16 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Delivery Hub</h3>
            <p className="text-gray-600 text-sm">
              From personal packages to business shipments — we deliver.
            </p>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            variants={cardVariants}
            className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center"
          >
            <img src={bookingIcon} alt="Corporate" className="w-16 h-16 mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Booking SME & Corporate
            </h3>
            <p className="text-gray-600 text-sm">
              From personal packages to business shipments — we deliver.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWork;
