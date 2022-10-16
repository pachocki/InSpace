import React from 'react'
import HeroSubpages from "../Components/HeroSubpages/HeroSubpages"
import Footer from "../Components/Footer/Footer"

const  Contact = () => {
  return (
    <div className="bg-black/40 backdrop-blur-xl">
        <HeroSubpages
        bg="hero contact"
        linetop="Home"
        linemidd="Sweet"
        linebottom="Home"
        />
        <div className="flex py-20 tablet:flex-col tablet:gap-10">
            <div className="flex flex-col gap-2 big-screen:w-1/2  justify-center px-10 text-2xl screen:px-5 tablet:w-full tablet:items-center tablet:text-3xl mobile:text-xl mobile:px-1">
                <span>Adres: Houston, TX 77058</span>
                <span>1601 E Pkwy</span>
                <span>Tel:+1 288-255-2100</span>
                <span>E-Mail:InSpace@gmail.com</span>
            </div>
            <div className="w-1/2 tablet:w-full">
            <iframe
              title="home"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1583576.2424160778!2d-94.79468082863339!3d29.52545418291269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86409d00c061992d%3A0x13f0aac92fd5f916!2sSpace%20Center%20Houston!5e0!3m2!1spl!2sno!4v1665939657677!5m2!1spl!2sno" 
              width="100%"
              height="500px"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              className="tablet:h-[50vh]"
            />
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Contact