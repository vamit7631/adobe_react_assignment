import React from "react"
import {Link} from "react-router-dom";
import { useSelector } from 'react-redux';
import '../Styles/header.css'
function Header() {
    const state = useSelector((state) => state.HandleCart);
    return (
        <header>
            <div class="max-width_header main-container">
                <div class="header-menu aem-Grid aem-Grid--12 aem-Grid--tablet--12 aem-Grid--default--12">
                        <div class="aem-GridColumn aem-GridColumn--default--2">
                            <div class="venia-logo"> <Link to="/"> <img 
                            src={'./images/venia_logo.png'} alt="logo-img" />
                        </Link></div>
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
           src={'./images/search.svg'} alt="search-img" /><span>Search</span></div>
                        <div class="signin-btn"><img 
           src={'./images/user.svg'} alt="signin-img" /><span>Sign in</span></div>
                        <div class="cart-btn"> <Link to="/cart"> <img 
           src={'./images/cart.png'} alt="cart-img" /><span>{state.length}</span></Link></div>
                    </div>  
                </div>
                
                <div class="mobile-nav aem-Grid aem-Grid--12 aem-Grid--default--12 aem-Grid--phone--12">
                        <div class="menu-logo aem-GridColumn aem-GridColumn--default--2"> <img 
                        src={'./images/menu_icon.png'} /></div>
                        <div class="aem-GridColumn aem-GridColumn--default--6">
                            <div class="venia-logo"> <Link to="/"> <img 
                            src={'./images/venia_logo.png'} alt="logo-img" />
                        </Link></div>
                    </div>
                    <div class="header-socials aem-GridColumn aem-GridColumn--default--4">
                        <div class="search-btn"><img 
           src={'./images/search.svg'} alt="search-img" /></div>
                        <div class="cart-btn"> <Link to="/cart"> <img 
           src={'./images/cart.png'} alt="cart-img" /><span>{state.length}</span></Link></div>
                    </div> 
                </div>

            </div>
           
        </header>
    )
}


export default Header