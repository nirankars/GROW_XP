import React from "react";

export default function OurWork() {
  return (
    <div>
      <div className="container mx-auto my-5">
        <h1 className="text-center text-4xl font-bold">WHAT WE DO</h1>
      </div>
      <div className="grid lg:grid-cols-3 gap-5 my-10 mx-10">
        <a
          className="bg-red-900 text-white text-center py-11 rounded-xl text-3xl h-52 bg-[url(https://cdn.pixabay.com/photo/2014/09/14/23/35/bike-race-446197_1280.jpg)]"
          href="/"
        >
          IP Events
        </a>
        <a
          className="bg-red-900 text-white text-center py-11 rounded-xl text-3xl h-52 bg-[url(https://cdn.pixabay.com/photo/2014/09/14/23/33/bike-race-446169_1280.jpg)]"
          href="/"
        >
          Expedition Events
        </a>
        <a
          className="bg-red-900 text-white text-center py-11 rounded-xl text-3xl h-52 bg-[url(https://media.istockphoto.com/id/1144347972/photo/several-parked-motorcycles.jpg?s=612x612&w=is&k=20&c=NzZrobnhuL6U_E1r25g9cjRJUgXaqaETKDL9MXdBntI=)]"
          href="/"
        >
          Film Production
        </a>
      </div>

      <div className="container mx-auto">
       <video src="https://maxperience.in/wp-content/uploads/2022/07/Untitled.mp4" autoPlay="" muted="muted" controlslist="nodownload" className="float-left mr-10 h-52 w-[586px] rounded-xl" ></video>
        <h2 className="ml-10 text-red-600 text-8xl font-bold">172 Events</h2>
        <p className=" mt-3 leading-8 text-xl">
          Curating the best experiences for our clients with our unique &
          innovative 360-degree marketing services.
        </p>
      </div>
    </div>
  );
}
