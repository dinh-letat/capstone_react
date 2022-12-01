import React, { Component } from 'react'
import Header from '../Carts/Header'
import Menu from '../Detail/Menu'
import Products from '../Detail/Products'
import ProductDetail from '../Detail/ProductDetail'
import Footer from '../Detail/Footer'
export default class Detail extends Component {
    render() {
        return (
            <div>
                <Header />
                {/* <Menu />*/}
                <ProductDetail />
                <Products />
                <Footer /> 
            </div>

        )
    }
}
