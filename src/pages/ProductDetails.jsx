import React, { useEffect, useState } from "react";
import starIcons from "../starIcon.png";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add } from "../redux/Slices/cartSlice";
import toast from "react-hot-toast";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex font-bold text-2xl justify-center items-center mt-[250px]">
        Loading...
      </div>
    );
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  function handleAddToCart() {
    dispatch(add(product));
    toast.success("Item added to cart");
  }

  return (
    <div className="lg:max-w-[600px] max-w-[400px] shadow-lg border-2 rounded-md bg-gray-300 lg:mx-auto sm:mx-auto flex m-10 items-center mt-10 lg:px-0 sm:px-4">
      {/* Left side content */}
      <div className="flex gap-10 ">
       
        {/* Main image */}
        <div className="flex items-center">
          <img
            src={product.image}
            alt=""
            className="w-[400px]  bg-gray-800 rounded"
          />
        </div>
      </div>

      {/* Right side content */}
      <div className="flex flex-col ml-10 mt-[8px]">
        <h1 className="font-bold text-2xl text-gray-700">{product.title.split(" ").slice(0, 5).join(" ") + "..."}</h1>
        <div className="flex items-center mt-[8px] gap-[5px] ">
          <img src={starIcons} alt="rating" className="w-[70px] font-semibold" />
        </div>
        <p className="font-bold text-green-500 mb-5">${product.price}</p>
        <p className="font-semibold text-gray-500 mb-5">{product.description.split(" ").slice(0, 10).join(" ") + "..."}</p>

        <div className="flex gap-4 items-center ">
          <button className="  text-center w-[150px] mt-5 rounded-md p-2 text-sm bg-green-500 mb-3 px-1 py-2 text-white font-bold" onClick={handleAddToCart}>
            ADD TO CART
          </button>

          
          
        </div>
        
      </div>
    </div>
  );
};

export default ProductDetails;
