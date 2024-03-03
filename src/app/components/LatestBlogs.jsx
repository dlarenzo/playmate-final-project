import React from "react";
import Image from "next/image";

const LatestBlogs = () => {
  return (
    <div className="w-5/6 mx-auto bg-white rounded px-4 py-20">
      <div className="text-black  text-center ">
        <div className="border-b-2 pb-5">
          <h1 className="text-3xl font-extrabold underline underline-offset-[26px]">
            Latest Blogs
          </h1>
        </div>
        <div className="flex flex-wrap justify-around gap-2 rounded pt-5 pb-5">
          <div style={{ width: "48%" }}>
            <Image
              src="/images/top-four-square/heroes-wide.webp"
              width={580}
              height={260}
              alt="four square"
              className="rounded"
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
      </div>
    </div>
  );
};

export default LatestBlogs;
