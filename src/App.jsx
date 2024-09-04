import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Games,
  Results,
  GamesLayout,
  Profile,
  TypeSpeed,
  HomeLayout,
  Memory,
  Landing,
  Hangman,
} from "./pages";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { element: <Landing />, index: true },
      { path: "/games", element: <Games /> },
      { path: "/results", element: <Results /> },
      { path: "/profile", element: <Profile /> },
      {
        path: "/game",
        element: <GamesLayout />,
        children: [
          { path: "/game/memory", element: <Memory /> },
          { path: "/game/typeSpeed", element: <TypeSpeed /> },
          { path: "/game/hangman", element: <Hangman /> },
        ],
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
