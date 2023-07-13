import React, { useState, useContext } from "react";
import Pics from "../img/UnStitched.webp";
import Pics1 from "../img/PRET.webp";
import Pics2 from "../img/Western.webp";
import Pics3 from "../img/WINTER.webp";
import Pics4 from "../img/BAGS.webp";
import Pics5 from "../img/FOOTWEAR.webp";
import Pics6 from "../img/ACCESSORIES2.webp";
import Pics7 from "../img/Child2.webp";
import Pics8 from "../img/WINTER2.webp";
import Pics9 from "../img/MAN.webp";
import TextOnImg from "../generic-components/TextOnImg";
import Card from "./Card";
import Slide from "./Slide";
import { ProductContext } from "./ProductContext";

function Home() {
  const products = [
    {
      id: 1,
      img: "https://cdn.shopify.com/s/files/1/2635/3244/files/CAM_4819_330x.jpg?v=1686571697",
      name: "Charm Anklet",
      price: 499,
      sale: 0,
      quantity:10
    },
    {
      id: 2,
      img: "https://www.limelight.pk/cdn/shop/files/CAM_4714_533x.jpg?v=1686571180",
      name: "Dobby Kurta",
      price: 2999,
      sale: 0,
      quantity:10
    },
    {
      id: 3,
      img: "https://www.limelight.pk/cdn/shop/files/CAM_3283_533x.jpg?v=1686742521",
      name: "Vintage Tote Bag",
      price: 3699,
      sale: 20,
      quantity:10
    },
    {
      id: 4,
      img: "https://www.limelight.pk/cdn/shop/files/CAM_5749_23beb38b-994a-454f-9580-fc1535b59d61_330x.jpg?v=1686922579",
      name: "2 Piece Lawn Suit-Pasted (Pret)",
      price: 5999,
      sale: 0,
      quantity:10
    },
    {
      id: 5,
      img: "https://www.limelight.pk/cdn/shop/files/DSC_5815_0861ef37-747d-4e58-a241-f5a7679e75b9_330x.jpg?v=1686208316",
      name: "Embellished Drop Earrings",
      price: 699,
      sale: 30,
      quantity:10
    },
    {
      id: 6,
      img: "https://www.limelight.pk/cdn/shop/files/CAM_4819_330x.jpg?v=1686571697",
      name: "Charm Anklet",
      price: 499,
      sale: 0,
      quantity:10
    },
    {
      id: 7,
      img: "https://www.limelight.pk/cdn/shop/files/CAM_2837_330x.jpg?v=1686308382",
      name: "Dobby Kurta",
      price: 2999,
      sale: 0,
      quantity:10
    },
    {
      id: 8,
      img: "https://www.limelight.pk/cdn/shop/files/DSC_5622_fcdf6297-e819-4f19-9000-6b1d61e40b75_330x.jpg?v=1686210622",
      name: "Vintage Tote Bag",
      price: 3699,
      sale: 20,
      quantity:10
    },
    {
      id: 9,
      img: "https://www.limelight.pk/cdn/shop/files/CAM_3732_3bc52853-d06c-47eb-9aa8-d2d1fc0502f9_330x.jpg?v=1686226224",
      name: "2 Piece Lawn Suit-Pasted (Pret)",
      price: 5999,
      sale: 0,
      quantity:10
    },
    {
      id: 10,
      img: "https://www.limelight.pk/cdn/shop/files/DSC_5769_56f7e8a8-2e8b-42ef-b892-6d5429888793_330x.jpg?v=1686210102",
      name: "Embellished Drop Earrings",
      price: 699,
      sale: 30,
      quantity:10
    },
    {
      id: 11,
      img: "https://cdn.shopify.com/s/files/1/2635/3244/files/CAM_4819_330x.jpg?v=1686571697",
      name: "Charm Anklet",
      price: 499,
      sale: 0,
      quantity:10
    },
    {
      id: 12,
      img: "https://www.limelight.pk/cdn/shop/files/CAM_4714_533x.jpg?v=1686571180",
      name: "Dobby Kurta",
      price: 2999,
      sale: 0,
      quantity:10
    },
    {
      id: 13,
      img: "https://www.limelight.pk/cdn/shop/files/CAM_3283_533x.jpg?v=1686742521",
      name: "Vintage Tote Bag",
      price: 3699,
      sale: 20,
      quantity:10
    },
    {
      id: 14,
      img: "https://www.limelight.pk/cdn/shop/files/CAM_5749_23beb38b-994a-454f-9580-fc1535b59d61_330x.jpg?v=1686922579",
      name: "2 Piece Lawn Suit-Pasted (Pret)",
      price: 5999,
      sale: 0,
      quantity:10
    },
    {
      id: 15,
      img: "https://www.limelight.pk/cdn/shop/files/DSC_5815_0861ef37-747d-4e58-a241-f5a7679e75b9_330x.jpg?v=1686208316",
      name: "Embellished Drop Earrings",
      price: 699,
      sale: 30,
      quantity:10
    },
    {
      id: 16,
      img: "https://www.limelight.pk/cdn/shop/files/CAM_4819_330x.jpg?v=1686571697",
      name: "Charm Anklet",
      price: 499,
      sale: 0,
      quantity:10
    },
    {
      id: 17,
      img: "https://www.limelight.pk/cdn/shop/files/CAM_2837_330x.jpg?v=1686308382",
      name: "Dobby Kurta",
      price: 2999,
      sale: 0,
      quantity:10
    },
    {
      id: 18,
      img: "https://www.limelight.pk/cdn/shop/files/DSC_5622_fcdf6297-e819-4f19-9000-6b1d61e40b75_330x.jpg?v=1686210622",
      name: "Vintage Tote Bag",
      price: 3699,
      sale: 20,
      quantity:10
    },
    {
      id: 19,
      img: "https://www.limelight.pk/cdn/shop/files/CAM_3732_3bc52853-d06c-47eb-9aa8-d2d1fc0502f9_330x.jpg?v=1686226224",
      name: "2 Piece Lawn Suit-Pasted (Pret)",
      price: 5999,
      sale: 0,
      quantity:10
    },
    {
      id: 20,
      img: "https://www.limelight.pk/cdn/shop/files/DSC_5769_56f7e8a8-2e8b-42ef-b892-6d5429888793_330x.jpg?v=1686210102",
      name: "Embellished Drop Earrings",
      price: 699,
      sale: 30,
      quantity:10
    },
  ];
  const [displayCount, setDisplayCount] = useState(12);
  const handleShowMore = () => {
    setDisplayCount(displayCount + 10);
  };
  const displayedData = products.slice(0, displayCount);
  return (
    <>
      <Slide />
      <hr />
      <section>
        <hr class="w-00px md:w-[700px]  h-1 mx-auto my-4 bg-black border-0 rounded md:my-10 dark:bg-gray-700 " />
        <h1 className="text-center mt-4 mb-8 font-bold">SHOP BY CATEGORY</h1>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 p-5">
          <div className="flex relative ">
            <img
              src={Pics}
              alt=""
              className="object-cover object-top overflow-y-visible md:w-[100%] mb-3 md:h-max rounded-lg"
            />
            <h1 class="flex justify-center items-end absolute text-3xl text-white bottom-10 right-0 left-0  m-auto ">
              UNSTITCHED
            </h1>
          </div>
          <div className="flex relative">
            <img
              src={Pics1}
              alt=""
              className="object-cover object-top overflow-y-visible md:w-[100%] mb-3 md:h-max rounded-lg"
            />
            <h1 class="flex justify-center items-end absolute text-3xl text-white bottom-10 right-0 left-0  m-auto">
              Pert
            </h1>
          </div>
          <div className="md:col-span-2 relative">
            <img src={Pics2} alt="" className=" mt-3  md: rounded-lg" />
            <h1 class="flex justify-center items-end absolute text-3xl text-Black bottom-4 right-auto left-3 md:text-bold m-auto">
              WESTREN
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 -mt-3 p-5 md:grid md:grid-cols-4 md:gap-3 md:p-5">
          <TextOnImg
            classN="hidden md:col-span-1 md:block md:relative"
            Text="Winter"
            imgSrc={Pics3}
            hStyle="flex justify-center items-end absolute text-1xl text-white bottom-4 right-4 left-4 md:text-2xl top-auto m-auto"
          />
          <TextOnImg
            classN="hidden md:col-span-1 md:block relative"
            Text="BAGS"
            imgSrc={Pics4}
            hStyle="flex justify-center items-center absolute text-1xl text-white bottom-4 right-4 left-4 md:text-2xl top-auto m-auto"
          />
          <TextOnImg
            classN="  md:col-span-1 relative"
            Text="FOOTWEAR"
            imgSrc={Pics5}
            hStyle="flex justify-center item-center absolute text-1xl text-black  font-bold bottom-4 right-6 left-8 md:text-2xl top-auto m-auto"
          />
          <TextOnImg
            classN=" md:col-span-1 relative"
            Text="ACCESSORIES"
            imgSrc={Pics6}
            hStyle="flex justify-center items-end absolute text-1xl text-white bottom-4 md:text-2xl right-6 left-8 top-auto m-auto"
          />
        </div>
        <div className="-mt-4 md:grid grid-cols-2 gap-4 p-5">
          <div className="relative">
            <img
              src={Pics7}
              alt=""
              className=" object-cover mb-3 md:h-max rounded-lg  "
            />
            <h1 class="flex  justify-end items-end absolute text-1xl text-white bottom-10 font-bold left-4 sm:left-2 md:justify-center md:items-end md:text-center md:inset-0 md:bottom-10 md:text-2xl m-auto">
              GIRLS
            </h1>
            <h1 class="flex  justify-end items-end absolute text-1xl text-white bottom-10 font-bold right-6  sm:right-8 md:right-1   m-auto">
              <h1 class="flex  justify-end items-end absolute text-1xl text-white bottom-10 font-bold  sm:left-26  m-auto">
                PERT
              </h1>
              ACCESSORIES
            </h1>
          </div>
          <div className="relative ">
            <img
              src={Pics9}
              alt=""
              className="  object-fill object-top rounded-lg mb-3 md:h-max"
            />
            <h1 class="flex  justify-end items-end absolute text-2xl text-white bottom-10 font-bold right-20   m-auto">
              MANS
            </h1>
          </div>
          <div className="relative flex md:hidden col-span-2 ">
            <img
              src={Pics8}
              alt=""
              className="  object-fill object-top h-44 w-[100%] rounded-lg    "
            />
            <h1 class="flex  justify-end items-end absolute text-2xl text-white bottom-10 font-bold right-20   m-auto">
              WINTER
            </h1>
          </div>
        </div>
      </section>
      <h1 className="text-center mt-4 mb-8 font-bold">Shop by Product</h1>
      <div className="grid grid-cols-2 gap-3 -mt-3 p-5 md:grid md:grid-cols-3 lg:grid-cols-4 md:gap-3 md:p-2">
        {displayedData.map((item) => {
          return (
            <Card
              name={item.name}
              img={item.img}
              sale={item.sale}
              price={item.price}
              item={item}
            />
          );
        })}
      </div>
      <div className="flex justify-center">
        {displayedData.length < products.length && (
          <button
            className="bg-black hover:bg-green-700 text-white mb-3 py-2 px-4 rounded mt-4"
            onClick={handleShowMore}
          >
            Show More
          </button>
        )}
      </div>
    </>
  );
}

export default Home;
