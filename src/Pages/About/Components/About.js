import React from "react";
import { faFileCirclePlus, faMountainSun, faPersonWalkingDashedLineArrowRight, faScrewdriverWrench, faVialCircleCheck, faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Aboutimg from "../Assests/Aboutimg.jpg";
import Teamimg from "../Assests/Teamimg.jpg";

export default function About() {
  return (
    <div className="text-[#050708]">
      {/* Main Image */}
      <div>
        <img src={Aboutimg} alt="" />
      </div>
      {/* Main Image */}

      {/* About Us Starts */}
      <div>
        <h1 className="text-center text-4xl font-extrabold mt-8 underline underline-offset-8">
          ABOUT US
        </h1>
        <p className="m-10 pl-10 pr-10 leading-8 text-xl">
          Welcome to GrowXp, your premier brand management company. We are
          dedicated to helping established and emerging brands create, develop,
          and maintain their identity in the market. Our team of experienced
          professionals will work with you to create a comprehensive brand
          strategy that will set you apart from your competitors. We specialize
          in all aspects of brand management, including market research, brand
          positioning, creative design, digital marketing, and public relations.
          We look forward to helping you create an unforgettable experience for
          your customers.
        </p>
      </div>
      {/* About Us Ends */}

      {/* Our Team Starts */}
      <div className="mb-5">
        <h2 className="text-center text-4xl font-bold mb-10 my-12 underline underline-offset-8">
          Our Team
        </h2>
        <div className="mx-10 grid grid-flow-col grid-cols-2">
          <div>
            <img src={Teamimg} alt="" />
          </div>
          <div>
            <p className="mr-14 mt-14 leading-8 text-xl">
              We are a brand management firm that specializes in helping you get
              the most out of your brand. We understand that it takes a lot of
              hard work and dedication to build and manage a successful brand.
              That’s why we are committed to providing a full range of brand
              services that are tailored to your specific needs.
              <br />
              <br />
              Our team of experienced professionals will work with you to create
              a strategic plan to build your brand, create a consistent message,
              and design a comprehensive marketing strategy to ensure maximum
              visibility and success. We will provide you with the tools and
              resources necessary to strengthen your brand, identify target
              markets, and measure your success. Our team will also work with
              you to create a comprehensive online presence and ensure that your
              brand is represented effectively on all digital platforms.
              <br />
              <br />
              At our brand management firm, our goal is to help you build and
              maintain a strong, recognizable, and successful brand. We look
              forward to helping you take your brand to the next level.
            </p>
          </div>
        </div>
      </div>
      {/* Our Team Ends */}



      {/* Our Process Starts */}
      <div>
        <h2 className="text-center text-4xl font-bold mb-10 my-12 underline underline-offset-8">
          Our Process
        </h2>
        <div className="container mx-auto grid grid-flow-col grid-rows-2 gap-10 text-center">
          <div className="border-4 rounded-tl-lg rounded-br-xl border-[#050708] hover:bg-[#27b24c] hover:text-white hover:border-none transition-all">
          <FontAwesomeIcon icon={faFileCirclePlus} className="pt-4 text-3xl"/>
            <h3 className="text-2xl font-medium pt-2 underline underline-offset-8 ">
              Understanding the requirement
            </h3>
            <p className="p-4 text-xl font-normal">
              Understanding client's requirement involves actively listening to
              their needs and objectives in order to create a tailored solution
              that meets their expectations.
            </p>
          </div>
          <div className="border-4 rounded-tl-lg rounded-br-xl border-[#050708] hover:bg-[#27b24c] hover:text-white hover:border-none transition-all">
          <FontAwesomeIcon icon={faScrewdriverWrench} className="pt-4 text-3xl"/>
            <h3 className="text-2xl font-medium pt-2 underline underline-offset-8 ">
              Improvments If Needed
            </h3>
            <p className="p-4 text-xl font-normal">
              Understanding client's requirement involves actively listening to
              their needs and objectives in order to create a tailored solution
              that meets their expectations.
            </p>
          </div>
          <div className="border-4 rounded-tl-lg rounded-br-xl border-[#050708] hover:bg-[#27b24c] hover:text-white hover:border-none transition-all">
          <FontAwesomeIcon icon={faWandMagicSparkles} className="pt-4 text-3xl"/>
            <h3 className="text-2xl font-medium pt-2 underline underline-offset-8 ">
              Creating the oprimal solution
            </h3>
            <p className="p-4 text-xl font-normal">
              Understanding client's requirement involves actively listening to
              their needs and objectives in order to create a tailored solution
              that meets their expectations.
            </p>
          </div>
          <div className="border-4 rounded-tl-lg rounded-br-xl border-[#050708] hover:bg-[#27b24c] hover:text-white hover:border-none transition-all">
            <FontAwesomeIcon icon={faVialCircleCheck} className="pt-4 text-3xl"/>
            <h3 className="text-2xl font-medium pt-2 underline underline-offset-8 ">
              Testing
            </h3>
            <p className="p-4 text-xl font-normal">
              Understanding client's requirement involves actively listening to
              their needs and objectives in order to create a tailored solution
              that meets their expectations.
            </p>
          </div>
          <div className="border-4 rounded-tl-lg rounded-br-xl border-[#050708] hover:bg-[#27b24c] hover:text-white hover:border-none transition-all">
           <FontAwesomeIcon icon={faPersonWalkingDashedLineArrowRight} className="pt-4 text-3xl"/>
            <h3 className="text-2xl font-medium pt-2 underline underline-offset-8 ">
              Deployment
            </h3>
            <p className="p-4 text-xl font-normal">
              Understanding client's requirement involves actively listening to
              their needs and objectives in order to create a tailored solution
              that meets their expectations.
            </p>
          </div>
          <div className="border-4 rounded-tl-lg rounded-br-xl border-[#050708] hover:bg-[#27b24c] hover:text-white hover:border-none transition-all">
            <FontAwesomeIcon icon={faMountainSun} className="pt-4 text-3xl"/>
            <h3 className="text-2xl font-medium pt-2 underline underline-offset-8 ">
              Success
            </h3>
            <p className="p-4 text-xl font-normal">
              Understanding client's requirement involves actively listening to
              their needs and objectives in order to create a tailored solution
              that meets their expectations.
            </p>
          </div>
        </div>
      </div>
      {/* Our Process Ends */}



    </div>
  );
}
