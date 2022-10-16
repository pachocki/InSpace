import React from "react";
import { forwardRef } from "react";
import Contact from "../Contact/Contact";
import Image from "../../Assets/images/astronaut-footer.png";
import Image1 from "../../Assets/images/code-stripe.png";

const Footer = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="bg-black/60 backdrop-blur-xl pt-10 grid big-screen:grid-cols-[2fr,_1fr,1fr] laptop:grid-cols-[2fr,_1fr,0.5fr] tablet:grid-cols-[2fr,_0.7fr] mobile:grid-cols-[2fr,_1fr] gap-1  rounded overflow-hidden bg-image" >
      <div className="flex flex-col gap-2 items-center tablet:items-start pl-5 relative ">
        <h1 className="big-screen:text-5xl laptop:text-4xl screen:text-3xl">✦ InSpace</h1>
        <div className="w-1/2 tablet:w-full">
          <Contact />
        </div>
        <img
          className="absolute left-0 translate-y-1/2 w-[50px] h-[50%] tablet:hidden"
          src={Image1}
          alt="code"
        />
      </div>
      <div className="relative tablet:hidden">
        <h1 className="big-screen:text-5xl laptop:text-3xl">Boarding Pass</h1>
        <div className="flex flex-col big-screen:gap-8 laptop:gap-4 justify-center pt-10">
          <h2 className="big-screen:text-4xl laptop:text-3xl screen:text-2xl">From:Houston</h2>
          <h2 className="big-screen:text-4xl laptop:text-3xl screen:text-2xl">To:Mars</h2>
          <h2 className="big-screen:text-4xl laptop:text-3xl screen:text-2xl">Date:15 December</h2>
          <h2 className="big-screen:text-4xl laptop:text-3xl screen:text-2xl">Time:12:00 PM</h2>
        </div>
        <div className="absolute bottom-0 flex gap-4">
            <a href="https://mobile.twitter.com/nasa" target="_blank" rel="noopener noreferrer"><span className="hover:text-cyan-400">Twitter</span></a>
            <a href="https://facebook.com/NASA/" target="_blank" rel="noopener noreferrer"><span className="hover:text-cyan-400">Facebook</span></a>
        </div>
      </div>
      <div className="">
        <img className="w-full h-full" src={Image} alt="astronaut" />
      </div>
    </div>
  );
});

export default Footer;
