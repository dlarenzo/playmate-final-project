import React from "react";
import Image from "next/image";

const FourSquare = () => {
  return (
    <div className="flex flex-wrap justify-around gap-2 rounded">
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
