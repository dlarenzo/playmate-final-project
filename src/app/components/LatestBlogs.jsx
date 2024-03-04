import React from "react";
import Image from "next/image";

const LatestBlogs = () => {
  return (
    <div className="w-5/6 mx-auto bg-white rounded px-4 py-20 z-10">
      <div className="text-black  text-center ">
        <div className="border-b-2 pb-5">
          <h1 className="text-3xl font-extrabold underline underline-offset-[26px]">
            Latest Blogs
          </h1>
        </div>
        <div className="flex flex-row justify-around gap-2 rounded pt-5 pb-5 ">
          <div className="relative" style={{ width: "84%" }}>
            <Image
              src="/images/latest-blogs/1-post.webp"
              width={580}
              height={260}
              alt="four square"
              className="rounded"
              layout="responsive"
            />
            <div className="bg-gray-100 absolute py-4 px-4 rounded top-2 left-2">
              <p className="text-lg font-extrabold">06</p>
              <p className="text-sm font-extrabold uppercase ">Apr</p>
            </div>
          </div>
          <div className="relative" style={{ width: "84%" }}>
            <Image
              src="/images/latest-blogs/2-post.webp"
              width={580}
              height={260}
              alt="four square"
              className="rounded"
              layout="responsive"
            />
            <div className="bg-gray-100 absolute py-4 px-4 rounded top-2 left-2">
              <p className="text-lg font-extrabold">06</p>
              <p className="text-sm font-extrabold uppercase ">Apr</p>
            </div>
          </div>
          <div className="relative" style={{ width: "84%" }}>
            <Image
              src="/images/latest-blogs/3-post.webp"
              width={580}
              height={260}
              alt="four square"
              className="rounded"
              layout="responsive"
            />
            <div className="bg-gray-100 absolute py-4 px-4 rounded top-2 left-2">
              <p className="text-lg font-extrabold">06</p>
              <p className="text-sm font-extrabold uppercase ">Apr</p>
            </div>
          </div>
          <div className="relative" style={{ width: "100%" }}>
            <Image
              src="/images/latest-blogs/4-post.webp"
              width={580}
              height={260}
              alt="four square"
              className="rounded"
              layout="responsive"
            />
            <div className="bg-gray-100 absolute py-4 px-4 rounded top-2 left-2">
              <p className="text-lg font-extrabold">06</p>
              <p className="text-sm font-extrabold uppercase ">Apr</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestBlogs;
