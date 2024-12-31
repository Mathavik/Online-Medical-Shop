import React from "react";
import './productPage.css'
import AyurvedaProducts from "../components/products/products";
import ColdProducts from "../components/products/cold/coldProducts";
const ProductPage = ()=>{
    return (
        <div className="productpage-container">
            
            <div className="product-heading">
               <h3>Our Available Products</h3>
            </div>   
            <div className="productPage-products-content">
                <div className="ayurvethaproduct-content">
                    <AyurvedaProducts />
                </div> 
                <div className="ayurvethaproduct-content">
                    <ColdProducts/>
                </div> 
            </div>
        </div>
    )
}
export default ProductPage;