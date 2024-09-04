import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
import { useAuth0 } from "@auth0/auth0-react";

const getUserTheme = () => {
  const userTheme = localStorage.getItem("reactStationTheme") || "emerald";
  document.documentElement.setAttribute("data-theme", userTheme);
  return userTheme;
};

const initialState = {
  theme: getUserTheme(),
  scores: null,
};
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { user } = useAuth0();

  const getScoresFromLocalStorage = () => {
    if (user) {
      const data = localStorage.getItem(`${user.email}-Scores`);

      if (data) {
        const theScore = JSON.parse(data);
        dispatch({ type: "LOAD_DATA", payload: { theScore } });
      } else {
      }
    }
  };

  useEffect(() => {
    getScoresFromLocalStorage();
  }, [user]);

  const saveScore = (game, gameScore, theWins, theLoses) => {
    if (user) {
      const keyName = `${user.email}-Scores`;

      const isExist = localStorage.getItem(keyName);
      if (isExist) {
        const scores = JSON.parse(isExist);

        if (scores[game]) {

          const theGameScore = {
            played: scores[game]?.played + 1,
            score:
              scores[game]?.score > gameScore ? scores.game.score : gameScore,
            wins: scores[game]?.wins + theWins,
            loses: scores[game]?.loses + theLoses,
          };

          scores[game] = { ...theGameScore };
        } else {
          const theGameScore = {
            played: 1,
            score: gameScore,
            wins: theWins,
            loses: theLoses,
          };
          scores[game] = { ...theGameScore };
        }
        setTimeout(() => {
          dispatch({ type: "SET_SCORES", payload: { scores } });
          localStorage.setItem(keyName, JSON.stringify(scores));
        }, 1000);

      } else {
        const scores = {};
        const gameScore = {
          played: 1,
          wins: theWins,
          loses: theLoses,
        };
        scores[game] = { ...gameScore };
        setTimeout(() => {
          dispatch({ type: "SET_SCORES", payload: { scores } });
          localStorage.setItem(keyName, JSON.stringify(scores));
        }, 1000);
      }
    }
  };

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };
  return (
    <AppContext.Provider
      value={{
        ...state,
        saveScore,
        toggleTheme,
        getScoresFromLocalStorage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useAppContext = () => useContext(AppContext);
export { AppContext, AppProvider };

