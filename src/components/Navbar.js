import React from "react";
import { Link } from "react-router-dom";
import Logout from './Logout'

export default function Navbar({ setToken, fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-blue-900 mb-3">
        <div className="container max-w-6xl px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
                to="/all-opinions"
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
            >
                opinionbook
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fa fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item self-center">
                <Link
                to="/all-opinions"
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  <i className="fa fa-users text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Public</span>
                </Link>
              </li>
              <li className="nav-item self-center">
                <Link
                to="/my-opinions"
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  <i className="fa fa-user text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Personal</span>
                </Link>
              </li>
              <li className="nav-item self-center">
                <div
                  className="px-3 py-2 flex items-center text-xs leading-snug text-white"
                >
                    <Logout setToken={setToken}  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}