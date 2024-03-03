import React from "react";
import FourSquare from "./FourSquare";
import StoreGames from "./StoreGames";

const MainSection = () => {
  return (
    <div className="bg-white w-5/6 mx-auto text-black rounded mb-5 mt-[-200px] z-10">
      <FourSquare />
      <StoreGames />
    </div>
  );
};

export default MainSection;
