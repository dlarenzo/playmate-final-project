import React from "react";
import Image from "next/image";

const HeadGame = () => {
  return (
    <div className="w-5/6 mx-auto ">
      <Image
        src="/images/cod-wide.webp"
        width={1200}
        height={436}
        alt="four square"
        className="rounded"
        layout="responsive"
      />
    </div>
  );
};

export default HeadGame;
