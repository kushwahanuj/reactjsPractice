import React from 'react';
import banner from '../Assets/banner.png';
import '../style/about.css';

export default function About() {
    return (
        <>

            <div class="container comman-sec ">
                <h1 className='text-center text-uppercase fw-bold'>About Us</h1>
                <hr className="w-25 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
                <div class="row comman-sec ">
                    <div class="col-sm">
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor enim a illum magnam. Veritatis maxime sunt minima necessitatibus dignissimos rerum enim sit odio error tempore, accusantium totam fugit inventore corporis.</p>
                    </div>
                    <div class="col-sm">
                        <img src={banner} alt='banner' className='about-banner' />
                    </div>
                </div>
            </div>

        </>
    )
}
