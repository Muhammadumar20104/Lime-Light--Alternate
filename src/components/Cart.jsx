import React, { useState, useContext } from "react";
import Pics9 from "../img/Glasses.webp";
import { AiFillDelete } from "react-icons/ai";
import { ProductContext } from "./ProductContext";

function Cart() {
  const { cartItems, incrementQuantity, decreamentQuantity } =
    useContext(ProductContext);
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const [count, setCount] = useState(1);
  const handleIncrement = () => {};
  const handleDecrement = () => {
    setCount(count - 1);
  };
  const calculateTotalPrice = (item) => {
    return item.quantity * item.price;
  };
  return (
    <>
      <h1 className="text-center mt-4 mb-8 font-bold">SHOPPING CART</h1>
      <div className="grid grid-cols-3 p-4 gap-2 ">
        <div className="col-span-2 right-4 w-[100%] p-2 border border-gray-600 h-auto">
          {cartItems.map((item) => (
            <div className="grid grid-cols-3 p-5">
              <div className="col-span-1 flex justify-center">
                <img
                  src={item.img}
                  alt=""
                  className="w-[70%] h-44  object-top"
                />
              </div>
              <div className="col-span-2 ">
                <div className="flex flex-wrap w-[100%] justify-between mt-5">
                  <div className="font-bold">{item.name}</div>
                  <div className="font-bold">Rs.{item.price}</div>
                </div>
                <div className=" flex flex-wrap mt-2">{item.id}</div>
                <div className="flex flex-wrap justify-between mt-5">
                  <div className="flex flex-wrap  w-fit rounded border border-blue-gray-900">
                    <button
                      className="rounded  w-8 border border-gray-700"
                      onClick={() => incrementQuantity(item.id)}
                    >
                      +
                    </button>
                    <p className="w-8 ml-4 mt-1 ">{item.quantity}</p>
                    {item.quantity >= 1 && (
                      <button
                        className="rounded  w-8 border border-gray-700"
                        onClick={() => decreamentQuantity(item.id)}
                      >
                        -
                      </button>
                    )}
                  </div>
                  <div className="">
                    <AiFillDelete />
                  </div>
                </div>
                <div className="flex flex-wrap mt-5 justify-between">
                  <div className="font-bold text-sm">Item Total</div>
                  <div className="font-bold ">
                    Rs.{calculateTotalPrice(item)}
                    {/* Rs {item.price * item.quantity} */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="h-full">
          <div className="flex flex-row">Order Notes</div>
          <div className="flex flex-row">
            <textarea className=" mt-2  z-20 h-fit w-full border border-gray-300 rounded-lg px-4 py-2 resize-y "></textarea>
          </div>
          <div className="text-blue-gray-300 text-sm mt-2">
            PLEASE LEAVE SPECIAL INSTRUCTIONS ABOVE
          </div>
          <hr className="mt-5" />
          <div className="flex flex-wrap justify-between mt-5">
            <div className="font-bold">SubTotal</div>
            <div className="font-bold">Rs 4999</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
