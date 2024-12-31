import React from "react";
import HomePage from "../pages/homePage";
// import AboutPage from "../pages/aboutPage";
import LoginPage from "../pages/loginPage";
import MyOrderPage from "../pages/myOrderPage";
import ProductPage from "../pages/productPage";
import CartPage from "../pages/cartPage";

const Main = ()=>{
    return (
        <div>
            <HomePage/>
            <ProductPage/>
            <CartPage/>
            <LoginPage/>
            <MyOrderPage/>
            {/* <AboutPage/> */}

        </div>
    )
}
export default Main;