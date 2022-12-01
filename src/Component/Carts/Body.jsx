import React, { Component } from 'react'
import { useSelector } from 'react-redux'
export default function Body(props) {
    const { cart } = useSelector(state => state.shopReducer);
    return (
        
        <div className='container'>
            <h3>Cart</h3>
            <hr />
            <table className="table">
                <thead className='bg-secondary mt-3 mb-3'>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>action</th>
                </thead>
                <tbody>
                    {cart.map((item, index) => {
                        return <>
                        <td>(item.id)</td>
                        <td>(item.name)</td>
                        <td><img src={item.image} width={50} alt="" /></td>
                        <td></td>
                        <td>(item.price)</td>
                        <td>(item.quantity)</td>
                        <td>(item.quantity * item.price)</td>
                        <td>1000</td><td>
                                <button>EDIT</button>
                                <button className='btn btn-danger'>DELETE</button>
                        </td></>

                    })}

                </tbody>
            </table>
        </div>
    )
}
