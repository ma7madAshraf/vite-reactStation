import React from "react";
import gameHeader from "../assets/gameHeader.jpg";
import gameResults from "../assets/gamesResults.jpg";
import enjoy from "../assets/enjoy.jpg";
import games from "../assets/games.jpg";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <main className="home">
      <section className=" flex flex-col lg:flex-row-reverse mb-16 gap-x-12 gap-y-6">
        <img
          src={gameHeader}
          alt="header"
          className="w-full rounded-xl lg:w-[500px] lg:h-[275px]  "
        />
        <div className="">
          <h2 className="w-fit text-3xl border-b-2 border-secondary mb-5 tracking-tighter pb-2">
            {" "}
            <span>React</span>Station
          </h2>
          <p className="leading-7 font-medium text-base">
            React station come with a lot of games build with the fabulous
            React.js such as : hangman game , memory blocks game & type speed{" "}
          </p>
        </div>
      </section>
      <section className=" flex flex-col lg:flex-row-reverse  mb-16 gap-x-12 gap-y-6">
        <img
          src={games}
          alt="games"
          className="w-full rounded-xl lg:w-[500px] lg:h-[275px] "
        />
        <div className="">
          <h2 className="w-fit text-3xl border-b-2 border-secondary mb-5 tracking-tighter pb-2">
            {" "}
            play our games
          </h2>
          <p className="leading-7">
            play our react.js based games and spend a happy time trying to
            defeat ypu friends Lorem ipsum dolor sit amet.{" "}
          </p>
        </div>
      </section>
      <section className=" flex flex-col lg:flex-row-reverse mb-16 gap-x-12 gap-y-6">
        <img
          src={gameResults}
          alt="gameResults"
          className="w-full rounded-xl lg:w-[500px] lg:h-[275px] "
        />
        <div className="">
          <h2 className="w-fit text-3xl border-b-2 border-secondary mb-5 tracking-tighter pb-2">
            {" "}
            compare your scores
          </h2>
          <p className="leading-7">
            compare your scores with your friends and hare the joy with them
            Lorem ipsum dolor sit amet.{" "}
          </p>
        </div>
      </section>
      <section className=" flex flex-col lg:flex-row-reverse mb-16 gap-x-12 gap-y-6 pb-12">
        <img
          src={enjoy}
          alt="enjoy"
          className="w-full rounded-xl lg:w-[500px] lg:h-[275px] "
        />
        <div className="">
          <h2 className="w-fit text-3xl border-b-2 border-secondary mb-5 tracking-tighter pb-2">
            {" "}
            enjoy the experience{" "}
          </h2>
          <p className="leading-7">
            we hope you enjoy our station and try our new monthly games Lorem
            ipsum dolor sit amet.{" "}
          </p>
        </div>
      </section>
    </main>
  );
};


export default Landing;
