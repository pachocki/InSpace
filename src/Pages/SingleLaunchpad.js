import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../Components/Loader/Loader";
import Footer from "../Components/Footer/Footer";

const SingleLaunchpad = () => {
  const [singleLaunchpad, setSingleLaunchpad] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchSingleLaunchpad = async () => {
      const res = await fetch(`https://api.spacexdata.com/v4/launchpads/${id}`);
      const data = await res.json();
      setSingleLaunchpad(data);
    };
    fetchSingleLaunchpad();
  }, [id]);

  return (
    <>
      {!singleLaunchpad ? (
        <Loading />
      ) : (
        <div className="  w-full flex big-screen:pb-20 tablet:pb-0 tablet:mb-0 screen:flex-col-reverse screen:w-full screen:h-full h-full  bg-black/40 backdrop-blur-xl">
          <div className=" h-full big-screen:pl-5 pr-2 big-screen:pt-40 big-screen:pb-20  big-screen:w-1/3 laptop:pl-5 laptop:w-1/2 screen:pt-20 screen:pb-0   screen:w-full tablet:pt-10 tablet:pb-20 tablet:px-5 mobile:px-2 mobile:pt-5 flex flex-col justify-center">
            <h1 className="text-4xl  screen:text-3xl tablet:text-3xl">
              {singleLaunchpad.full_name}
            </h1>

            <h2 className="capitalize text-2xl laptop:text-2xl screen:text-lg  mt-2  screen:font-light">
              Type: {singleLaunchpad.name}
            </h2>
            <h2 className="text-2xl screen:text-lg mt-2  mb-8   mobile:text-lg">
              Launch Attempts: {singleLaunchpad.launch_attempts}
            </h2>

            <div className="grid  gap-5 mobile:gap-3 grid-cols-2 ">
              <ul>
                <li>Launch Attempts: {singleLaunchpad.launch_attempts}</li>
                <li>Successful Launches: {singleLaunchpad.launch_successes}</li>
                {singleLaunchpad.status === "active" ? (
                  <li className="text-green-400">Active</li>
                ) : (
                  <li className="text-red-600">Inactive</li>
                )}
              </ul>

              <ul>
                <li>Locality: {singleLaunchpad.locality}</li>
                <li>Region: {singleLaunchpad.region}</li>
              </ul>
            </div>

            <p className="text-xl mt-5 screen:text-lg">
              {singleLaunchpad.details}
            </p>

            <ul className="flex  items-center justify-start gap-20 mt-10 screen:gap-10   mobil:justify-center ">
              <li>
                <a
                  href={singleLaunchpad.wikipedia}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>Wikipedia</button>
                </a>
              </li>
              <li>
                <Link to="/technology">
                  <button>Back</button>
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full big-screen:w-2/3 laptop:w-1/2  screen:w-full   relative overlay-technology">
            <img
              src={singleLaunchpad.images.large[0]}
              alt={singleLaunchpad.name}
              className="h-full w-full mobile:h-[50vh]"
            />
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default SingleLaunchpad;
