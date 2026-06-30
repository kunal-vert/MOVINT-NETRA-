import React from "react";

const Borderguard = () => {
  return (
    <div className="flex justify-center min-h-screen bg-gray-700 py-8 px-4 ">


      {/* Card */}
      <div className="w-full sm:w-[80%] lg:w-[35vw] h-[84vh] bg-[#282020] border-2 border-purple-600 rounded-xl px-7 py-6 flex flex-col items-center gap-6  " style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1559736220-66fc1882555d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>



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
          <form className="w-full flex flex-col gap-4 ">

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

<button
  type="submit"
  className="
  font-[font1] text-2xl
    w-full 
    py-3 
    mt-8 
    relative 
    inline-flex 
    items-center 
    justify-center 
    gap-2 
    rounded-lg 
   
    font-semibold 
    text-white 
    
    from-purple-600 
    to-indigo-600 
    hover:from-purple-500 
    hover:to-indigo-500 
    active:from-purple-700 
    active:to-indigo-700 
    active:scale-[0.97] 
    hover:scale-[1.02] 
    hover:-translate-y-0.5 
    hover:shadow-[0_0_25px_rgba(124,58,237,0.5)] 
    shadow-lg 
    shadow-purple-900/30 
    transition-all 
    duration-300 
    ease-in-out 
    focus:outline-none 
    focus:ring-2 
    focus:ring-purple-400 
    focus:ring-offset-2 
    focus:ring-offset-[#282020] 
    cursor-pointer
    overflow-hidden
    group
    border
    border-white/10
  "
>
  <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
  <span className="relative z-10 flex items-center gap-2">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-0.5">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
    Submit
  </span>
</button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Borderguard;