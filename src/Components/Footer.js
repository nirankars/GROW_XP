import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer className="bg-white text-center text-xs p-3 w-full">
        <p className="mx-96 mb-10 mt-5 text-lg">
          "The success of a brand lies in its ability to establish an emotional
          connection with its customers - a connection that is built on trust,
          reliability, and authenticity."
        </p>

        <div className="grid lg:grid-cols-3 py-4 text-lg bg-[#27b24c]">
          <div>
            <p>
              {" "}
              <FontAwesomeIcon icon={faPhone} className="mr-2" /> 7732898891
            </p>
          </div>

          <div>
            <p>
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              Hello@growxp.com
            </p>
          </div>

          <div>
            <p>
              <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
              Jaipur
            </p>
          </div>
        </div>
        <div className="bg-[#27b24c] text-lg mb-5 pb-4">
          <Link to="">
            <FontAwesomeIcon icon={faFacebookF} className="m-2" />
          </Link>
          <Link to="">
            <FontAwesomeIcon icon={faLinkedin} className="m-2" />
          </Link>
          <Link to="">
            <FontAwesomeIcon icon={faInstagram} className="m-2" />
          </Link>
        </div>

        <div className="text-gray-500 mt-2">
          Copyright © 2020 All Rights Reserved
        </div>
      </footer>
    </div>
  );
}
