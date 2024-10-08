import { useEffect } from "react";
import mLogo from "../assets/mlogo.png";
import { useAppContext } from "../reducers/context";

const Footer = () => {
  const { theme } = useAppContext();
  const text =
    theme === "synthwave" ? " text-neutral-content" : " text-slate-900";
  useEffect(() => {}, [text]);
  return (
    <section className=" mx-auto  px-4 sm:px-8 flex justify-between items-center fixed bottom-0 w-full h-7 bg-base-200 text-primary-content z-50 font-semibold text-sm">
      <div className={`left  flex items-center text-left  ${text}`}>
        Designed by
        <img alt="logo" src={mLogo} className="w-16 md:w-20" />
      </div>
      <div className={`right text-right flex items-end  ${text} `}>
        copyright
        <span className="year text-center font-semibold ml-1 text-primary ">
          &copy;{new Date().getFullYear()}
        </span>
      </div>
    </section>
  );
};

export default Footer;
