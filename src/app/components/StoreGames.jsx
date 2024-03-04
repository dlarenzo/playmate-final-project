"use client";
import React, { useState, useRef } from "react";
import StoreTag from "./StoreTag";

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
  const [tag, setTag] = useState("All");
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  return (
    <section className=" rounded px-5 py-5 text-center">
      <div className="border-b-2 pb-5" text-center>
        <h1 className="text-3xl font-extrabold underline underline-offset-[26px]">
          Store Games
        </h1>
      </div>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <StoreTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <StoreTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "New Arrivals"}
        />
        <StoreTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Best Sellers"}
        />
        <StoreTag
          onClick={handleTagChange}
          name="Email"
          isSelected={tag === "On Sale"}
        />
      </div>
    </section>
  );
};

export default StoreGames;
