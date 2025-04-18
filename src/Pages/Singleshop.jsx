import React from 'react';

const Singleshop = ({ product, addtocart }) => {
  const { id, name, img, price } = product;

  return (
    <div className="w-[90%] sm:w-72 md:w-80 border rounded-xl p-4 shadow-lg transition-all hover:scale-[1.02]">
      <img src={img} alt={name} className="w-full h-48 object-cover rounded-md" />
      <h3 className="mt-2 text-lg sm:text-xl font-semibold">{name}</h3>
      <p className="text-sm sm:text-base mt-1">Price: {price} Tk</p>
      <button
        className="mt-4 bg-green-600 text-white px-4 py-2 rounded w-full hover:bg-green-800 transition"
        onClick={() => addtocart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Singleshop;
