import React from "react";
import { Link } from "react-router-dom";
import mainLogo from "../Assets/Images/growxp.png";

export default function Navbar() {
  return (
    <div>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-white-900">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link to="/" className="flex items-center">
            <img
              src={mainLogo}
              className="h-12"
              alt="growxp-logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
              <li>
                <Link
                  to="/"
                  className="block my-2 ml-3 py-2 px-4 text-[#050708] text-xl hover:bg-[#27b24c] hover:text-white rounded-lg hover:text-2xl transition-all"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block my-2 ml-3 py-2 px-4 text-[#050708] text-xl hover:bg-[#27b24c] hover:text-white rounded-lg hover:text-2xl transition-all"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="block my-2 ml-3 py-2 px-4 text-[#050708] text-xl hover:bg-[#27b24c] hover:text-white rounded-lg hover:text-2xl transition-all"
                >
                  Services
                </Link>
              </li>
              <li>
                <a
                  href="/contact"
                  className="block my-2 ml-3 py-2 px-4 bg-[#27b24c] text-white rounded-lg text-xl hover:text-[#050708] hover:text-2xl transition-all"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
