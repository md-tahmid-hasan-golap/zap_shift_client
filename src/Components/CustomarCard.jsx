import { useState } from "react";
import { FaQuoteLeft, FaRegStar, FaStar } from "react-icons/fa";

const formatReviewDate = (value) => {
  if (!value) return "Recently reviewed";

  const parsedDate = new Date(value);

  if (Number.isNaN(parsedDate.getTime())) {
    return "Recently reviewed";
  }

  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(parsedDate);
};

const CustomarCard = ({ review }) => {
  const [hasImageError, setHasImageError] = useState(false);

  const safeReview = review ?? {};
  const reviewText =
    safeReview.review || "A dependable experience from start to finish.";
  const userName = safeReview.userName || "Verified Customer";
  const userEmail = safeReview.user_email || "customer@example.com";
  const photoUrl =
    hasImageError || !safeReview.user_photoURL ? "" : safeReview.user_photoURL;
  const rating = Number(safeReview.ratings) || 0;
  const roundedRating = Math.round(rating);
  const initials =
    userName
      .split(" ")
      .slice(0, 2)
      .map((part) => part[0])
      .join("")
      .toUpperCase() || "C";

  return (
    <article className="group relative overflow-hidden rounded-[28px] border border-[#e2e8f0] bg-white p-7 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.35)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_90px_-35px_rgba(15,23,42,0.4)] sm:p-8 lg:p-10">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-r from-[#f8fbfc] via-white to-[#f8fbfc]" />

      <div className="relative">
        <div className="mb-6 inline-flex rounded-full bg-[#eaf7f9] p-3 text-2xl text-[#0f766e] shadow-sm">
          <FaQuoteLeft />
        </div>

        <p className="mb-8 text-base leading-8 text-gray-700 sm:text-lg">
          “{reviewText}”
        </p>

        <div className="mb-8 border-t-2 border-dashed border-gray-200" />

        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            {photoUrl ? (
              <img
                src={photoUrl}
                alt={userName}
                onError={() => setHasImageError(true)}
                className="h-14 w-14 rounded-full object-cover ring-2 ring-[#eaf7f9]"
              />
            ) : (
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0f766e] text-lg font-semibold text-white">
                {initials}
              </div>
            )}

            <div>
              <h3 className="text-lg font-semibold text-[#003d4d]">
                {userName}
              </h3>
              <p className="text-sm text-gray-500">{userEmail}</p>
            </div>
          </div>

          <div className="flex flex-col gap-2 sm:items-end">
            <div className="flex items-center gap-1 text-amber-400">
              {Array.from({ length: 5 }, (_, index) => (
                <span key={index} className="text-sm">
                  {index < roundedRating ? <FaStar /> : <FaRegStar />}
                </span>
              ))}
            </div>
            <p className="text-sm font-medium text-gray-500">
              {formatReviewDate(safeReview.date)}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CustomarCard;
