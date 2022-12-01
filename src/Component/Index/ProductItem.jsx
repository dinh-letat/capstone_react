import React, { Component } from 'react'
import { FaHeart } from 'react-icons/fa'
import shoes from '../img/shoes.jpg'
export default class Product extends Component {
    render() {
        return (
            <div className='card' >
                <img src={require('../img/shoes.jpg')} />
                <div className="card-body">
                    <a href="">
                        <i class="fa fa-heart" aria-hidden="true"></i>
                    </a>
                    <h2>Adidas Prophere</h2>
                    <p>short descript ...</p>
                </div>
                <div className='display-block bg-light d-flex justify-content-between align-items-center'>
                    <button className="btn btn-success ">
                        Add to cart <i class="fa fa-cart-plus" aria-hidden="true"></i>
                    </button>
                    <span className='text-align-right pe-5'>$85</span>
                </div>
            </div>
        )
    }
}
