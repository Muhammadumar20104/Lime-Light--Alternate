import React, { useContext} from "react";

import { ProductContext } from "./ProductContext";

function Card({ img, price, sale, name,item }) {
  const { addToCart } = useContext(ProductContext);
  return (
    <>
      <div className="max-w-fit ml-4   rounded overflow-hidden  p-1 ">
        <section className="relative group">
          <img
            className="   md:w-96 md:h-64 md:object-top md:object-cover "
            src={img}
            alt="Product Image"
          />
          {sale > 0 && (
            <div className="absolute top-0 left-0 m-2 bg-red-900 text-sm text-white py-0 px-2 rounded">
              {sale}%OFF
            </div>
          )}
          <a
            className="hidden md:block  md:absolute md:top-48 md:left-1/2 md:transform md:-translate-x-1/2 md:cursor-pointer md:-translate-y-1/2 md:bg-black hover:bg-black text-white  md:py-2 md:px-4 md:rounded-lg md:opacity-0 md:group-hover:opacity-100 "
            onClick={() => addToCart(item)}
          >
            ADD TO CART
          </a>
          <div className="group-hover:underline font-serif  ">{name}</div>

          <div className="flex flex-row gap-2 items-baseline  font-display">
            {sale > 0 && (
              <div className="line-through text-sm">
                Rs. {(sale * price) / 100}
              </div>
            )}
            Rs.{price}
          </div>
        </section>
      </div>
    </>
  );
}
export default Card;
