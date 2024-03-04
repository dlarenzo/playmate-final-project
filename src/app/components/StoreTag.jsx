import React from "react";

const StoreTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border-orange-600 bg-orange-600"
    : "text-black border-orange-600";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3  text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default StoreTag;
