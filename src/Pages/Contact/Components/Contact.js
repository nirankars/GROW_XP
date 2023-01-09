import React from "react";
import Image1 from "../Assests/Image1.jpg";

export default function Contact() {
  return (
    <div className="container mx-auto grid grid-flow-col grid-cols-2 ">
    <img src={Image1} alt="" className="h-[1000px] w-[800px]"/>
      <div className="container mx-auto text-center my-auto">
      <h1 className="mr-16 text-3xl font-extrabold underline underline-offset-8">How may we help you</h1>
        <input placeholder="Name" className="w-96 h-12 border-b-2 border-[#050708] mt-24"/>
        <br/>
        <input placeholder="Mobile" className="w-96 h-12 border-b-2 border-[#050708] mt-24" />
        <br/>
        <input placeholder="Email" className="w-96 h-12 border-b-2 border-[#050708] mt-24" />
        <br/>
        <input placeholder="Comment" className="w-96 h-12 border-b-2 border-[#050708] mt-24" />
      </div>
    </div>
  );
}
