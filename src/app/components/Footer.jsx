import React from "react";
import FooterNav from "./FooterNav";
import BannerMessage from "./BannerMessage";

const Footer = () => {
  return (
    <header className="h-full w-full mt-26 overflow-hidden mt-[-1px] z-10">
      <div className="bg-[url('/images/header/3-starcraft.webp')] bg-center bg-cover text-white text-center relative w-full h-5/6 p-24">
        <BannerMessage />
        <FooterNav />
      </div>
    </header>
  );
};

export default Footer;
