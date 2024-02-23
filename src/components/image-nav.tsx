"use client";

import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export default function ImageNav({ images }) {

    const slideLeft = () => {
      var slider = document.getElementById("slider")
      slider.scrollLeft = slider.scrollLeft - 400
    }

    const slideRight = () => {
      var slider = document.getElementById("slider")
      slider.scrollLeft = slider.scrollLeft + 400
    }
  return (
    <div className="relative flex items-center">
      <MdChevronLeft className="opacity-50 cursor-pointer hover:opacity-100 invisible lg:visible" size={40} onClick={slideLeft}/>
      <div id="slider" className="overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide">
        
        {images.map((item) => (
          <a href="https://google.com">
          <img
            className="lg:max-h-[45rem] lg:max-w-[45rem] max-w-[30vh] max-h-[30vh] size-auto inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
            src={item.img}
            alt=""
          ></img>
        </a>
        ))}
        
      </div>
      <MdChevronRight className="opacity-50 cursor-pointer hover:opacity-100" size={40} onClick={slideRight}/>
    </div>
  );
}
