import React from 'react';
import Singlecart from './Singlecart';
import { Link } from 'react-router-dom';

const Cart = ({ cart, remove }) => {
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="p-4">
      {cart.length === 0 ? (
        <p className="text-center text-lg font-semibold mt-10">Your cart is empty</p>
      ) : (
        <>
          <div className="flex flex-wrap justify-center gap-6">
            {cart.map((car, index) => (
              <Singlecart key={index} car={car} remove={remove} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">
              Total Price: {totalPrice} Tk
            </h2>
            <Link
              to="/checkout"
              state={{ total: totalPrice }}
              className="bg-blue-500 px-4 py-2 text-white rounded hover:bg-blue-700 transition"
            >
              Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
