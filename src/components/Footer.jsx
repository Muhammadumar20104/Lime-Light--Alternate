import React from "react";
import {
  AiFillYoutube,
  AiFillFacebook,
  AiOutlineCopyrightCircle,
} from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { RiVisaLine, RiMastercardLine } from "react-icons/ri";

function Footer() {
  return (
    <>
      <div className="justify-center  flex flex-wrap  gap-10 lg:gap-56 mb-2 mt-8 ">
        <div className="">
          <span className="text-lg  font-serif">CUSTOMER CARE</span>
          <ul className="text-sm ml-2 w-fit">
            <li className="md:w-fit   font-noto text-sm mt-2 hover:cursor-pointer">
              SHIPPING & HANDLING
            </li>
            <li className="md:w-fit font-noto text-sm mt-1  hover:cursor-pointer">
              EXCHANGE POLICY
            </li>
            <li className="md:w-fit font-noto text-sm mt-1 hover:cursor-pointer">
              ORDER CANCELLATION POLICY
            </li>
            <li className="md:w-fit font-noto text-sm mt-1 hover:cursor-pointer">
              PRIVACY POLICY
            </li>
            <li className="md:w-fit font-noto text-sm mt-1 hover:cursor-pointer font-">
              TERMS OF USE
            </li>
            <li className="md:w-fit font-noto text-sm mt-1 hover:cursor-pointer ">
              FAQ'S
            </li>
          </ul>
        </div>
        <div className="">
          <span className="text-lg font-serif">INFORMATION</span>
          <ul className="text-sm ">
            <li className="md:w-fit font-noto text-sm mt-2">ABOUT US</li>
            <li className="md:w-fit font-noto text-sm mt-1 hover:cursor-pointer">
              CONTACT US
            </li>
            <li className="md:w-fit font-noto text-sm mt-1 hover:cursor-pointer">
              CAREERS
            </li>
            <li className="md:w-fit font-noto text-sm mt-1 hover:cursor-pointer">
              STORE LOCATOR
            </li>
            <li className="md:w-fit font-noto text-sm mt-1 hover:cursor-pointer">
              LIMELIGHT TRENDS
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center gap-4 items-baseline ">
        <AiFillFacebook className="text-[40px]  text-light-blue-900 hover:cursor-pointer" />
        <BsInstagram className="text-[35px] text-red-600 hover:cursor-pointer" />
        <AiFillYoutube className="text-[40px]  text-red-800 hover:cursor-pointer" />
      </div>
      <div className="items-center flex flex-col mt-6 mb-4">
        <div className="text-gray-800 font-bold ">We Accept</div>
        <div className="flex flex-row gap-4 mt-5">
          <div>
            <RiVisaLine className="text-5xl text-indigo-900 border border-solid hover:cursor-pointer" />
          </div>
          <div>
            <RiMastercardLine className="text-5xl text-orange-500 border border-solid hover:cursor-pointer " />
          </div>
        </div>
      </div>
      <div className="flex justify-center text-xs mb-4 text-gray-600 ">
        <AiOutlineCopyrightCircle className="text-xs mt-[3px]" />
        2023, Limelightpk , Powered by Epinovus
      </div>
    </>
  );
}

export default Footer;
