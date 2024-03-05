import React from "react";
import { HeartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

const StoreCard = ({ imgUrl, title, cost }) => {
  return (
    <div className="border border-slate-100 rounded flex flex-col">
      <div className=" rounded p-2  text-sm font-extrabold">
        <div className="rounded h-full relative group ">
          <Image src={imgUrl} width={450} height={500} alt="store images" />

          <div className="overlay absolute top-0 left-0 p-5 flex justify-end w-full h-full  bg-opacity-95 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
            <Link
              href="/"
              className="h-14 w-14 relative  bg-white hover:bg-orange-600 rounded-full group/link"
            >
              <HeartIcon className="h-8 w-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-slate-400 group-hover/link:text-white cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>

      <div className="">
        <div className="w-full bg-white rounded p-2 w-full text-sm font-extrabold">
          <p className="mt-4 mb-2">{title}</p>

          <p></p>
          <p className="mb-4 ">${cost}.00</p>
          <button className=" bg-gray-200 hover:bg-orange-600 px-10 py-3 rounded text-black hover:text-white font-extrabold uppercase text-xs">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default StoreCard;
