import React from "react";
import Image from "next/image";

const FourSquare = () => {
  return (
    <div className="flex flex-wrap justify-around gap-2 rounded pt-5 pb-5">
      <div className="hover:scale-125" style={{ width: "48%" }}>
        <Image
          src="/images/top-four-square/heroes-wide.webp"
          width={580}
          height={260}
          alt="four square"
          className="rounded "
          layout="responsive"
        />
      </div>
      <div style={{ width: "48%" }}>
        <Image
          src="/images/top-four-square/nfs-wide.webp"
          width={580}
          height={260}
          alt="four square"
          className="rounded"
          layout="responsive"
        />
      </div>
      <div style={{ width: "48%" }}>
        <Image
          src="/images/top-four-square/saber-wide.webp"
          width={580}
          height={260}
          alt="four square"
          className="rounded"
          layout="responsive"
        />
      </div>
      <div style={{ width: "48%" }}>
        <Image
          src="/images/top-four-square/combo-wide.webp"
          width={580}
          height={260}
          alt="four square"
          className="rounded"
          layout="responsive"
        />
      </div>
    </div>
  );
};

export default FourSquare;
