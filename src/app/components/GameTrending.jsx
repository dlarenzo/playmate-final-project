import React from "react";
import Link from "next/link";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/outline";

const GameTrending = () => {
  return (
    <div className="w-5/6 mx-auto rounded mb-5">
      <div className="bg-[url('/images/game-trending.webp')] bg-center bg-cover flex flex-col justify-center text-center   relative w-full h-2/5 rounded border border-gray-800 mt-5 ">
        <div className="flex items-center justify-between gap-6 w-full py-6 px-6 text-black">
          <div className="w-1/4 h-100  text-left">
            <div className="mb-20">
              <h3 className="text-orange-600 font-extrabold text-2xl underline underline-offset-[25px]">
                Game Trending
              </h3>
            </div>
            <ul className="text-white leading-7 pb-20">
              <li>
                {" "}
                <Link href="/">Action & Adventure</Link>
              </li>
              <li>
                {" "}
                <Link href="/">Fighting</Link>
              </li>
              <li>
                {" "}
                <Link href="/">Indie</Link>
              </li>
              <li>
                {" "}
                <Link href="/">Kid & Family</Link>
              </li>
              <li>
                {" "}
                <Link href="/">Racing & Flying</Link>
              </li>
              <li>
                {" "}
                <Link href="/">Roleplaying</Link>
              </li>
              <li>
                {" "}
                <Link href="/">Shooter</Link>
              </li>
              <li>
                {" "}
                <Link href="/">Sport</Link>
              </li>
              <li>
                {" "}
                <Link href="/">Strategy Games</Link>
              </li>
              <li>
                {" "}
                <Link href="/">Simulation</Link>
              </li>
              <li>
                {" "}
                <Link href="/">Game Music</Link>
              </li>
            </ul>
          </div>

          <div className="w-1/4 bg-white rounded p-2">
            <div className="overflow-hidden">
              <Image
                src="/images/games-trending/1-gears.webp"
                width={1200}
                height={436}
                alt="four square"
                className="transition ease-out rounded hover:scale-125 duration-[5500ms]"
                layout="responsive"
              />
            </div>
            <div className="w-full bg-white rounded p-2 w-full text-sm font-extrabold">
              <p className="mt-4 mb-2">Gears of War 4</p>

              <div className="flex justify-center mb-2 text-gray-300 ">
                <StarIcon className="h5 w-5" />
                <StarIcon className="h5 w-5" />
                <StarIcon className="h5 w-5" />
                <StarIcon className="h5 w-5" />
                <StarIcon className="h5 w-5" />
              </div>
              <p className="mb-4 ">$200.00</p>
              <button className=" bg-gray-200 hover:bg-orange-600 px-10 py-3 rounded text-black hover:text-white font-extrabold uppercase text-xs">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="w-1/4 bg-white rounded p-2">
            <div className="overflow-hidden">
              <Image
                src="/images/games-trending/2-gow.webp"
                width={1200}
                height={436}
                alt="four square"
                className="transition ease-out rounded hover:scale-125 duration-[5500ms]"
                layout="responsive"
              />
            </div>
            <div className="w-full bg-white rounded p-2 w-full text-sm font-extrabold">
              <p className="mt-4 mb-2">God of War 4</p>

              <div className="flex justify-center mb-2 text-gray-300 ">
                <StarIcon className="h5 w-5" />
                <StarIcon className="h5 w-5" />
                <StarIcon className="h5 w-5" />
                <StarIcon className="h5 w-5" />
                <StarIcon className="h5 w-5" />
              </div>
              <p className="mb-4 ">$200.00</p>
              <button className=" bg-gray-200 hover:bg-orange-600 px-10 py-3 rounded text-black hover:text-white font-extrabold uppercase text-xs">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="w-1/4 bg-white rounded p-2">
            <div className="overflow-hidden ">
              <Image
                src="/images/games-trending/3-frostpunk.webp"
                width={1200}
                height={436}
                alt="four square"
                className="transition ease-out rounded hover:scale-125 duration-[5500ms] overflow-hidden"
                layout="responsive"
              />
            </div>
            <div className="w-full bg-white rounded p-2 w-full text-sm font-extrabold">
              <p className="mt-4 mb-2">Frostpunk</p>

              <div className="flex justify-center mb-2 text-gray-300 ">
                <StarIcon className="h5 w-5" />
                <StarIcon className="h5 w-5" />
                <StarIcon className="h5 w-5" />
                <StarIcon className="h5 w-5" />
                <StarIcon className="h5 w-5" />
              </div>
              <p className="mb-4 ">$200.00</p>
              <button className=" bg-gray-200 hover:bg-orange-600 px-10 py-3 rounded text-black hover:text-white font-extrabold uppercase text-xs">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameTrending;
