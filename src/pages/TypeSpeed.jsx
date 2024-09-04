import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import data from "../data/typeData";
import { useAppContext } from "../reducers/context";
import useSound from "use-sound";
import trueSound from "../assets/sounds/notification-for-game-scenes-132473.mp3";
import falseSound from "../assets/sounds/ouch-116112.mp3";
import FormSelect from "../components/FormSelect";

const TypeSpeed = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [difficulty, setDifficulty] = useState("easy");
  // eslint-disable-next-line
  const [words, setWords] = useState([]);
  const [remainingWords, setRemainingWords] = useState([]);
  const [theWord, setTheWord] = useState("");
  const [timer, setTimer] = useState(1);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState("");
  const theAnswer = useRef(null);

  //sounds
  const [playSuccess] = useSound(trueSound);
  const [playFail] = useSound(falseSound);

  const { saveScore } = useAppContext();
  const generateWords = () => {
    // get random word from the array
    const chosenWord =
      remainingWords[Math.floor(Math.random() * remainingWords.length)];
    //show it in the game
    setTheWord(chosenWord);
    //remove it from the array

    remainingWords.splice(remainingWords.indexOf(chosenWord), 1);

    checkWord(chosenWord);
  };
  // check if the word correct or not
  const checkWord = (chosenWord) => {
    //add 3 more seconds for the first one only
    if (remainingWords.length === 9) {
      setTimer(5);
    } else {
      setTimer(3);
    }
    const count = setInterval(() => {
      setTimer((timer) => {
        const newVal = timer - 1;
        if (newVal < 0) {
          clearInterval(count);
          if (
            chosenWord.toLowerCase() === theAnswer.current.value.toLowerCase()
          ) {
            //add to score and ply the success sound then clear the input
            setScore((score) => {
              const newScore = score + 1;
              return newScore;
            });
            // correctSound.play();
            playSuccess();
            theAnswer.current.value = "";
          } else {
            playFail();
            theAnswer.current.value = "";
          }
          //check if the array is finished or not
          if (remainingWords.length > 0) {
            generateWords();
          } else {
            setIsFinished(true);
            setScore((score) => {
              if (score < 5) {
                saveScore("type", score, 0, 1);
              } else {
                saveScore("type", score, 1, 0);
              }
              return score;
            });
          }
        }
        return newVal;
      });
    }, 1000);
  };
  const checkScore = () => {
    score > 7
      ? setResult("perfect")
      : score > 4
      ? setResult("good")
      : setResult("bad");
  };

  const playAgain = () => {
    setScore(0);
    setIsStarted(false);
    setIsFinished(false);
    setDifficulty("easy");
    setWords((words) => {
      let val = data[difficulty];
      setRemainingWords(val);
      return val;
    });
  };
  useEffect(() => checkScore(), [score]);
  useEffect(() => {
    setWords((words) => {
      let val = data[difficulty];
      setRemainingWords([...val]);
      return val;
    });
  }, [difficulty, isFinished]);

  return (
    <main className="min-h-[60vh] w-full flex items-center justify-center relative">
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
              id="startGame"
              className="btn btn-primary mt-6"
              onClick={() => {
                setIsStarted(true);
                generateWords();
              }}
            >
              Start Game
            </button>
          </div>
        </div>
      )}

      {isStarted && (
        <section className=" w-full p-2 h-full">
          <div className="flex justify-between">
            <div className="btn btn-secondary  text-lg capitalize">
              {difficulty}
            </div>
            <div className="btn btn-secondary  text-lg capitalize ">
              Score: <span>{score}</span>
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="text-center text-2xl sm:text-4xl md:text-5xl my-8">
              {theWord}
            </h2>
            <input
              id="answer"
              type="text"
              className="input input-lg text-center focus:outline-0"
              ref={theAnswer}
              autoFocus
            />
            <div className="timer">
              <span className="countdown font-mono text-5xl block my-4 text-center">
                <span style={{ "--value": timer }}></span>
              </span>
            </div>
          </div>
          <div className="relative p-5 mt-10 flex flex-wrap border border-neutral-content rounded-btn">
            <button className="btn btn-secondary absolute -top-6 left-1/2 -translate-x-1/2 font-bold sm:text-lg capitalize">
              upcoming words
            </button>
            {remainingWords.map((word) => {
              return (
                <span
                  className="btn btn-primary btn-xs sm:btn-sm md:btn-md   mt-3 m-1 sm:m-4 "
                  key={word}
                >
                  {word}
                </span>
              );
            })}
          </div>

          {isFinished && (
            <div className="card bg-secondary shadow-xl  text-primary-content w-80 sm:w-96 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="card-body items-center text-center">
                <h2 className="card-title uppercase text-5xl">{result}</h2>
                <p className=" ">
                  {" "}
                  Score: <span className="text-xl">{score}</span>
                </p>
                <div className="card-actions justify-end">
                  <button
                    className="btn mt-6  btn-neutral font-semibold text-sm sm:text-lg md:text-2xl"
                    onClick={playAgain}
                  >
                    Play Again
                  </button>
                </div>
              </div>
            </div>
          )}
        </section>
      )}
    </main>
  );
};
const Wrapper = styled.div`
  .finish {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 10;
    background: white;
  }
  .finish .result {
    position: absolute;
    width: 90%;
    max-width: 900px;
    height: 35%;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--primary-clr-2);
    box-shadow: 0 0 10px;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
    text-align: center;
    @media (min-width: 768px) {
      height: 50%;
    }
  }
  .finish .user {
    color: var(--lazuli);
    font-size: 30px;
    text-transform: capitalize;
    font-weight: bold;
    font-variant: petite-caps;
    font-family: cursive;
    position: relative;
  }
  .finish h3 {
    font-size: 70px;
    margin: 15px 0 0px;
    letter-spacing: 3.5px;
    text-transform: capitalize;
    font-weight: 600;
    @media (min-width: 768px) {
      font-size: 6rem;
      margin: 15px 0 20px;
    }
  }
  .finish .perfect h3 {
    color: var(--primary-clr-7);
  }
  .finish .good h3 {
    color: #673ab7;
  }
  .finish .bad h3 {
    color: #dc3545;
  }
  .finish .result .score {
    font-size: 2rem;
    margin-top: 10px;
    letter-spacing: 1px;
    @media (min-width: 768px) {
      font-size: 2.5rem;
    }
  }
  .finish .score span {
    color: var(--lazuli);
    font-weight: bold;
  }
  .playAgain {
    position: absolute;
    bottom: -26px px;
    padding: 8px 16px;
    font-size: 1.5rem;
    background-color: var(--primary-clr-8);
    color: var(--primary-clr-1);
    border: none;
    cursor: pointer;
    border-radius: 35px;
    margin-top: 40px;
    box-shadow: 0px 0px 10px black;
    left: 50%;
    transform: translateX(-50%);
    @media (min-width: 768px) {
      font-size: 2.5rem;
    }
  }
  .finish .results {
    width: 90%;
    background: var(--platanium);
    position: absolute;
    top: 450px;
    left: 50%;
    transform: translateX(-50%);
    border: 1px solid var(--lazuli);
    border-radius: 5px;
    padding: 10px;
    position: relative;
    padding-top: 25px;
  }
  .finish .results::before {
    content: "Scores";
    position: absolute;
    background-color: var(--lazuli);
    color: white;
    font-size: 22px;
    border-radius: 12px;
    padding: 5px;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
  }
  .finish .results div {
    display: grid;
    grid-template-columns: 30% 30% 30% 10%;
    align-items: center;
    padding: 0 5px;
  }
  .finish .results div:not(:last-of-type) {
    border-bottom: 1px solid var(--lazuli);
    margin-bottom: 5px;
  }
`;

export default TypeSpeed;
