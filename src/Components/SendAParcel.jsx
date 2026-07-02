import { useForm } from "react-hook-form";

const SendAParcel = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handelSendParcel = (data) => {
    console.log(data);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-10">
      <div className="mb-10">
        <h2 className="text-3xl md:text-5xl font-bold text-[#03373D]">
          Send A Parcel
        </h2>
        <p className="mt-3 text-gray-500">Enter your parcel details</p>
        <div className="border-b border-gray-300 mt-6"></div>
      </div>

      <form onSubmit={handleSubmit(handelSendParcel)}>
        {/* Parcel Type Radio Buttons */}
        <div className="mb-6 flex gap-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              value="Document"
              className="radio radio-primary"
              {...register("parcelType", { required: "Select parcel type" })}
            />
            <span>Document</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              value="Non-Document"
              className="radio radio-primary"
              {...register("parcelType", { required: "Select parcel type" })}
            />
            <span>Non-Document</span>
          </label>
        </div>
        {errors.parcelType && (
          <p className="text-red-500 text-sm mb-4">
            {errors.parcelType.message}
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Parcel Name */}
          <div>
            <label className="font-semibold mb-2 block">Parcel Name</label>
            <input
              type="text"
              placeholder="Parcel Name"
              className="input input-bordered w-full"
              {...register("parcelName", {
                required: "Parcel name is required",
              })}
            />
            {errors.parcelName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.parcelName.message}
              </p>
            )}
          </div>

          {/* Parcel Weight */}
          <div>
            <label className="font-semibold mb-2 block">
              Parcel Weight (KG)
            </label>
            <input
              type="number"
              placeholder="Parcel Weight"
              className="input input-bordered w-full"
              {...register("parcelWeight", {
                required: "Parcel weight is required",
              })}
            />
            {errors.parcelWeight && (
              <p className="text-red-500 text-sm mt-1">
                {errors.parcelWeight.message}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
          {/* Sender */}
          <div>
            <h3 className="font-bold text-xl mb-5">Sender Details</h3>
            <div className="space-y-5">
              <div>
                <label className="font-medium block mb-1">Sender Name</label>
                <input
                  className="input input-bordered w-full"
                  placeholder="Sender Name"
                  {...register("senderName", { required: true })}
                />
              </div>
              <div>
                <label className="font-medium block mb-1">Sender Address</label>
                <input
                  className="input input-bordered w-full"
                  placeholder="Sender Address"
                  {...register("senderAddress", { required: true })}
                />
              </div>
              <div>
                <label className="font-medium block mb-1">Contact Number</label>
                <input
                  className="input input-bordered w-full"
                  placeholder="Contact Number"
                  {...register("senderContact")}
                />
              </div>
              <div>
                <label className="font-medium block mb-1">District</label>
                <select
                  className="select select-bordered w-full"
                  {...register("senderDistrict")}
                >
                  <option>Select District</option>
                </select>
              </div>
            </div>
          </div>

          {/* Receiver */}
          <div>
            <h3 className="font-bold text-xl mb-5">Receiver Details</h3>
            <div className="space-y-5">
              <div>
                <label className="font-medium block mb-1">Receiver Name</label>
                <input
                  className="input input-bordered w-full"
                  placeholder="Receiver Name"
                  {...register("receiverName", { required: true })}
                />
              </div>
              <div>
                <label className="font-medium block mb-1">
                  Receiver Address
                </label>
                <input
                  className="input input-bordered w-full"
                  placeholder="Receiver Address"
                  {...register("receiverAddress")}
                />
              </div>
              <div>
                <label className="font-medium block mb-1">Contact Number</label>
                <input
                  className="input input-bordered w-full"
                  placeholder="Contact Number"
                  {...register("receiverContact")}
                />
              </div>
              <div>
                <label className="font-medium block mb-1">District</label>
                <select
                  className="select select-bordered w-full"
                  {...register("receiverDistrict")}
                >
                  <option>Select District</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <p className="text-gray-500 mb-6">* Pickup Time 4pm - 7pm Approx.</p>
          <button
            type="submit"
            className="btn bg-lime-400 hover:bg-lime-500 border-0 text-black px-8"
          >
            Proceed to Confirm Booking
          </button>
        </div>
      </form>
    </section>
  );
};

export default SendAParcel;
