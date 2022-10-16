import HeroSubpages from "../Components/HeroSubpages/HeroSubpages"
import Image from "../Assets/images/laboratory.jpg"
import Rockets from "../Components/Rockets/Rockets"
import Launchpads from "../Components/Launchpads/Launchpads"
import Footer from "../Components/Footer/Footer"
import ScrollTop from "../Components/ScrollTop/ScrollTop"




const Technology = () => {

  return (
    <div className="bg-black/40 backdrop-blur-xl">
        <HeroSubpages
        bg="hero technology"
        linetop="Future of Space"
        linemidd="Technology is Here"
        />
        <div className="flex flex-col justify-between">
      <h2 className="text-center text-6xl py-40 big-screen:w-[90%] m-auto laptop:text-5xl screen:text-4xl tablet:text-3xl tablet:w-full tablet:py-20 mobile:text-2xl mobile:px-2">InSpace designs , manufactures and lauches the world's most advanced rocket and spacecraft</h2>
      <img src={Image} className="h-[50vh] object-cover" alt="laboratory"/>
      </div>
      <div className="pt-20 flex items-center justify-center ">
        <span className="text-6xl text-center laptop:text-5xl screen:text-4xl tablet:text-3xl tablet:w-full  mobile:text-3xl mobile:px-2">We are proud to present you <br/> our latest achievements.</span>
      </div>
      <Rockets/>
      <Launchpads/>
      <ScrollTop/>
      <Footer/>
      
    </div>

  )
}

export default Technology
