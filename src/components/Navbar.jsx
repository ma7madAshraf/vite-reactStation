import { BsCart3 } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link, NavLink, useNavigate } from "react-router-dom";
import NavLinks from "./NavLinks";
import ThemeController from "./ThemeController";

import { useAuth0 } from "@auth0/auth0-react";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Navbar = () => {
  const { user, loginWithRedirect, logout } = useAuth0();

  return (
    <nav className="bg-base-200">
      <div className="navbar my-align">
        <div className="navbar-start">
          {/* logo */}
          <NavLink
            to="/"
            className="hidden lg:flex  gap-0 btn pt-1 items-baseline btn-primary  text-sm font-bold font-serif"
          >
            <span className="text-3xl">R</span>eact
            <span className="text-3xl">S</span>tation
          </NavLink>
          {/* dropDown menu */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className=" lg:hidden text-2xl btn btn-ghost "
            >
              <FaBarsStaggered />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <NavLinks />
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          {/* center menu */}
          <ul className="menu menu-horizontal px-1">
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex-none flex place-items-center">
            {/* theme */}
            <ThemeController />
            {/* user */}
            {!user && (
              <button
                className="btn btn-sm btn-ghost capitalize ml-2 "
                onClick={() => loginWithRedirect()}
              >
                login
                <FontAwesomeIcon icon={faRightToBracket} />
              </button>
            )}
            {user && (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      src={user.picture}
                      alt="Tailwind CSS Navbar component"
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <Link to="/profile" className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </Link>
                  </li>
                  <li>
                    <a
                      onClick={() =>
                        logout({
                          logoutParams: { returnTo: window.location.origin },
                        })
                      }
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
