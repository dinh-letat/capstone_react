import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class Products extends Component {
    render() {
        return (
            <div className="container">
                <h3 className='text-center'>-Realate Product -</h3>
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
