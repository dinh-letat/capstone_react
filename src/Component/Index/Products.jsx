import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class Products extends Component {
    render() {
        return (
            <div className="container">
                <span className='fs-2 text-light bg-secondary py-2 ps-2 pe-5'>Product Feature</span>
                <div className="row mb-4 mt-3">
                    <div className="col-4">
                        <ProductItem/>
                    </div>
                    <div className="col-4">
                        <ProductItem/>
                    </div>
                    <div className="col-4">
                        <ProductItem/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <ProductItem/>
                    </div>
                    <div className="col-4">
                        <ProductItem/>
                    </div>
                    <div className="col-4">
                        <ProductItem/>
                    </div>
                </div>
            </div>
        )
    }
}
