import React from "react";
import FooterNav from "./FooterNav";

const Footer = () => {
  return (
    <header className="h-full w-full mt-26 uppercase overflow-hidden mt-[-1px] z-10">
      <div className="bg-[url('/images/header/3-starcraft.webp')] bg-center bg-cover flex flex-col items-center justify-center text-white text-center  p-56 relative w-full h-5/6 transition ease-in-out  hover:scale-125 duration-[10500ms]">
        <div className="flex flex-col items-center justify-center w-5/6 p-6">
          {/* <FooterNav /> */}
          FooterNav
        </div>
      </div>
    </header>
  );
};

export default Footer;
