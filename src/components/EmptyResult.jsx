import React from "react";
import { Link } from "react-router-dom";

const EmptyResult = ({ game }) => {
  return (
    <div
      className="flex flex-col justify-center items-center min-h-16 
  "
    >
      {" "}
      <h4 className="text-lg sm:text-2xl font-semibold capitalize my-5">
        you don`t have scores yet
      </h4>
      <Link
        to={`/game/${game}`}
        className="btn  btn-secondary capitalize text-lg"
      >
        play now
      </Link>
    </div>
  );
};

export default EmptyResult;
