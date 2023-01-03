import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import mainLogo from "../Assets/Images/growxp.png";

export default function Footer() {
  return (
    <div>
      <footer className="bg-[#A4EBF3] text-center text-xs p-3 w-full">
        <div className="grid lg:grid-cols-3 gap-10 mx-auto my-5">
          <img
            src={mainLogo}
            className="my-auto h-6 mr-3 sm:h-9"
            alt=""
          />
          <p className="text-sm">
            We are an experiential marketing agency with a knack for fresh
            ideas, a passion for great adventures, and a vision to realize
            perfect experiences for clients.
          </p>
          <div className="my-auto">
            <FontAwesomeIcon icon={faCoffee} className="ml-2" />
            <FontAwesomeIcon icon={faCoffee} className="ml-2" />
            <FontAwesomeIcon icon={faCoffee} className="ml-2" />
            <FontAwesomeIcon icon={faCoffee} className="ml-2" />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 mb-5 text-sm">
          <div>
            <FontAwesomeIcon icon={faCoffee} className="" />
            <p>7732898891</p>
          </div>

          <div>
            <FontAwesomeIcon icon={faCoffee} className="" />
            <p>Hello@growxp.com</p>
          </div>

          <div>
            <FontAwesomeIcon icon={faCoffee} className="" />
            <p>Jaipur</p>
          </div>
        </div>

        <div className="text-gray-500">
          Copyright © 2020 All Rights Reserved
        </div>
      </footer>
    </div>
  );
}
