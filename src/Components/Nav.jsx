import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa6';

const Nav = ({ count }) => {
  const [bar, setBar] = useState(false);

  function batton() {
    setBar(!bar);
  }

  return (
    <div className='bg-gray-700 text-white w-full'>
      <div className='flex justify-between items-center flex-wrap h-auto px-6 md:px-16 py-4'>
        {/* Logo and Hamburger Icon in a Flexbox container */}
        <div className='flex justify-between items-center w-full md:w-auto'>
          <h1 className='text-xl font-bold whitespace-nowrap'>Alim e-SHOP</h1>

          {/* Hamburger Icon for Mobile */}
          <div className='md:hidden text-2xl cursor-pointer' onClick={batton}>
            <FaBars />
          </div>
        </div>

        {/* Desktop Nav Links */}
        <div className='hidden md:flex gap-10 items-center'>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/cart" className='flex'>
            <FaShoppingCart />
            <div className='rounded-2xl bg-red-500 h-5 w-5 flex justify-center items-center ml-2'>{count}</div>
          </Link>
        </div>
      </div>

      {/* Mobile Nav Links */}
      {bar && (
        <div className='flex flex-col gap-4 px-6 py-4 md:hidden bg-gray-800'>
          <Link to="/" onClick={() => setBar(false)}>Home</Link>
          <Link to="/shop" onClick={() => setBar(false)}>Shop</Link>
          <Link to="/about" onClick={() => setBar(false)}>About</Link>
          <Link to="/contact" onClick={() => setBar(false)}>Contact</Link>
          <Link to="/cart" onClick={() => setBar(false)}>
            <div className='flex items-center gap-2'>
              <FaShoppingCart /> Cart
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Nav;
