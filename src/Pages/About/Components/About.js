import React from "react";
import bike1 from "../../Images/bike1.jpg";
import bike2 from "../../Images/bike2.jpg";
import bike3 from "../../Images/bike3.jpg";
import bike4 from "../../Images/bike4.jpg";
import bike5 from "../../Images/bike5.jpg";
import bike6 from "../../Images/bike6.jpg";

export default function About() {
  return (
    <div>
      <div className="container mx-auto grid grid-cols-6">
        <img src={bike1} alt="" className="h-52 w-52" />
        <img src={bike2} alt="" className="h-52 w-52" />
        <img src={bike3} alt="" className="h-52 w-52" />
        <img src={bike4} alt="" className="h-52 w-52" />
        <img src={bike5} alt="" className="h-52 w-52" />
        <img src={bike6} alt="" className="h-52 w-52" />
      </div>

      <h1 className="text-center text-4xl font-bold mt-10">ABOUT US</h1>
      <p className="m-10 pl-10 pr-10 leading-8 text-xl">
        We are an experiential marketing agency with a knack for fresh ideas, a
        passion for great adventures, and a vision to realize perfect
        experiences for our clients. Adventure nerds, creative wanderers,
        motorsport geeks and committed professionals – If ideal experiences are
        like craft, you may as well call us the best craftsmen in the scene! We
        are a team of adventure enthusiasts with great experience in the field.
        Pioneers in building end to end experiential marketing strategies, we
        help customers to experience the feeling that your brand wants them to
        feel. MAX is an abbreviated name of our parent holding ‘Madcap Adventure
        Xperiences Pvt. Ltd’. Maxperience as a brand symbolizes our primary aim
        of maximizing the experiences of our clients and the people associated
        with our journey.
      </p>
    </div>
  );
}
