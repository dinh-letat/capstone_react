import React, { Component } from 'react';
import logo from '../img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';

export default class Header extends Component {
    render() {
        return (
            <div className='header bg-black text-white'>
                <div className="container d-flex p-1 justify-content-between align-items-center">
                    <img src={logo} width="150" height="50" />
                    <div className='header__link '>
                        <a href="" className='h4 p-1 text-light text-decoration-none'>
                            <FaSearch />Search
                        </a>
                        <a href="" className='h5 text-light text-decoration-none'>
                            <FaShoppingCart />(1)
                        </a>
                        <a href="" className='p-3 small text-light text-decoration-none'>Login</a>
                        <a href="" className='small text-light text-decoration-none'>Register</a>
                    </div>
                </div>
            </div>
        )
    }
}
