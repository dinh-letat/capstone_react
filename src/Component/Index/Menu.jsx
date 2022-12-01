import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
export default class Menu extends Component {
    render() {
        return (
            <div className='menu'>
                <div className="container">
                    <ul className='d-flex align-items-center mt-2'>
                        <li className='pe-4 d-block'>
                            <a href="" className='h5 text-decoration-none text-dark'>Home</a>
                        </li>
                        <li className='pe-4 d-block'>
                            <a href="" className='text-decoration-none text-dark'>Men</a>
                        </li>
                        <li className='pe-4 d-block'>
                            <a href="" className='text-decoration-none text-dark'>Woman</a>
                        </li>
                        <li className='pe-4 d-block'>
                            <a href="" className='text-decoration-none text-dark'>Kid</a>
                        </li>
                        <li className='pe-4 d-block'>
                            <a href="" className='text-decoration-none text-dark'>Sport</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
