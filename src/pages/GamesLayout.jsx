import React from "react";
import BreadCrumbs from "../components/BreadCrumbs";
import { Outlet, useLocation } from "react-router-dom";
const GamesLayout = () => {
  const { pathname } = useLocation();

  return (
    <main>
      <div className="">
        <BreadCrumbs links={["games"]} />
        <h2 className="text-center font-bold text-3xl capitalize font-serif">
          {pathname.replace(/\/game\//i, "")}
        </h2>
      </div>
      <div
        className="bg-base-300 shadow-inner shadow-slate-950 rounded-btn
      p-2 mt-6 min-h-[60vh] "
      >
        <Outlet />
      </div>
    </main>
  );
};

export default GamesLayout;
