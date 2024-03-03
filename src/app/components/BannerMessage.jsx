import React from "react";
import Image from "next/image";

const BannerMessage = () => {
  return (
    <div className="w-3/5 mx-auto bg-orange-600 py-6 mt-[-25px] ">
      <div className="flex justify-center">
        <Image
          src="/images/icons/free-del-icon.webp"
          width={50}
          height={50}
          alt="four square"
          className="mr-5"
        />
        <p className="font-extrabold uppercase">
          Free Delivery on your first order - only $99
        </p>
      </div>
    </div>
  );
};

export default BannerMessage;
