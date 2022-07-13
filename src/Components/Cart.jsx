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

      <div class="prdcts-cart-items aem-GridColumn aem-Grid aem-Grid--12 aem-GridColumn--default--12">

      <div class="aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--phone--4" key={cartItem.id}>
        <div class="middleCol">
          <div class="cart-img">
            <img src={cartItem.image} />
          </div>
         
        </div>
        </div>
        <div class="aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--8">
        <div class="right">
            <h3 class="cart-title">{cartItem.title}</h3>
            <div>Size : medium</div>
            <div>Color : Storm</div>
            <span>${cartItem.price}</span>
          </div>
        </div>


        <div class="product-cart-section aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--phone--6">
          <div class="quantity-section">
                <div>
                    <span><img src={'/images/minus-icon.png'} alt="minus-icon" /></span>
              <input id="quantity" type="text" name="quantity" value={ cartItem.qty } />
                    <span><img src={'./images/plus-icon.png'} alt="plus-icon"/></span>
                </div>
                        
          </div>
        </div>
        <div class="cart-editable-icons aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--hide cart-editable-items">
          <ul>
            <li><span><img src={'./images/edit.svg'} alt="edit-icon" /></span>Edit item</li>
            <li onClick={() => handleDelete(cartItem)}><span><img src={'./images/trash.svg'} alt="trash-icon" /></span>Remove</li>
            <li><span><img src={'./images/heart.svg'} alt="heart-icon" /></span>Save for later</li>
          </ul>
        </div>

      </div>

    );
  }

  const emptyCart = () => {
    return (
      <div class="empty-cart">
        <h2>Your Cart is Empty!</h2>
      </div>
    );
  }


  return (
    <>
        <div class='add-cart-page main-container'>
        <div class="aem-Grid aem-Grid--12 aem-Grid--tablet--12 aem-Grid--default--12 aem-Grid--phone--12 ">
          <div class="aem-GridColumn aem-Grid aem-Grid--12 aem-GridColumn--default--12">
            <h1 class="cart-heading"> Your S<span>hoppi</span>ng Bag </h1>
          </div>
          <div class="aem-GridColumn aem-Grid aem-Grid--9 aem-GridColumn--default--9 aem-GridColumn--phone--12">
                  {state.length === 0 && emptyCart()}
                  {state.length !== 0 && state.map(cartItems)} 
          </div>
            <div class="pricing-summary aem-GridColumn aem-Grid aem-Grid--3 aem-GridColumn--default--3 aem-GridColumn--phone--12">
                <div>
                      <h4>Pricing Summary</h4>
                      <div class="pricing-section">
                            <span class="left">Subtotal</span>
                            <span class="right">$388.00</span>
              </div>
              <div class="pricing-section">
                            <span class="left">Coupon</span>
                            <span class="right">-$77.60</span>
              </div>
              <div class="pricing-section">
                            <span class="left">Gift Card</span>
                            <span class="right">-$100.00</span>
              </div>
              <div class="pricing-section">
                            <span class="left">Estimated tax</span>
                            <span class="right">$23.00</span>
              </div>
              <div class="pricing-section">
                            <span class="left">Estimated Shipping</span>
                            <span class="right">Free</span>
              </div>
              <div class="pricing-section">
                            <span class="left"><strong>Estimated Total</strong></span>
                            <span class="right"><strong>$233.00</strong></span>
              </div>
              <div class="cart-btns">
                <button class='checkout-btn'><span></span> CHECKOUT</button>
                <div class="paypal-btn">
                    <img src={'./images/paypal-btn.png'} />
                </div>
                      
              </div>

                </div>
            </div>
          </div> 
        </div>
    </>
  )
}

export default Cart
