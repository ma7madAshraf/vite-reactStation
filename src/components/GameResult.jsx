import React from "react";
import { IoCheckmarkCircle, IoCloseCircle } from "react-icons/io5";
import { FaGamepad } from "react-icons/fa";
import { MdAutoFixHigh } from "react-icons/md";

const GameResult = ({ stats }) => {
  const { played, wins, loses, score } = stats;
  return (
    <div
      className=" min-h-16 sm:min-h-32 
    "
    >
      <h4 className="flex items-center text-xl gap-x-2 capitalize  sm:text-2xl sm:mb-1">
        <FaGamepad className="text-secondary" />
        played :<span className="text-secondary"> {played}</span>
      </h4>
      <h4 className="flex items-center text-xl gap-x-2 capitalize sm:text-2xl sm:mb-1">
        <IoCheckmarkCircle className="text-secondary" />
        wins :<span className="text-secondary"> {wins}</span>
      </h4>
      <h4 className="flex items-center text-xl gap-x-2 capitalize sm:text-2xl sm:mb-1">
        <IoCloseCircle className="text-secondary" />
        loses :<span className="text-secondary"> {loses}</span>
      </h4>{" "}
      {score > 0 && (
        <h4 className="flex items-center text-xl gap-x-2 capitalize sm:text-2xl sm:mb-1">
          <MdAutoFixHigh className="text-secondary" />
          high score :<span className="text-secondary"> {score}</span>
        </h4>
      )}
    </div>
  );
};

export default GameResult;
