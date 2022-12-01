import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
export default class Menu extends Component {
    render() {
        return (
            <div className='menu'>
                <div className="container">
                    <ul>
                        <li>
                            <a href="" className='h5'>Home</a>
                        </li>
                        <li>
                            <a href="">Men</a>
                        </li>
                        <li>
                            <a href="">Woman</a>
                        </li>
                        <li>
                            <a href="">Kid</a>
                        </li>
                        <li>
                            <a href="">Sport</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
