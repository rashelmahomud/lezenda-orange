import { Route, Routes } from "react-router-dom";
import Home from "./Compornents/Home/Home";
import Blogs from "./Compornents/Pages/Blogs";
import Services from "./Compornents/Pages/Product/Services";
import Shop from "./Compornents/Pages/Shop";
import Footer from "./Compornents/Shared/Footer";
import Header from "./Compornents/Shared/Header";
import DetailsService from "./Compornents/Pages/Product/DetailsService";
import ServiceThreeDetails from "./Compornents/Pages/Product/ServiceThreeDetails";
import ServiceThree from "./Compornents/Pages/ServiceThree";
import Product from "./Compornents/Pages/AllProduct/Product";
import { useEffect, useState } from "react";
import ProductDetails from "./Compornents/Pages/AllProduct/ProductDetails";
import Payment from "./Compornents/payment/Payment";
import Forbiden from "./Compornents/404/Forbiden";
import Cart from "./Compornents/cart/Cart";

function App() {
  const [theme, setTheme] = useState(false);
  const [cart, setCart] = useState([]); // this is a declared for a product cart adding.
  const [count, setCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0) //for the total product price


  useEffect(() => {
    setTheme(JSON.parse(window.localStorage.getItem("theme")));
  }, []);

  const handleThemeChange = () => {
    setTheme(!theme);
    window.localStorage.setItem("theme", !theme);
  };

  return (
    <div data-theme={theme && "my_dark"} className="pt-16">
      <Header
        handleThemeChange={handleThemeChange}
        theme={theme}
        cart={cart}
      ></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/shop" element={<Shop></Shop>}></Route>
        <Route path="/blog" element={<Blogs></Blogs>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route
          path="/detailsService/:detailsId"
          element={
            <DetailsService
              setCart={setCart}
              cart={cart}
              totalPrice={totalPrice}
              setTotalPrice={setTotalPrice}
              count={count}
              setCount={setCount}
            ></DetailsService>
          }
        ></Route>
        <Route
          path="/serviceThree"
          element={<ServiceThree></ServiceThree>}
        ></Route>
        <Route
          path="/serviceThree/serviceThreeDetails"
          element={<ServiceThreeDetails></ServiceThreeDetails>}
        ></Route>
        <Route path="/product" element={<Product></Product>}></Route>
        <Route
          path="/productDetails/:pdId"
          element={
            <ProductDetails setCart={setCart} setTotalPrice={setTotalPrice} cart={cart} totalPrice={totalPrice}></ProductDetails>
          }
        ></Route>
        <Route path="/paymentDetails" element={<Payment />}></Route>
        <Route
          path="/cart"
          element={<Cart cart={cart} setCart={setCart} setTotalPrice={setTotalPrice} totalPrice={totalPrice} count={count} />}
        ></Route>

        <Route path="*" element={<Forbiden />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
