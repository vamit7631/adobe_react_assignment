import React from "react"
import {Link} from "react-router-dom";
import { useSelector } from 'react-redux';
import '../Styles/header.css'
function Header() {
    const state = useSelector((state) => state.HandleCart);
    return (
        <header>
            <div class="max-width_header">
                <div class="header_content">
                    <div class="venia-logo">VENIA</div>
                    <nav class="navbar nav">
                        <ul class="">
                            <li>Women</li>
                            <li>Men</li>
                            <li>Smart Gear</li>
                            <li>Accessories</li>
                        </ul>  
                    </nav>
                    <div class="user-accounts">
                        <div class="search-btn"><img 
          alt="user's image" src={'images/search.svg'} />Search</div>
                        <div class="search-btn"><img 
          alt="user's image" src={'images/user.svg'} /> Sign in</div>
                        <div> <Link to="/cart"> Cart({state.length})</Link></div>
                    </div>
                </div>
                
                
               
            </div>
        </header>
    )
}


export default Header