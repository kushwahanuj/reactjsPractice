import React from 'react';
import banner from '../Assets/banner.png';
import ProductsList from './Catalog/ProductsList';
import '../style/home.css';
import "../style/productList.css";

export default function Home() {
    return (
        <>
            <div className="main-container">
                <div className="banner">
                    <img className='banner-img' src={banner} alt="banner" />
                </div>
                <ProductsList />
            </div>
        </>
    )
}
