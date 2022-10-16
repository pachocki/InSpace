import React from "react";
import Image from "../../Assets/images/window.webp";
import Marquee from "react-fast-marquee";

const Sentence = () => {
  return (
    <>
      <div className=" flex justify-center items-center py-40 mobile:pt-0 mobile:pb-20">
        <p className="big-screen:text-8xl laptop:text-6xl screen:text-5xl tablet:text-4xl font-bold width-[90%] text-center mobile:text-2xl mobile:w-full">
          That's one small step for a man,
          <br /> one giant leap for mankind.
        </p>
      </div>
      <div className="relative parallax mb-40">
        <img
          className="z-20 h-fit w-full screen:h-[80vh] mobile:w-[100%] mobile:h-[60vh] object-cover "
          src={Image}
          alt="space"
        />
        <Marquee
          className="bg-black py-8"
          pauseOnHover
          speed={25}
          gradient={false}
        >
          <h1 className="big-screen:text-4xl tablet:text-2xl mobile:text-xl px-2">
            {" "}
            ✱ NEXT FLIGHT : 15 DECEMBER 2022 ✱ FROM HOUSTON ✱ DESTINATION MARS ✱
            ALL INCLUSIVE ✱ PRICE 25 mln ${" "}
          </h1>
        </Marquee>
      </div>
    </>
  );
};

export default Sentence;
