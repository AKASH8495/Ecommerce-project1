import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    // Update the total amount to consider the quantity of each item
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0));
  }, [cart]);

  const handleCheckout = () => {
    // Add your checkout logic here
    console.log("Checkout button clicked!");
  };

  return (
    <div className="flex flex-col justify-center items-center">
      {cart.length > 0 ? (
        <div>
          <div>
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>

          <div>
            <div className="lg:ml-[150px] sm:ml-[120px]">
              <p className="font-bold text-gray-600">Total Amount: ${totalAmount}</p>
              <button
                className="font-bold bg-green-500 text-white mt-5 rounded-md p-2 px-8"
                onClick={handleCheckout}
              >
                Checkout now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center mt-[250px]">
          <h1 className="font-bold text-gray-600 text-2xl">Cart Empty</h1>
          <Link to="/">
            <button className="font-bold bg-green-600 text-1xl p-2 px-7 text-white mt-4 rounded-md">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
