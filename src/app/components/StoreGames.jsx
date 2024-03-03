import React from "react";

const gamesData = [
  {
    id: 1,
    title: "Kingdom Hearts ",
    image: "/images/games/game1.jpg",
    tag: ["New arrivals", "Best Sellers", "On Sale"],
    cost: 70.0,
    gitUrl: "/",
  },
  {
    id: 2,
    title: "Battle Tech",
    image: "/images/games/game1.jpg",
    tag: ["New arrivals", "Best Sellers", "On Sale"],
    cost: 100.0,
    gitUrl: "/",
  },
  {
    id: 3,
    title: "Xenoblade Chronicles 2",
    image: "/images/games/game1.jpg",
    tag: ["New arrivals", "Best Sellers", "On Sale"],
    cost: 100.0,
    gitUrl: "/",
  },
  {
    id: 4,
    title: "God of War 4",
    image: "/images/games/game1.jpg",
    tag: ["New arrivals", "Best Sellers", "On Sale"],
    cost: 200.0,
    gitUrl: "/",
  },
  {
    id: 5,
    title: "Cyberpunk 2077",
    image: "/images/games/game1.jpg",
    tag: ["New arrivals", "Best Sellers", "On Sale"],
    cost: 100.0,
    gitUrl: "/",
  },
  {
    id: 6,
    title: "Cover Fire",
    image: "/images/games/game1.jpg",
    tag: ["New arrivals", "Best Sellers", "On Sale"],
    cost: 50.0,
    gitUrl: "/",
  },
];

const StoreGames = () => {
  return (
    <section className="w-5/6 mx-auto bg-white rounded px-4 py-20">
      <div className="border-b-2 pb-5" text-center>
        <h1 className="text-3xl font-extrabold underline underline-offset-[26px]">
          Latest Blogs
        </h1>
      </div>
    </section>
  );
};

export default StoreGames;
