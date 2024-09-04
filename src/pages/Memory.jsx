import React, { useContext, useEffect, useState } from "react";
import useSound from "use-sound";
import trueSound from "../assets/sounds/notification-for-game-scenes-132473.mp3";
import falseSound from "../assets/sounds/error-2-126514.mp3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { data } from "../data/memory";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { AppContext, useAppContext } from "../reducers/context";
import FormSelect from "../components/FormSelect";
import { Fragment } from "react";

const Memory = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [isSucceed, setIsSucceed] = useState(false);
  const [difficulty, setDifficulty] = useState("easy");
  const [isFailed, setIsFailed] = useState(false);
  const [remain, setRemain] = useState(0);
  const [lives, setLives] = useState(0);
  const duration = 800;
  const { saveScore } = useAppContext();

  //sounds
  const [playSuccess] = useSound(trueSound);
  const [playFail] = useSound(falseSound);

  const changeOrder = () => {
    let blocks = Array.from(document.querySelectorAll(".one-block"));
    setRemain(blocks.length);
    let newOrder = Array.from({ length: blocks.length }, (_, index) => {
      return index;
    });
    shuffle(newOrder);
    blocks.forEach((e, index) => {
      e.style.order = newOrder[index];
      e.onclick = () => {
        flipped(e);
      };
    });

    setLives((lives) => {
      let newVal;
      if (difficulty === "hard") {
        newVal = 7;
      }
      if (difficulty === "normal") {
        newVal = 10;
      }
      if (difficulty === "easy") {
        newVal = 15;
      }
      return newVal;
    });
  };
  function shuffle(array) {
    let current = array.length,
      temp,
      random;
    while (current > 0) {
      random = Math.floor(Math.random() * current);
      current--;
      temp = array[current];
      array[current] = array[random];
      array[random] = temp;
    }

    return array;
  }

  function flipped(e) {
    e.classList.add("flipped");
    let flippedCards = Array.from(document.querySelectorAll(".flipped"));
    //add condition after flipping 2 cards only
    if (flippedCards.length === 2) {
      //matched cards
      if (flippedCards[0].dataset.name === flippedCards[1].dataset.name) {
        //add class (matched)
        flippedCards.forEach((e) => {
          e.classList.add("matched");
        });
        //     //playing sucess sound
        playSuccess();
        //change the count for (remain blocks)
        setRemain((remain) => {
          const newVal = remain - 2;
          //check if all blocks are matched
          if (newVal === 0) {
            setIsSucceed(true);
            saveScore("memory", 0, 1, 0);
          }
          return newVal;
        });
      } else {
        //play fail sound
        playFail();
        //change remaining lives
        setLives((lives) => {
          const newVal = lives - 1;
          if (newVal === 0) {
            setIsFailed(true);
            saveScore("memory", 0, 0, 1);
          }
          return newVal;
        });
      }
      //timeout to remove (flipped) from classlist
      flippedCards.forEach((e) => {
        setTimeout(() => {
          e.classList.remove("flipped");
        }, duration);
      });
    } else if (flippedCards.length > 2) {
      flippedCards.forEach((e) => {
        e.classList.remove("flipped");
      });
    }
  }
  const playAgain = () => {
    setIsStarted(false);
    setIsSucceed(false);
    setIsFailed(false);
  };
  useEffect(() => {
    changeOrder();
  }, [isStarted]);
  return (
    <Wrapper className="min-h-[60vh] flex items-center justify-center relative">
      {!isStarted && (
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-fit">
            <FormSelect
              name="difficulty"
              size="select-sm"
              onChange={(e) => setDifficulty(e.target.value)}
              value={difficulty}
              list={["easy", "normal", "hard"]}
            />
            <button
              className="btn btn-primary mt-6"
              onClick={() => setIsStarted(true)}
            >
              Start Game
            </button>
          </div>
        </div>
      )}

      {isStarted && (
        <section className=" w-full p-2">
          <div className="flex justify-between">
            <div className="btn btn-secondary  text-lg capitalize">
              {difficulty}
            </div>
            <div className="btn btn-secondary  text-lg capitalize ">
              lives: {lives}
            </div>
          </div>

          <div className="blocks-container grid grid-cols-4 gap-1  my-12 md:grid-cols-5  ">
            {data.map((item) => {
              return (
                <Fragment key={item.data}>
                  <div
                    className="one-block rounded-2xl transition-all  "
                    data-name={item.data}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div className="face front  bg-neutral-950 text-4xl sm:text-6xl">
                      <FontAwesomeIcon icon={faQuestion} />
                    </div>
                    <div className="face back text-secondary text-4xl sm:text-6xl">
                      <FontAwesomeIcon icon={item.icon} />
                    </div>
                  </div>
                  <div
                    className="one-block  rounded-2xl transition-all "
                    data-name={item.data}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div className="face front  bg-neutral-950 text-4xl sm:text-6xl">
                      <FontAwesomeIcon icon={faQuestion} />
                    </div>
                    <div className="face back text-secondary text-4xl sm:text-6xl">
                      <FontAwesomeIcon icon={item.icon} />
                    </div>
                  </div>
                </Fragment>
              );
            })}
          </div>
        </section>
      )}
      {(isSucceed || isFailed) && (
        <div className="w-3/4  md:w-1/2 h-48 bg-secondary fail absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 flex justify-center items-center flex-col rounded-btn  ">
          <h2 className="tracking-tight text-xl sm:text-3xl md:text-4xl  lg:text-5xl font-bold text-slate-900 capitalize text-center">
            {isSucceed && `congratulation`}
            {isFailed && `game over`}
          </h2>
          <button
            className="btn mt-6  btn-neutral font-semibold text-sm sm:text-lg md:text-2xl"
            onClick={playAgain}
          >
            play again
          </button>
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .blocks-container .one-block .face {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    cursor: pointer;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    border-radius: 0.75rem;
  }
  .blocks-container .one-block .back {
    background-color: ghostwhite;
    transform: translateY(-72px) rotateY(180deg);
    @media (min-width: 640px) {
      transform: translateY(-120px) rotateY(180deg);
    }
  }

  .blocks-container .one-block.flipped {
    transform: rotateY(-180deg);
  }
  .blocks-container .one-block.matched {
    pointer-events: none;
    transform: rotateY(-180deg);
  }
  .blocks-container .one-block.matched .back {
    opacity: 0.7;
  }
  .blocks-container .one-block.matched .front {
    opacity: 0;
  }

  .result {
    width: 100%;
    height: 99vh;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 15px;
    font-weight: bold;
    text-transform: capitalize;
    border-radius: 5px;
    margin-top: 5px;
    background-color: #4a545c80;
    @media (min-width: 768px) {
      display: block;
    }
  }
  .result .win,
  .result .lose {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    gap: 10px;
    @media (min-width: 768px) {
      justify-content: space-between;
      min-height: 45vh;
      margin-top: 10vh;
    }
  }
  .result .lose {
  }
  .result button {
    font-size: 1.3rem;
    color: white;
    font-weight: bold;
    margin-top: 25px;
    background-color: #2196f3;
    padding: 10px 20px;
    border-radius: 54px;
    box-shadow: 0 0 4px white;
    @media (min-width: 768px) {
      font-size: 2.3rem;
      cursor: pointer;
    }
  }
  .result .correct {
    flex: 1;
  }
  .result .remain {
    float: right;
  }

  .result .win .text,
  .result .lose .text {
    font-size: 2rem;
    color: white;
    font-weight: bold;
    background-color: #673ab7;
    padding: 10px 20px;
    border-radius: 8px;
    box-shadow: 0 0 1px white inset;
    text-align: center;
    @media (min-width: 768px) {
      font-size: 4rem;
      padding: 25px 50px;
    }
  }
  .result .lose .text {
    background-color: #b73a3a;
  }
`;

export default Memory;
