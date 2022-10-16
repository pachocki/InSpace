import React from "react";

import Video from "../../Assets/video/space.mp4";
import Image from "../../Assets/images/astronaut.webp";

const Hero = ({ resultRef }) => {
  const scrollTo = (e) => {
    e.preventDefault();
    resultRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex  items-center justify-center  text-white py-0 px-3 overflow-hidden hero">
      <div className=" absolute top-0 left-0 w-full height-full ">
        <video
          autoPlay
          loop
          muted
          className="w-auto h-full max-w-none brightness-50"
        >
          <source src={Video} type="video/mp4" />
        </video>
      </div>

      <div className=" flex  mobile:flex-col mobile:text-center  justify-center items-center px-4 w-full h-full  z-20 gap-6 relative">
        <div className="tablet:w-1/2 mobile:w-full screen:w-2/3 big-screen:w-1/2">
          <h1 className="mobile:text-3xl tablet:text-4xl mobile:pt-20 screen:text-4xl font-bold laptop:text-5xl laptop:pb-5 big-screen:text-6xl big-screen:pb-10 ">
            We Don't Belive <br/>
            That The Sky Should <br/> Be Your Limit...
          </h1>
          <p className="mobile:text-md  mobile:w-full tablet:text-sm  screen:text-lg pb-4 laptop:text-xl big-screen:text-4xl">
            InSpace is a leading space travel company.<br/>It deals with
            the transportation of passengers <br/>to the planets of solar system.
          </p>
          <div className="flex gap-4 mobile:items-center mobile:justify-center mobile:pt-2 laptop:pt-2 big-screen:pt-8">
            <button onClick={scrollTo}>Buy Ticket</button>
            <button onClick={scrollTo}>Contact Us</button>
          </div>
          <div className="flex px-4 gap-4 absolute bottom-10 left-0 big-screen:text-lg">
          <a href="https://mobile.twitter.com/nasa" target="_blank" rel="noopener noreferrer"><h2 className="hover:text-cyan-400">Twitter</h2></a>
            <a href="https://facebook.com/NASA/" target="_blank" rel="noopener noreferrer"><h2 className="hover:text-cyan-400">Facebook</h2></a>
          </div>
        </div>
        <div className="relative glide tablet:w-1/2 mobile:w-full screen:w-2/3 big-screen:w-1/2">
            <img src={Image} alt="astronaut"/>
        </div>
        <div className="absolute right-0 bottom-10">
            <div className="flex gap-4 mobile:hidden">
            <span className="p-1 border-solid border-2 border-white-600 rounded-md text-sm bg-white/20 backdrop-blur-lg ">Next flight:Friday</span>
            <span className="p-1 border-solid border-2 border-white-600 rounded-md text-sm bg-white/20 backdrop-blur-lg ">Price:25 mln $</span>
            </div>
            
        </div>
        </div>
    </section>
  );
};

export default Hero;
