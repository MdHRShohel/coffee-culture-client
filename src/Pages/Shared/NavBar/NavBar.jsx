import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/coffee-cup.png";
import { AuthContext } from "../../../Provider/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handelLogout = (event) => {
    // event.preventDefault()
    logOut()
      .then(() => {})
      .catch((error) => console.log(error.message));
  };

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Menu</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 h-28 px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold"
            >
              {navItems}
            </ul>
          </div>
          <Link to="/" className="flex">
            <img className="h-16" src={logo} alt="" />
            <h2 className="pt-6 lg:text-2xl font-bold">Coffee Culture</h2>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">{navItems}</ul>
        </div>
        <div className="navbar-end">
          <div>
            {user?.email ? (
              <>
                <button
                  className="btn btn-outline btn-warning"
                  onClick={handelLogout}
                >
                  Log out
                </button>{" "}
              </>
            ) : (
              <Link className="btn btn-outline btn-warning" to="/login">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
