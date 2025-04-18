import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Checkout = () => {
  const location = useLocation();
  const total = location.state?.total || 0;

  const [paymentMethod, setPaymentMethod] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleInputChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleShippingSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.address) {
      alert("Please fill in all shipping details.");
      return;
    }

    alert("Shipping information added successfully!");
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.address) {
      alert("Please fill in all shipping details.");
      return;
    }

    if (!paymentMethod) {
      alert("Please select a payment method.");
      return;
    }

    alert(`Order completed successfully!\nTotal: ${total} Tk`);
  };

  return (
    <div className='flex flex-col lg:flex-row justify-around p-5'>
      {/* Shipping Info */}
      <div className='h-auto w-96 bg-black p-5 rounded'>
        <h1 className='text-white text-2xl font-bold text-center mb-5'>Shipping Information</h1>
        <form onSubmit={handleShippingSubmit}>
          <div className='mb-4'>
            <label className='text-white block'>Name:</label>
            <input
              name="name"
              type='text'
              value={formData.name}
              onChange={handleInputChange}
              className='w-full bg-gray-300 rounded p-2'
            />
          </div>
          <div className='mb-4'>
            <label className='text-white block'>Email:</label>
            <input
              name="email"
              type='email'
              value={formData.email}
              onChange={handleInputChange}
              className='w-full bg-gray-300 rounded p-2'
            />
          </div>
          <div className='mb-4'>
            <label className='text-white block'>Phone:</label>
            <input
              name="phone"
              type='number'
              value={formData.phone}
              onChange={handleInputChange}
              className='w-full bg-gray-300 rounded p-2'
            />
          </div>
          <div className='mb-4'>
            <label className='text-white block'>Address:</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className='w-full bg-gray-300 rounded p-2 h-20'
            />
          </div>
          <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>
            Submit Shipping Info
          </button>
        </form>
      </div>

      {/* Payment Info */}
      <div className='h-auto w-96 bg-black p-5 rounded mt-10 lg:mt-0'>
        <h1 className='text-white text-2xl font-bold text-center mb-5'>Payment</h1>
        <h2 className='text-white text-center mb-5'>Total from Cart: {total} Tk</h2>

        <div className='text-white'>
          <p>Select Payment Method:</p>
          <div className='mt-3 space-y-2'>
            <label className='block'>
              <input
                type='radio'
                name='payment'
                value='Cash on Delivery'
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <span className='ml-2'>Cash on Delivery</span>
            </label>
            <label className='block'>
              <input
                type='radio'
                name='payment'
                value='Credit/Debit Card'
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <span className='ml-2'>Credit/Debit Card</span>
            </label>
            <label className='block'>
              <input
                type='radio'
                name='payment'
                value='bKash/Nagad'
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <span className='ml-2'>bKash / Nagad</span>
            </label>
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className='w-full bg-green-500 text-white p-2 rounded mt-5 hover:bg-green-600'
        >
          Submit Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;
