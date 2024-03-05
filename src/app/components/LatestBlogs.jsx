import React from "react";
import Image from "next/image";
import Link from "next/link";

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
            <Link href="/blogs/blogs">
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
            </Link>
          </div>
          <div className="relative" style={{ width: "84%" }}>
            <Link href="/blogs">
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
            </Link>
          </div>
          <div className="relative" style={{ width: "84%" }}>
            <Link href="/blogs">
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
            </Link>
          </div>
          <div className="relative" style={{ width: "100%" }}>
            <Link href="/blogs">
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
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center gap-2 pt-5 pb-5">
        <button className="bg-orange-600 text-white rounded-full px-6 py-3 text-xl cursor-pointer">
          <Link href="/blogs">Blogs</Link>
        </button>
      </div>
    </div>
  );
};

export default LatestBlogs;
