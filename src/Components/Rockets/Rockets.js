import React from 'react'
import useFetch from '../../Hooks/useFetch'
import Card from "../Card/Card"
import Loader from "../Loader/Loader"



const Rockets = () => {
    const [data] = useFetch("https://api.spacexdata.com/v4/rockets")
  return (
    <div>
      {!data ? (
        <Loader/>
      ) : (
        <div className=" flex flex-col items-center">
          <span className=" text-6xl text-center py-20 laptop:text-5xl  mobile:px-2">Rockets</span>

          <div className="flex flex-wrap shrink-1 items-center justify-center px-2 gap-5">
            {data.map(({ id, name, flickr_images, description }) => (
               <Card 
               key={id}
               image={flickr_images[0]}
               name={name}
               title={name}
               text={description.substring(0,85) + "..."}
               link={`/rockets/${id}`}
               button="Read More ➜"
               />
                
             
            ))}
          </div>
        </div>
      )}

  </div>
  )
}

export default Rockets
