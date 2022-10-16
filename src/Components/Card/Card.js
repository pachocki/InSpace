import React from "react";
import { Link } from "react-router-dom"


const ServicesCard = (props) => {
  return (
    <div>
      <div className='max-w-sm  bg-white rounded-lg object-fit border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mb-4  transform transition duration-500 hover:scale-105 pb-5'>
        <img
          className={"rounded-t-lg w-full h-[300px] " + props.layout}
          src={props.image}
          alt={props.name}
        />

        <div className="p-[5px]">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white tablet:text-xl">
            {props.title}
          </h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {props.text}
          </p>
          <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            {props.more}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {props.desc}
          </p>
          <Link to={props.link}
      
            className="inline-flex items-center py-1 text-sm font-medium text-center text-white hover:opacity-50"
          >
            {props.button} 
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
