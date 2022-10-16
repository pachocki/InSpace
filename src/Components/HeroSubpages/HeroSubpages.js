import React from 'react'

const HeroDestinations = (props) => {
  return (
    <div className={"flex flex-col justify-center items-center relative  w-full h-[100vh] overlay-bg overflow-hidden " + props.bg }>
      <h1 className="text-6xl text-center z-50 mobile:text-4xl mobile:font-semibold">{props.linetop}<br/>{props.linemidd}<br/>{props.linebottom}</h1>
      
    </div>
  )
}

export default HeroDestinations
