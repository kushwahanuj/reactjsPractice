import React from 'react';
import ProductData from './ProductData';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import AddtoCart from './Product/AddtoCart';


export default function ProductsList() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
    };

    return (
        <>
            <div className='container-productlist comman-sec'>
                <h1>Tranding Products</h1>
                <div className='productList'>
                    {
                        ProductData.slice(0, 4).map((product, index) => (
                            <div className="card comman-sec" style={{ width: '18rem' }} key={index}>
                                <img className="card-img-top" src={product.thumbnail} alt={product.title} />
                                <div className="card-body">
                                    <h5 className="card-title">Product Name : {product.title}</h5>
                                    <p className="card-text">Product Price : {product.price}</p>
                                    <p className="card-text">Product Stock : {product.stock}</p>
                                    <p className="card-text">Product Brand : {product.brand}</p>
                                    <p className="card-text">{product.description}</p>
                                    <div className="btn">
                                        <AddtoCart />
                                        <Link className='btn btn-outline-primary btn-sm' to={`/mobiles/product/${product.id}`}>View Product</Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div >

            <div className='container-slider comman-sec'>
                <h1>Products you like</h1>
                <div className="slider">
                    <Slider {...settings}>
                        {
                            ProductData.map((product, index) => (
                                <div className="card comman-sec" style={{ width: '18rem' }} key={index}>
                                    <img className="card-img-top" src={product.thumbnail} alt={product.title} />
                                    <div className="card-body">
                                        <h5 className="card-title">Product Name : {product.title}</h5>
                                        <p className="card-text">Product Price : {product.price}</p>
                                        <p className="card-text">Product Stock : {product.stock}</p>
                                        <p className="card-text">Product Brand : {product.brand}</p>
                                        <p className="card-text">{product.description}</p>
                                        <div className="btn">
                                            <AddtoCart />
                                            <Link className='btn btn-outline-primary btn-sm' to={`/mobiles/product/${product.id}`}>View Product</Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </>
    )
}



