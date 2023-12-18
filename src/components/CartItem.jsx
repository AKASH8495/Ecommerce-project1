import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { remove, updateQuantity } from '../redux/Slices/cartSlice';
import { toast } from 'react-hot-toast';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(item.quantity || 1);

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error('Item Removed');
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
    dispatch(updateQuantity({ id: item.id, quantity: quantity + 1 }));
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      dispatch(updateQuantity({ id: item.id, quantity: quantity - 1 }));
    }
  };

  return (
    <div className='flex flex-col lg:max-w-[500px] sm:max-w-[400px] p-4 rounded-lg shadow-lg border border-b-gray-600 mt-5 mb-10 lg:px-0 sm:px-4'>
      <div className='flex items-center'>
        <div className='mr-5'>
          <img src={item.image} className='lg:w-[400px] h-auto' alt='ProductImg' />
        </div>

        <div className='flex flex-col flex-grow'>
          <div className='mb-2'>
            <h1 className='text-gray-700 text-lg font-bold'>
              {item.title.split(' ').slice(0, 10).join(' ') + '...'}
            </h1>
            <p className='text-gray-500 '>{item.description.split(' ').slice(0, 10).join(' ') + '...'}</p>
          </div>

          <div className='flex justify-between items-center mb-5 '>
            <div className='flex items-center mt-4'>
              <p className='text-lg font-semibold text-green-500 mr-5'>${item.price}</p>
              <div className='flex items-center'>
                <button onClick={decreaseQuantity} className='bg-gray-300 rounded-full p-2 text-black  transition-all duration-300 '>
                  -
                </button>
                <p className='mx-2'>Qty {quantity}</p>
                <button onClick={increaseQuantity} className='bg-gray-300 rounded-full p-2 text-black  transition-all duration-300 '>
                  +
                </button>
              </div>
              <div onClick={removeFromCart} className='cursor-pointer ml-6'>
                <h1 className='bg-red-300 rounded-full p-2 text-black  transition-all duration-300 '>Delete</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
