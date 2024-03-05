"use client";
import React, { useState, useRef } from "react";
import StoreTag from "./StoreTag";
import StoreCard from "./StoreCard";

const storesData = [
  {
    id: 1,
    title: "Kingdom Hearts ",
    image: "/images/store-games/1-kingdom-hearts.webp",
    tag: ["All", , "Best Sellers"],
    cost: 70.0,
    gitUrl: "/",
  },
  {
    id: 2,
    title: "Battle Tech",
    image: "/images/store-games/2-battle-tech.webp",
    tag: ["All", "On Sale"],
    cost: 100.0,
    gitUrl: "/",
  },
  {
    id: 3,
    title: "Xenoblade Chronicles 2",
    image: "/images/store-games/3-xenoblade.webp",
    tag: ["All", "Best Sellers"],
    cost: 100.0,
    gitUrl: "/",
  },
  {
    id: 4,
    title: "Assassin's Creed Odyssey",
    image: "/images/store-games/4-ac-odyssey.webp",
    tag: ["All", , "Best Sellers", "On Sale"],
    cost: 100.0,
    gitUrl: "/",
  },
  {
    id: 5,
    title: "God of War 4",
    image: "/images/store-games/5-gow.webp",
    tag: ["All", "New arrivals", "Best Sellers"],
    cost: 200.0,
    gitUrl: "/",
  },
  {
    id: 6,
    title: "Cyberpunk 2077",
    image: "/images/store-games/6-cyberpunk.webp",
    tag: ["All", "New arrivals", "Best Sellers"],
    cost: 100.0,
    gitUrl: "/",
  },
  {
    id: 7,
    title: "Cover Fire",
    image: "/images/store-games/7-cover-fire.jpeg",
    tag: ["All", "On Sale"],
    cost: 50.0,
    gitUrl: "/",
  },
  {
    id: 8,
    title: "Death Strand",
    image: "/images/store-games/8-death-strand.webp",
    tag: ["All", "New arrivals", "On Sale"],
    cost: 50.0,
    gitUrl: "/",
  },
];

const StoreGames = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredStore = storesData.filter((store) => store.tag.includes(tag));

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
          name="New Arrivals"
          isSelected={tag === "New Arrivals"}
        />
        <StoreTag
          onClick={handleTagChange}
          name="Best Sellers"
          isSelected={tag === "Best Sellers"}
        />
        <StoreTag
          onClick={handleTagChange}
          name="On Sale"
          isSelected={tag === "On Sale"}
        />
      </div>
      <div className="grid max-lg:grid-cols-2 gap-4 grid-cols-4 max-2xl:grid-cols-3 max-md:grid-cols-1">
        {storesData.map((store) => (
          <StoreCard
            key={store.id}
            title={store.title}
            imgUrl={store.image}
            cost={store.cost}
            tags={tag}
          />
        ))}
      </div>
    </section>
  );
};

export default StoreGames;
