import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        return (
            <div className='card'>
                <img src={require('../img/shoes.jpg')} />
                <div className="card-body">
                    <a href="">
                        <i class="fa fa-heart" aria-hidden="true"></i>
                    </a>
                    <h2>Product 1</h2>
                    <p>1000</p>
                    <button className="btn btn-success">
                        Add to cart <i class="fa fa-cart-plus" aria-hidden="true"></i>
                    </button>
                    <span className='fs-3 ms-5'>$85</span>
                </div>
            </div>
        )
    }
}
