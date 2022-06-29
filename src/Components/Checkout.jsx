import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const Checkout = () => {

    const state = useSelector((state) => state.HandleCart);

    var total = 0;
    const itemList = (item) => {

        total = total + item.price;

        return (
            <div class="totalContent">
                <p>{item.title}</p>
                <span>{item.price}</span>
            </div>
        );
    }

  return (
    <>
        <div class='checkoutItems container'>
            <div class="row">
                <div class="col">
                    <div class="formGroup">
                        <label htmlFor="name">Name</label>
                        <input type="text" id='name' />
                    </div>
                    <div class="formGroup">
                        <label htmlFor="address">Address</label>
                        <input type="text" id='address' />
                    </div>
                    <div class="formGroup">
                        <label htmlFor="phone">Phone</label>
                        <input type="text" id='phone' />
                    </div>
                    <div class="formGroup">
                        <Link to="/order" class='checkout'>Checkout</Link>
                    </div>
                </div>
                <div class="col">
                    <div class="totalCart">
                        <h2>Your Cart <span>{state.length}</span></h2>
                        <div class="totalInfo">
                            {state.map(itemList)}
                        </div>
                        <div class="total">
                            <p>Total:</p>
                            <span>${total}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Checkout
