import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="h-full w-full mt-26 uppercase overflow-hidden ">
      <div className="bg-[url('/images/header/1-assasins-creed.webp')] bg-center bg-cover flex flex-col items-center justify-center text-white text-center  p-56 relative w-full h-5/6 transition ease-in-out  hover:scale-125 duration-[10500ms]">
        <div className="flex flex-col items-center justify-center w-5/6 p-6">
          <h1 className="text-6xl font-extrabold  italic pb-10">
            {" "}
            Assassin&apos;s Creed
          </h1>
          <p className="px-4 pb-10 w-5/6 normal-case">
            Live the complete saga of Master Assassin Ezio Auditore da Firenze,
            the most iconic leader of the Brotherhood of Assassins, as you seek
            vengeance for the betrayal of your family in a time of greed,
            corruption, and murderous conspiracy.
          </p>
          <button className="uppercase bg-yellow-400 hover:bg-orange-600 px-10 py-3 rounded-full text-black hover:text-white font-bold">
            Buy Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
