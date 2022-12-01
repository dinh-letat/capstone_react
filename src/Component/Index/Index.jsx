import React, { Component } from 'react'
import Header from './Header';
import Menu from './Menu';
import Carousel from './Carousel';
import Products from './Products';
import Footer from './Footer';

export default class Index extends Component {
  render() {
    return (
      <div>
        <Header />
        <Menu />
        <Carousel />
        <Products />
        <Footer />
      </div>
    )
  }
}
