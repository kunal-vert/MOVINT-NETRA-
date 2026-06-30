import React from "react";

const Checkpost = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen w-full bg-black">

     
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        src="https://images.unsplash.com/photo-1780474980645-26c7bea72399?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Checkpost Background"
      />

     
      <div className="relative z-10 w-[90%] sm:w-[70%] lg:w-[50vw] p-8 bg-black/70 border-2 border-purple-600 rounded-xl ">

        <span className="block text-center text-white text-3xl font-bold mb-6">
          Checkpost
        </span>

       
        <form className="space-y-4">

         
          <div className="flex flex-col">
            <label className="text-white mb-1">Passport ID</label>
            <input
              type="text"
              placeholder="Enter Passport ID"
              className="px-3 py-2 rounded-md bg-white/10 text-white outline-none border border-gray-700 focus:border-purple-500"
            />
          </div>

          
          <div className="flex flex-col">
            <label className="text-white mb-1">State</label>
            <input
              type="text"
              placeholder="Enter State"
              className="px-3 py-2 rounded-md bg-white/10 text-white outline-none border border-gray-700 focus:border-purple-500"
            />
          </div>

         
          <div className="flex flex-col">
            <label className="text-white mb-1">Delay Days</label>
            <input
              type="number"
              placeholder="Delay days"
              className="px-3 py-2 rounded-md bg-white/10 text-white outline-none border border-gray-700 focus:border-purple-500"
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
              Deploy
              </span>
            </button>

        </form>
      </div>
    </div>
  );
};

export default Checkpost;