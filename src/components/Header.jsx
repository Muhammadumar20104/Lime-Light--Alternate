import { React, useContext } from "react";
import { FaWhatsappSquare } from "react-icons/fa";
import { AiOutlinePhone } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsPerson } from "react-icons/bs";
import { ImExit } from "react-icons/im";
import { BiSearch, BiCartAlt } from "react-icons/bi";
import Logo from "../img/logo.svg";
import { Link } from "react-router-dom";
import { ProductContext } from "./ProductContext";
function Header() {
  const { cartItems } = useContext(ProductContext);
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  return (
    <>
      <div className="sticky top-0 left-0 z-50">
        <div className="flex justify-between bg-black w-[100%] h-15 md:bg-black p-3">
          {/* //left */}
          <div className="flex md:hidden ">
            <GiHamburgerMenu className="text-4xl text-cyan-50 hover:text-gray-400 hover:cursor-pointer" />
          </div>
          <div className="hidden md:flex row-auto  items-center gap-3 ">
            <FaWhatsappSquare className="text-4xl text-green-600 bg-white" />
            <AiOutlinePhone className="text-4xl text-cyan-50 " />
            <div>
              <input
                className="w-30 h-7 bg-gray-100 rounded-md "
                type="text"
                placeholder="Search Here"
              />
            </div>
            <div className="text-gray-400 -ml-7">
              <BiSearch />
            </div>
          </div>

          {/* //center */}

          <div className="-ml-0 md:-ml-32">
            <Link to="/">
            <img src={Logo} alt="Try Again" className="w-60 mt-1 " />
            </Link>
          </div>

          {/* //right */}
          <div className="relative">
            <Link to="/cart">
              <BiCartAlt className="text-4xl flex cursor-pointer  text-cyan-50 " />
            </Link>
            {cartItems.length >= 1 && (
              <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
                {totalQuantity}
              </div>
            )}
          </div>
        </div>
        <div className=" bg-[#EEEEEE] flex md:justify-between items-center">
          {/* {left} */}
          <div>
            <BsPerson className="hidden md:text-3xl ml-2 md:flex  hover:cursor-pointer" />
          </div>

          {/* {center} */}
          <ul className="  flex w-full justify-between  md:w-fit md:justify-normal md:gap-12 mt-1 ml-4 mr-4 md:ml-16">
            <li className=" hover:cursor-pointer">WOMEN</li>
            <li className=" hover:cursor-pointer">GIRLS</li>
            <li className=" hover:cursor-pointer">MEN</li>
            <li className=" hover:cursor-pointer">ACCESSORIES</li>
            <li className="text-red-800  hover:cursor-pointer">SALE</li>
          </ul>
          {/* {right} */}
          <div className=" hidden md:flex mr-1 items-center">
            CheckOut{" "}
            <ImExit className="text-2xl mt-1 mr-1 ml-1  hover:cursor-pointer" />
          </div>
        </div>

        <div className=" flex bg-blue-gray-200 justify-between items-center h-8 md:hidden">
          <div className=" flex gap-3 items-center  ">
            <FaWhatsappSquare className="text-2xl text-green-600 bg-white ml-4 " />
            <AiOutlinePhone className="text-2xl text-black " />
            <BsPerson className=" text-2xl" />
          </div>
          <div className="flex ">
            <input
              className=" h-5  bg-white rounded-full border border-gray-950"
              type="text"
              placeholder=""
            />
            <div className="text-slate-950 ml-2">
              <BiSearch className="-ml-8 mt-1 " />
            </div>
          </div>

          <div className="flex items-center">
            PKR <ImExit className="text-1xl mt-1 mr-3 " />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
