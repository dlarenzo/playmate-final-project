import React from "react";
import Link from "next/link";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/outline";

const GameTrending = () => {
  return (
    <div className="w-5/6 mx-auto rounded">
      <div className="bg-[url('/images/game-trending.webp')] bg-center bg-cover flex flex-col justify-center text-center   relative w-full h-2/5 rounded border border-gray-800 mt-5 ">
        <div className="flex items-center justify-between w-full py-6 px-6 text-black">
          <div className="w-1/4 border-white text-left">
            <h3 className="text-orange-600 font-extrabold text-2xl underline underline-offset-[25px]">
              Game Trending
            </h3>
            {/* <ul>
              <li>
                {" "}
                <Link>Action & Adventure</Link>
              </li>
              <li>
                {" "}
                <Link>Fighting</Link>
              </li>
              <li>
                {" "}
                <Link>Indie</Link>
              </li>
              <li>
                {" "}
                <Link>Kid & Family</Link>
              </li>
              <li>
                {" "}
                <Link>Racing & Flying</Link>
              </li>
              <li>
                {" "}
                <Link>Roleplaying</Link>
              </li>
              <li>
                {" "}
                <Link>Shooter</Link>
              </li>
              <li>
                {" "}
                <Link>Sport</Link>
              </li>
              <li>
                {" "}
                <Link>Strategy Games</Link>
              </li>
              <li>
                {" "}
                <Link>Simulation</Link>
              </li>
              <li>
                {" "}
                <Link>Game Music</Link>
              </li>
            </ul> */}
          </div>
          <div className="flex justify-between gap-6">
            <div className="w-1/3 bg-white rounded p-2">
              <Image
                src="/images/games-trending/1-gears.webp"
                width={1200}
                height={436}
                alt="four square"
                className="rounded"
                layout="responsive"
              />
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
            <div className="w-1/3 bg-white rounded p-2">
              <Image
                src="/images/games-trending/2-gow.webp"
                width={1200}
                height={436}
                alt="four square"
                className="rounded"
                layout="responsive"
              />
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
            <div className="w-1/3 bg-white rounded p-2">
              <Image
                src="/images/games-trending/3-frostpunk.webp"
                width={1200}
                height={436}
                alt="four square"
                className="rounded"
                layout="responsive"
              />
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
    </div>
  );
};

export default GameTrending;
