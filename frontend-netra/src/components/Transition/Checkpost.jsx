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
            className="w-full py-3 mt-2 border-0 border-black bg-purple-600 hover:bg-purple-700 text-white rounded-md transition hover:cursor-pointer"
          >
            Deploy
          </button>

        </form>
      </div>
    </div>
  );
};

export default Checkpost;