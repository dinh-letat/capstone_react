import React, { Component } from 'react';
import shoes from '../img/shoes.jpg'

export default class Carousel extends Component {
    render() {
        return (
            <div className='menu'>
                <div className="container d-flex justify-content-around align-items-center">
                    <img src={shoes} width={700} height={400} alt="" />
                    <div className="product">
                        <p className="fs-1">Product name</p>
                        <p className="fs-4 mb-3 fw-normal">Product description ...</p>
                        <button type="button" className="btn btn-warning">Buy now</button>
                    </div>
                </div>
            </div>
        )
    }
}
