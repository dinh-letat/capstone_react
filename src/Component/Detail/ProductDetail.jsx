import React, { Component } from 'react'
import shoes from "../img/shoes.jpg"
export default class ProductDetail extends Component {
  render() {
    return (
      <div className="container d-flex justify-content-between mt-1">
        <img width={800} src={require('../img/shoes.jpg')}  />
        <div>
          <h3>Product name</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
            Consectetur, facere aspernatur! Placeat dolores officia ex, sunt id, <br />
            commodi atque consequuntur autem exercitationem delectus officiis <br />
            cum velit laboriosam mollitia nemo consequatur.</p>
          <h3>Available size</h3>
          <div className='mt-4 mb-4'>
            <a className='text-decoration-none me-3 text-dark fw-bold p-2 bg-light' href="">38</a>
            <a className='text-decoration-none me-3 text-dark fw-bold p-2 bg-light' href="">39</a>
            <a className='text-decoration-none me-3 text-dark fw-bold p-2 bg-light' href="">40</a>
            <a className='text-decoration-none me-3 text-dark fw-bold p-2 bg-light' href="">41</a>
            <a className='text-decoration-none me-3 text-dark fw-bold p-2 bg-light' href="">42</a>
          </div>
          <span className="color-success fs-2 text-danger">85$</span>
          <div>
            <button className='bg-primary border-0 p-2'>+</button>
            <span className='p-2'>0</span>
            <button className='bg-primary border-0 py-2 px-2'>-</button>
          </div>
          <button className="bg-primary text-light border-0 mt-2 px-2 py-1">Add to cart</button>
        </div>
      </div>
    )
  }
}
