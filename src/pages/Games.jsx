import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import hangman from "../assets/hangman.webp";
import memory from "../assets/memory.jpeg";
import type from "../assets/typeSpeed.png";
const Games = () => {
  return (
    <main>
      <section className=" flex flex-col lg:flex-row-reverse mb-16 gap-x-12 gap-y-6">
        <img
          src={hangman}
          alt="hangman"
          className="w-full rounded-xl lg:w-[500px] lg:h-[275px]  "
        />
        <div className="">
          <h2 className="w-fit text-3xl border-b-2 border-secondary mb-5 tracking-tighter pb-2">
            {" "}
            Hangman
          </h2>
          <p className="leading-7 font-medium text-base">
            Guess the word before the man get hang with only 6 false guesses
            allowed .. React.js based game
          </p>
          <Link to="/game/hangman" className="btn btn-secondary mt-6">
            play now
          </Link>
        </div>
      </section>
      <section className=" flex flex-col lg:flex-row-reverse mb-16 gap-x-12 gap-y-6">
        <img
          src={memory}
          alt="memory"
          className="w-full rounded-xl lg:w-[500px] lg:h-[275px]  "
        />
        <div className="">
          <h2 className="w-fit text-3xl border-b-2 border-secondary mb-5 tracking-tighter pb-2 capitalize">
            {" "}
            memory blocks
          </h2>
          <p className="leading-7 font-medium text-base">
            Test your memory with the classic memory blocks game with different
            levels of difficulty to improve yor memory
          </p>
          <Link to="/game/memory" className="btn  btn-secondary mt-6">
            play now
          </Link>
        </div>
      </section>
      <section className=" flex flex-col lg:flex-row-reverse mb-16 gap-x-12 gap-y-6">
        <img
          src={type}
          alt="type"
          className="w-full rounded-xl lg:w-[500px] lg:h-[275px]  "
        />
        <div className="">
          <h2 className="w-fit text-3xl border-b-2 border-secondary mb-5 tracking-tighter pb-2 capitalize">
            typing game
          </h2>
          <p className="leading-7 font-medium text-base">
            Challenge yourself and friends to know wo is better in typing with
            that game with many levels of difficulty
          </p>
          <Link to="/game/typeSpeed" className="btn  btn-secondary mt-6">
            play now
          </Link>{" "}
        </div>
      </section>
    </main>
  );
};
export default Games;
