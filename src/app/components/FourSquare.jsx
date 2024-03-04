import React from "react";
import Image from "next/image";

const FourSquare = () => {
  return (
    <div className="flex flex-wrap justify-around gap-2 rounded pt-5 pb-5 z-10">
      <div className="overflow-hidden" style={{ width: "48%" }}>
        <Image
          src="/images/top-four-square/heroes-wide.webp"
          width={580}
          height={260}
          alt="four square"
          className="transition ease-out rounded hover:scale-125 duration-[5500ms]"
          layout="responsive"
        />
      </div>
      <div className="overflow-hidden" style={{ width: "48%" }}>
        <Image
          src="/images/top-four-square/nfs-wide.webp"
          width={580}
          height={260}
          alt="four square"
          className="transition ease-out rounded hover:scale-125 duration-[5500ms]"
          layout="responsive"
        />
      </div>
      <div className="overflow-hidden" style={{ width: "48%" }}>
        <Image
          src="/images/top-four-square/saber-wide.webp"
          width={580}
          height={260}
          alt="four square"
          className="transition ease-out rounded hover:scale-125 duration-[5500ms]"
          layout="responsive"
        />
      </div>
      <div className="overflow-hidden" style={{ width: "48%" }}>
        <Image
          src="/images/top-four-square/combo-wide.webp"
          width={580}
          height={260}
          alt="four square"
          className="transition ease-out rounded hover:scale-125 duration-[5500ms]"
          layout="responsive"
        />
      </div>
    </div>
  );
};

export default FourSquare;
