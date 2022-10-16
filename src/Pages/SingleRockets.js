import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../Components/Loader/Loader";
import Footer from "../Components/Footer/Footer";

const SingleRockets = () => {
  const [singleRocket, setSingleRocket] = useState(null);
  const [value, setValue] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchSingleRocket = async () => {
      const res = await fetch(`https://api.spacexdata.com/v4/rockets/${id}`);
      const data = await res.json();
      setSingleRocket(data);
    };
    fetchSingleRocket();
  }, [id]);

  return (
    <>
      {!singleRocket ? (
        <Loading />
      ) : (
        <div className=" w-full flex  screen:pb-20 screen:flex-col-reverse screen:w-full screen:h-full h-[100vh]  bg-black/40 backdrop-blur-xl ">
          <div className="big-screen:pl-5 pr-2 big-screen:pt-40 big-screen:w-1/3 laptop:px-5 laptop:w-1/2  h-full screen:w-full screen:pt-10  mobile:px-2 mobile:pt-5 flex flex-col justify-center">
            <h1 className="text-6xl laptop:text-5xl screen:text-4xl">
              {singleRocket.name}
            </h1>

            <h2 className="capitalize text-3xl laptop:text-2xl screen:text-xl  mt-2 ">
              Type: {singleRocket.type}
            </h2>
            <h2 className="big-screen:text-2xl  screen:text-xl mt-2  mb-8  mobile:text-lg">
              First Flight Date: {singleRocket.first_flight}
            </h2>

            <div className="grid  gap-2 mobile:gap-3 grid-cols-2 ">
              <ul>
                <li>
                  Cost per launch:{" "}
                  {singleRocket.cost_per_launch.toLocaleString()} USD
                </li>
                <li>Company: {singleRocket.company}</li>
                <li>Success Rate: {singleRocket.success_rate_pct}%</li>
                {singleRocket.active ? (
                  <li className="text-green-400">Active</li>
                ) : (
                  <li className="text-red-600">Inactive</li>
                )}
              </ul>

              <ul>
                <li>Country: {singleRocket.country}</li>
                <li>Stages: {singleRocket.stages}</li>

                <li>Height: {singleRocket.height.meters}m</li>
                <li>Diameter: {singleRocket.diameter.meters}m</li>
                <li>Mass: {singleRocket.mass.kg.toLocaleString()}kg</li>
              </ul>
            </div>

            <p className="text-xl mt-5 screen:text-lg">
              {singleRocket.description}
            </p>

            <ul className="flex items-center justify-start gap-20 mt-10 screen:gap-10  mobil:justify-center">
              <li>
                <a
                  href={singleRocket.wikipedia}
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

          <div className="w-full big-screen:w-2/3 laptop:w-1/2  screen:w-full  relative overlay-technology">
            <img
              src={
                singleRocket.flickr_images[value] ||
                singleRocket.flickr_images[0]
              }
              alt={singleRocket.name}
              className="w-full h-full  big-screen:object-cover  mobile:h-[50vh]  tablet:rounded-none z-100  "
            />

            <ul className="flex flex-wrap items-center justify-start gap-3 mt-5 w-full screen:px-5 mobile:px-2 z-100">
              {singleRocket.flickr_images.map((image, index) => (
                <li
                  key={index}>
                  <img src={image} alt={singleRocket.name} className="w-20" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default SingleRockets;
