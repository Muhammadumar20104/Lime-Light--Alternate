import React from "react";
import { Carousel } from "@material-tailwind/react";
import Pics from "../img/Europian.webp";
import Pics1 from "../img/Ladies.webp";
import Pics2 from "../img/mens.webp";
import Pics3 from "../img/Sale.webp";
import Pics4 from "../img/Heel.webp";
import Pics5 from "../img/Accessories.webp";
// import Pics6 from "../img/logo.svg";

function Slide() {
  return (
    <Carousel className="rounded-xl mt-5 ml-2  md:ml-8  h-[95%] w-[95%]">
      <img src={Pics} alt="image 1" />
      <img src={Pics1} alt="image 2"/>
      <img src={Pics2} alt="image 3"/>
      <img src={Pics3} alt="image 4"/>
      <img src={Pics4} alt="image 5"/>
      <img src={Pics5} alt="image 5"/>
      {/* <img src={Pics6} alt="image 5"/> */}


    </Carousel>
  );
}

export default Slide;
