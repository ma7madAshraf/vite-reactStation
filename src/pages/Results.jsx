import { useEffect } from "react";

import { useAuth0 } from "@auth0/auth0-react";
import { useAppContext } from "../reducers/context";
import EmptyResult from "../components/EmptyResult";
import GameResult from "../components/GameResult";

const Results = () => {
  const { user, loginWithRedirect } = useAuth0();
  const { scores, getScoresFromLocalStorage } = useAppContext();

  useEffect(() => getScoresFromLocalStorage(), []);
  if (!user) {
    return (
      <section className="mt-15 h-screen py-5 px-3">
        <div className="mx-auto mt-10 w-fit">
          <h2 className="capitalize mb-8 sm:text-3xl font-semibold">
            {" "}
            you must sign in to see your scores
          </h2>
          <button
            className="btn btn-secondary mx-auto block font-semibold capitalize sm:text-lg"
            onClick={() => loginWithRedirect()}
          >
            sign in
          </button>
        </div>
      </section>
    );
  }
  return (
    <section className="mt-15 py-5 ">
      <h2 className="text-4xl sm:text-5xl border-b-2 pb-4 mx-auto mb-8 w-fit  text-center uppercase">
        statistics
      </h2>
      <div role="tablist" className="tabs tabs-lifted">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Hangman"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-300 border-base-300 rounded-box p-6"
        >
          {!scores?.hangman ? (
            <EmptyResult game="hangman" />
          ) : (
            <GameResult stats={scores?.hangman} />
          )}
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab "
          aria-label="MemoryBlocks"
          defaultChecked
        />
        <div
          role="tabpanel"
          className="tab-content  border-base-300 rounded-box p-6 bg-base-300"
        >
          {!scores?.memory ? (
            <EmptyResult game="memory" />
          ) : (
            <GameResult stats={scores.memory} />
          )}
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="TypeSpeed"
        />
        <div
          role="tabpanel"
          className="tab-content border-base-300 rounded-box p-6 bg-base-300"
        >
          {!scores?.type ? (
            <EmptyResult game="typeSpeed" />
          ) : (
            <GameResult stats={scores.type} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Results;
