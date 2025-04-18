

import { ToastContainer, toast } from 'react-toastify';
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import { useState } from "react";
import Shop from './Pages/Shop';
import Checkout from './Pages/Checkout';
function App() {
 const [cart,setCart]=useState([])
 const [count,setCount]=useState(0)
  const addtocart=(product)=>{
    toast("cart added")
    const  newcart=[...cart,product]
    setCart(newcart)
    setCount(count+1)
  }
  const remove=(id)=>{
    toast("card removed")
    const brandnewcart=cart.filter(product=> product.id !==id)
    setCart(brandnewcart)
    setCount(count-1)
  }

  return (
    <div>
      <BrowserRouter>
   <Nav count={count}/>
      <Routes>
        <Route path="/" element={<Home addtocart={addtocart} />}> </Route>
        <Route path="/shop" element={<Shop addtocart={addtocart}></Shop>}> </Route>
        <Route path="/shop/:category" element={<Shop addtocart={addtocart}></Shop>}> </Route>
        <Route path="/About" element={<About/>}> </Route>
        <Route path="/Contact" element={<Contact/>}> </Route>
        <Route path="/checkout" element={<Checkout></Checkout>}> </Route>
      
        <Route path="/Cart" element={<Cart  cart={cart} remove={remove} />}> </Route>
      </Routes>
      <Footer/>
      <ToastContainer />
     
      </BrowserRouter>
    </div>
      
  )
}

export default App
