import React from "react";

const Borderguard = () => {
  return (
    <div className="flex justify-center min-h-screen bg-gray-700 py-8 px-4">

      {/* Card */}
      <div className="w-full sm:w-[80%] lg:w-[35vw] min-h-[84vh] bg-[#282020] border-2 border-purple-600 rounded-xl px-7 py-6 flex flex-col items-center gap-6">

        {/* Logo Section */}
        <div className="flex flex-col items-center text-center">
          <img
            src="https://d3t79nicn48uzj.cloudfront.net/bsfhindi/custom/1746079536.png"
            alt="BSF Logo"
            className="w-36 h-auto"
          />

          <h1 className="text-white font-bold text-lg mt-2">
            Border Guard
          </h1>
        </div>

        {/* Form */}
        <div className="w-full flex justify-center">
          <form className="w-full flex flex-col gap-4">

            {/* Passport ID */}
            <div className="flex flex-col gap-2">
              <label className="text-gray-400 text-lg font-semibold">
                Passport ID
              </label>
              <input
                type="text"
                placeholder="Enter Passport ID"
                className="w-full px-3 py-2 border border-gray-700 rounded-md bg-[#3a2f2f] text-white text-lg outline-none focus:border-purple-500"
              />
            </div>

            {/* State */}
            <div className="flex flex-col gap-2">
              <label className="text-gray-400 text-lg font-semibold">
                State
              </label>
              <input
                type="text"
                placeholder="Enter State"
                className="w-full px-3 py-2 border border-gray-700 rounded-md bg-[#3a2f2f] text-white text-lg outline-none focus:border-purple-500"
              />
            </div>

            {/* Delay Days */}
            <div className="flex flex-col gap-2">
              <label className="text-gray-400 text-lg font-semibold">
                Delay Days
              </label>
              <input
                type="number"
                placeholder="Delay days"
                className="w-full px-3 py-2 border border-gray-700 rounded-md bg-[#3a2f2f] text-white text-lg outline-none focus:border-purple-500"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 mt-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md font-bold text-base transition-all duration-300 hover:-translate-y-0.5 shadow-md hover:shadow-lg hover:cursor-pointer"
            >
              Submit
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Borderguard;