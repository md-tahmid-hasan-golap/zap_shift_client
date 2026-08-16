import { FaQuoteLeft, FaStar } from "react-icons/fa";

const CustomarCard = ({ review }) => {
  return (
    <div className="customer-card bg-white rounded-3xl p-6 border border-gray-100 shadow-md h-[300px] flex flex-col justify-between transition-all duration-700">
      {/* Quote */}
      <div>
        <FaQuoteLeft className="text-3xl text-[#B6E14B] mb-4" />

        <p className="text-gray-600 text-sm leading-6">{review.review}</p>
      </div>

      {/* Bottom */}
      <div>
        <div className="border-t border-dashed border-gray-300 pt-4">
          {/* Rating */}
          <div className="flex items-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`text-sm ${
                  i < Math.round(review.ratings)
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}

            <span className="ml-2 text-xs text-gray-500">{review.ratings}</span>
          </div>

          {/* User */}
          <div className="flex items-center gap-3">
            <img
              src={review.user_photoURL}
              alt={review.userName}
              className="w-12 h-12 rounded-full object-cover"
            />

            <div>
              <h3 className="font-bold text-[#03373D] text-sm">
                {review.userName}
              </h3>

              <p className="text-xs text-gray-500">Verified Customer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomarCard;
