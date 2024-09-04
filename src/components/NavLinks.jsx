import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/games">Games</NavLink>
      </li>
      <li>
        <NavLink to="/results">Results</NavLink>
      </li>
    </>
  );
};

export default NavLinks;
