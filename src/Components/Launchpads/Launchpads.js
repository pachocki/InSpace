import React from "react";
import useFetch from "../../Hooks/useFetch";
import Card from "../Card/Card";
import Loader from "../Loader/Loader";

const Launchpads = () => {
  const [data] = useFetch("https://api.spacexdata.com/v4/Launchpads");
  return (
    <div>
      {!data ? (
        <Loader />
      ) : (
        <div className=" flex flex-col items-center">
          <span className=" text-6xl text-center py-20 laptop:text-5xl tablet:w-full tablet:text-4xl  mobile:px-2">Launchpads</span>

          <div className="flex flex-wrap shrink-1 items-center justify-center gap-5 pb-20 mobile:px-2">
            {data.map(({ id, name, images, details }) => (
              <Card
              key={id}
                image={images.large[0]}
                name={name}
                title={name}
                text={details.substring(0, 90) + "..."}
                link={`/launchpads/${id}`}
                button="Read More ➜"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Launchpads;
