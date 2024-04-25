import React from 'react';
import ProductData from '../ProductData';
import { Link, useNavigate } from 'react-router-dom';
import AddtoCart from '../Product/AddtoCart';

export default function Mobile() {

    const navigate = useNavigate();

    const handleProductClick = (productId) => {
        navigate('/mobiles/product/' + productId);
    };

    return (
        <div className='productList'>
            {
                ProductData.map((product, index) => (
                    <div className="card comman-sec" style={{ width: '18rem' }} key={index} onClick={() => handleProductClick(product.id)}>
                        <img className="card-img-top" src={product.thumbnail} alt={product.title} />
                        <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text">{product.price}</p>
                            <p className="card-text">{product.stock}</p>
                            <p className="card-text">{product.brand}</p>
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
    )
}
