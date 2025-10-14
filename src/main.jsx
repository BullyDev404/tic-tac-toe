import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Intro from "./components/pages/intro/Intro.jsx";
import Info from "./components/pages/info/Info.jsx";
// import Gameboard from "./components/pages/gameboard/Gameboard.jsx";
import Gameboard from "./components/pages/gameboard/Gameboard.jsx";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/intro",
    element: <Intro />,
  },
  {
    path: "/info",
    element: <Info />,
  },
  {
    path: "/newgame",
    element: <Gameboard />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>
);
