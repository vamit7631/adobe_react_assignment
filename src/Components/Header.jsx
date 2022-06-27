import React from "react"
import {Link} from "react-router-dom";
import { useSelector } from 'react-redux';
import '../Styles/header.css'
function Header() {
    const state = useSelector((state) => state.HandleCart);
    return (
        <header>
            <div class="max-width_header main-container">
                <div class="aem-Grid aem-Grid--12 aem-Grid--tablet--12 aem-Grid--default--12 aem-Grid--phone--12 ">
                        <div class="aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--phone--6">
                            <div class="venia-logo"> <Link to="/"> <img 
          alt="user's image" src={'images/venia_logo.png'} /></Link></div>
                        </div>
                        <div class="navigation aem-GridColumn aem-GridColumn--default--7">
                            <nav class="navbar nav">
                                <ul class="">
                                    <li>Women</li>
                                    <li>Men</li>
                                    <li>Smart Gear</li>
                                    <li>Accessories</li>
                                </ul>  
                            </nav>
                        </div>
                    
                    <div class="header-socials aem-GridColumn aem-GridColumn--default--3">
                        <div class="search-btn"><img 
          alt="user's image" src={'images/search.svg'} /><span>Search</span></div>
                        <div class="signin-btn"><img 
          alt="user's image" src={'images/user.svg'} /><span>Sign in</span></div>
                        <div class="cart-btn"> <Link to="/cart"> <img 
          alt="user's image" src={'images/cart.png'} /><span>({state.length})</span></Link></div>
                    </div>  
            </div>
            </div>
           
        </header>
    )
}


export default Header