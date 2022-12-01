import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="bg-light mt-3 pt-4">
                <div className="container">
                    <div class="d-flex justify-content-between">
                        <ul>
                            <h3>GET HELP</h3>
                            <li className='d-block'>Home</li>
                            <li className='d-block'>Nike</li>
                            <li className='d-block'>Adidas</li>
                            <li className='d-block'>Contact</li>
                        </ul>
                        <ul>
                            <h3>SUPPORT</h3>
                            <li className='d-block'>About</li>
                            <li className='d-block'>Contact</li>
                            <li className='d-block'>Help</li>
                            <li className='d-block'>Phone</li>
                        </ul>
                        <ul>
                            <h3>REGISTER</h3>
                            <li className='d-block'>register</li>
                            <li className='d-block'>login</li>
                        </ul>
                    </div>
                    <div className='bg-light text-center p-3'>
                        <span>
                            © 2022 Cybersoft All Rights Reserved | Design Theme by Trương Tấn Khải.
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}
