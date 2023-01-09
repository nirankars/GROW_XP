import React from "react";
import Homeimg from "../Assets/Images/Homeimg.jpg"

export default function Video() {
  return (
    <div>
      <img
        src={Homeimg}
        alt="growxp banner"
      ></img>
      <p className="m-10 pl-10 pr-10 leading-8 text-xl text-[#050708]">
        Welcome to GrowXp, your premier brand management company. We are
        dedicated to helping established and emerging brands create, develop,
        and maintain their identity in the market. Our team of experienced
        professionals will work with you to create a comprehensive brand
        strategy that will set you apart from your competitors. We specialize in
        all aspects of brand management, including market research, brand
        positioning, creative design, digital marketing, and public relations.
        We look forward to helping you create an unforgettable experience for
        your customers.
      </p>
    </div>
  );
}
