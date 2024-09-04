import React from "react";

const Keyboard = ({ check }) => {
  return (
    <section className="cursor-pointer">
      <div className="my-1 flex w-full justify-center gap-1">
        <kbd
          className="kbd kbd-sm sm:kbd-md "
          onClick={(e) => {
            check(e, e.target.textContent);
          }}
        >
          q
        </kbd>
        <kbd
          className="kbd kbd-sm sm:kbd-md "
          onClick={(e) => {
            check(e, e.target.textContent);
          }}
        >
          w
        </kbd>
        <kbd
          className="kbd kbd-sm sm:kbd-md "
          onClick={(e) => {
            check(e, e.target.textContent);
          }}
        >
          e
        </kbd>
        <kbd
          className="kbd kbd-sm sm:kbd-md "
          onClick={(e) => {
            check(e, e.target.textContent);
          }}
        >
          r
        </kbd>
        <kbd
          className="kbd kbd-sm sm:kbd-md "
          onClick={(e) => {
            check(e, e.target.textContent);
          }}
        >
          t
        </kbd>
        <kbd
          className="kbd kbd-sm sm:kbd-md "
          onClick={(e) => {
            check(e, e.target.textContent);
          }}
        >
          y
        </kbd>
        <kbd
          className="kbd kbd-sm sm:kbd-md "
          onClick={(e) => {
            check(e, e.target.textContent);
          }}
        >
          u
        </kbd>
        <kbd
          className="kbd kbd-sm sm:kbd-md "
          onClick={(e) => {
            check(e, e.target.textContent);
          }}
        >
          i
        </kbd>
        <kbd
          className="kbd kbd-sm sm:kbd-md "
          onClick={(e) => {
            check(e, e.target.textContent);
          }}
        >
          o
        </kbd>
        <kbd
          className="kbd kbd-sm sm:kbd-md "
          onClick={(e) => {
            check(e, e.target.textContent);
          }}
        >
          p
        </kbd>
      </div>
      <div className="my-1 flex w-full justify-center gap-1">
        <kbd
          className="kbd kbd-sm sm:kbd-md "
          onClick={(e) => {
            check(e, e.target.textContent);
          }}
        >
          a
        </kbd>
        <kbd
          className="kbd kbd-sm sm:kbd-md "
          onClick={(e) => {
            check(e, e.target.textContent);
          }}
        >
          s
        </kbd>
        <kbd
          className="kbd kbd-sm sm:kbd-md "
          onClick={(e) => {
            check(e, e.target.textContent);
          }}
        >
          d
        </kbd>
        <kbd
          className="kbd kbd-sm sm:kbd-md "
          onClick={(e) => {
            check(e, e.target.textContent);
          }}
        >
          f
        </kbd>
        <kbd
          className="kbd kbd-sm sm:kbd-md "
          onClick={(e) => {
            check(e, e.target.textContent);
          }}
        >
          g
        </kbd>
        <kbd
          className="kbd kbd-sm sm:kbd-md "
          onClick={(e) => {
            check(e, e.target.textContent);
          }}
        >
          h
        </kbd>
        <kbd
          className="kbd kbd-sm sm:kbd-md "
          onClick={(e) => {
            check(e, e.target.textContent);
          }}
        >
          j
        </kbd>
        <kbd
          className="kbd kbd-sm sm:kbd-md "
          onClick={(e) => {
            check(e, e.target.textContent);
          }}
        >
          k
        </kbd>
        <kbd
          className="kbd kbd-sm sm:kbd-md "
          onClick={(e) => {
            check(e, e.target.textContent);
          }}
        >
          l
        </kbd>
      </div>
      <div className="my-1 flex w-full justify-center gap-1">
        <kbd
          className="kbd kbd-sm sm:kbd-md "
          onClick={(e) => {
            check(e, e.target.textContent);
          }}
        >
          z
        </kbd>
        <kbd
          className="kbd kbd-sm sm:kbd-md "
          onClick={(e) => {
            check(e, e.target.textContent);
          }}
        >
          x
        </kbd>
        <kbd
          className="kbd kbd-sm sm:kbd-md "
          onClick={(e) => {
            check(e, e.target.textContent);
          }}
        >
          c
        </kbd>
        <kbd
          className="kbd kbd-sm sm:kbd-md "
          onClick={(e) => {
            check(e, e.target.textContent);
          }}
        >
          v
        </kbd>
        <kbd
          className="kbd kbd-sm sm:kbd-md "
          onClick={(e) => {
            check(e, e.target.textContent);
          }}
        >
          b
        </kbd>
        <kbd
          className="kbd kbd-sm sm:kbd-md "
          onClick={(e) => {
            check(e, e.target.textContent);
          }}
        >
          n
        </kbd>
        <kbd
          className="kbd kbd-sm sm:kbd-md "
          onClick={(e) => {
            check(e, e.target.textContent);
          }}
        >
          m
        </kbd>
      </div>
    </section>
  );
};

export default Keyboard;
