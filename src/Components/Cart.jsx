import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCart } from '../redux/action';
import {Link} from "react-router-dom"
import '../Styles/add-cart.css'
const Cart = () => {

  const state = useSelector((state) => state.HandleCart);
  const dispatch = useDispatch();

  const handleDelete = (item) => {
    dispatch(deleteCart(item));
  }

  const cartItems = (cartItem) => {
    return (

      <div class="aem-GridColumn aem-Grid aem-Grid--12 aem-GridColumn--default--12">

      <div class="aem-GridColumn aem-GridColumn--default--2" key={cartItem.id}>
        {/* <div className="topCol">
          <button onClick={() => handleDelete(cartItem)}>X</button>
        </div> */}
        <div class="middleCol">
          <div class="cart-img">
            <img src={cartItem.image} alt={cartItem.title} />
          </div>
         
        </div>
        </div>
        <div class="aem-GridColumn aem-GridColumn--default--3">
        <div class="right">
            <h3 class="cart-title">{cartItem.title}</h3>
            <div>Size : medium</div>
            <div>Color : Storm</div>
            <span>${cartItem.price}</span>
          </div>
        </div>


        <div class="aem-GridColumn aem-GridColumn--default--2">
          <div class="quantity-section">
                <div>
                    <span><img src={'../images/minus-icon.png'} /></span>
                    <input id="quantity" type="text" name="quantity" value="1" />
                    <span><img src={'../images/plus-icon.png'} /></span>
                </div>
                        
          </div>
        </div>
        <div class="aem-GridColumn aem-GridColumn--default--2 cart-editable-items">
          <ul>
            <li><span><img src={'../images/edit.svg'} /></span>Edit item</li>
            <li><span><img src={'../images/trash.svg'} /></span>Remove</li>
            <li><span><img src={'../images/heart.svg'} /></span>Save for later</li>
          </ul>
        </div>

      </div>

    );
  }

  const emptyCart = () => {
    return (
      <div className="col">
        <h2>Your Cart is Empty!</h2>
      </div>
    );
  }

  const buttonCheckout = () => {
    return (
      <div className="col">
        <Link to="/checkout" className='checkout'>Proceed to Checkout</Link>
      </div>
    );
  }

  return (
    <>
        <div className='add-cart-page main-container'>
        <div class="aem-Grid aem-Grid--12 aem-Grid--tablet--12 aem-Grid--default--12 aem-Grid--phone--12 ">
          <div class="aem-GridColumn aem-Grid aem-Grid--12 aem-GridColumn--default--12">
            <h1 class="cart-heading"> Your S<span>hoppi</span>ng Bag </h1>
          </div>
                  {state.length === 0 && emptyCart()}
                  {state.length !== 0 && state.map(cartItems)} 
                  {state.length !== 0 && buttonCheckout()} 
          </div> 
        </div>
    </>
  )
}

export default Cart
