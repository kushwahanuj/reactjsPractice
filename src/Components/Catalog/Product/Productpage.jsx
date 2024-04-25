import React from "react";
import { useParams } from "react-router-dom";
import ProductData from "../ProductData";
import AddtoCart from "./AddtoCart";

export default function Productpage() {

    const { productId } = useParams();
    const thisProduct = ProductData.find(prod => prod.id === parseInt(productId));

    return (
        <>
            <div className="image-container">
                <span>
                    <img src={thisProduct.thumbnail} alt={thisProduct.brand} />
                </span>
            </div>
            <div className="product-detail">
                <div>
                    <h3 className="company-name">{thisProduct.brand}</h3>
                    <h3 className="product-name">{thisProduct.title}</h3>
                    <p className="product-info">
                        {thisProduct.description}
                    </p>
                </div>
                <div className="price">
                    <div className="price-info">
                        <h4 className="price">${thisProduct.price}</h4>
                    </div>
                </div>
                <div className="detail-bottom">
                    <div className="cart-container">
                        <AddtoCart />
                    </div>
                </div>
            </div>
        </>

    )
}
