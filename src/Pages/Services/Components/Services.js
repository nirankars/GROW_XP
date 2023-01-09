import React from "react";
import { faArrowsToEye, faGlobe, faNetworkWired, faPenToSquare, faPersonBiking, faShirt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Servicesimg from "../Assests/Services.jpg"





export default function Services() {
  return (

    <div className="text-[#050708]">
    <img src={Servicesimg} alt="/"/>
      <h1 className="text-center text-4xl font-extrabold mt-8 mb-10 underline underline-offset-8">We Offer</h1>
      <div className="container mx-auto grid grid-flow-col grid-rows-2 gap-10 text-center mt-5">
        <div className="border-4 rounded-tl-lg rounded-br-xl border-[#050708] hover:bg-[#27b24c] hover:text-white hover:border-none transition-all"> 
        <FontAwesomeIcon icon={faGlobe} className="pt-4 text-3xl"/>
          <h1 className="text-2xl font-medium pt-2 underline underline-offset-8 ">
            Brand Management
          </h1>
          <p className="p-4 text-xl font-normal">
            Brand management is a key factor for businesses today. It helps to
            create, maintain, and grow the identity of a company.
          </p>
        </div>
        <div className="border-4 rounded-tl-lg rounded-br-xl border-[#050708] hover:bg-[#27b24c] hover:text-white hover:border-none transition-all">
        <FontAwesomeIcon icon={faArrowsToEye} className="pt-4 text-3xl"/>
          <h1 className="text-2xl font-medium pt-4 underline underline-offset-8">Digital Marketing</h1>
          <p className="p-4 text-xl font-normal">
            Digital marketing is an effective way to reach a wide audience and
            build a strong brand presence. It can help drive leads, increase
            website traffic, and boost sales.
          </p>
        </div>
        <div className="border-4 rounded-tl-lg rounded-br-xl border-[#050708] hover:bg-[#27b24c] hover:text-white hover:border-none transition-all">
        <FontAwesomeIcon icon={faPenToSquare} className="pt-4 text-3xl"/>
          <h1 className="text-2xl font-medium pt-4 underline underline-offset-8">Content Creation</h1>
          <p className="p-4 text-xl font-normal">
            Creating content can help build brand awareness and engage
            customers. We are passionate about helping businesses develop a
            strong content strategy to help them reach their goals.
          </p>
        </div>
        <div className="border-4 rounded-tl-lg rounded-br-xl border-[#050708] hover:bg-[#27b24c] hover:text-white hover:border-none transition-all">
          <FontAwesomeIcon icon={faShirt} className="pt-4 text-3xl"/>
          <h1 className="text-2xl font-medium pt-4 underline underline-offset-8">Merchandise</h1>
          <p className="p-4 text-xl font-normal">
            Content Merchandise is the perfect way to elevate your brand and
            connect with your audience. Show your fans you appreciate them with
            custom designs, apparel, and more!
          </p>
        </div>
        <div className="border-4 rounded-tl-lg rounded-br-xl border-[#050708] hover:bg-[#27b24c] hover:text-white hover:border-none transition-all">
        <FontAwesomeIcon icon={faPersonBiking} className="pt-4 text-3xl"/>
          <h1 className="text-2xl font-medium pt-4 underline underline-offset-8">Event Management</h1>
          <p className="p-4 text-xl font-normal">
            We provide comprehensive event management services to make your
            journey a stress-free success.
          </p>
        </div>
        <div className="border-4 rounded-tl-lg rounded-br-xl border-[#050708] hover:bg-[#27b24c] hover:text-white hover:border-none transition-all">
        <FontAwesomeIcon icon={faNetworkWired} className="pt-4 text-3xl"/>
          <h1 className="text-2xl font-medium pt-4 underline underline-offset-8">Web Development</h1>
          <p className="p-4 text-xl font-normal">
            Web development is an exciting opportunity to bring ideas to life
            online. It allows businesses to reach new customers, increase
            engagement and build a memorable online presence.
          </p>
        </div>
      </div>
    </div>
  );
}
