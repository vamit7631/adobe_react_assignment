import React from "react"
import '../Styles/footer.css'

const Footer = () => {
    return (
        <footer class="footer-outer">
            <div class="footer-top-col">
            <div class="aem-GridColumn aem-GridColumn--default--12">
            <div class="footer main-container">
                <div class="aem-Grid aem-Grid--12 aem-Grid--tablet--12 aem-Grid--default--12 aem-Grid--phone--12 ">
                    <div class="aem-Grid aem-Grid--4 aem-Grid--default--4 aem-Grid--phone--12">
                        <div class="aem-GridColumn aem-GridColumn--default--1 aem-Grid--phone--12 footer-col footer-col1">
                            <ul>
                                <li class="footer-element"><a href="#"><strong>Account</strong></a></li>
                                <li>Sign In</li>
                                <li>Register</li>
                                <li>Order Status</li>
                            </ul>
                        </div>
                        <div class="aem-GridColumn aem-GridColumn--default--1 footer-col  footer-col2">
                        <ul>
                            <li class="footer-element"><a href="#"><strong>About Us</strong></a></li>
                            <li>Our Story</li>
                            <li>Careers</li>
                        </ul>
                        </div>
                        <div class="aem-GridColumn aem-GridColumn--default--1 footer-col footer-col3">
                        <ul>
                            <li class="footer-element"><a href="#"><strong>Help</strong></a></li>
                            <li>Contact Us</li>
                            <li>Order Status</li>
                            <li>Returns</li>
                        </ul>
                        </div>
                        <div class="aem-GridColumn aem-GridColumn--default--1 footer-col footer-col4">
                        <ul>
                            <li class="footer-element"><a href="#"><strong>Follow Us!</strong></a></li>
                        </ul>
                                    <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry</div>
                                    <div class="footer-social-icons">
                                        <span><img 
           src={'../images/instagram.svg'} /></span>
                                        <span><img 
           src={'../images/facebook.svg'} /></span>
                                        <span><img 
           src={'../images/twitter.svg'} /></span>
                                    </div>
                        <div></div>
                    </div>
                    </div>

                    
                    
                    
                </div>

            </div>
            </div>
            </div>
            <div class="footer-bottom-col">
                <div class="aem-Grid aem-Grid--12 aem-Grid--tablet--12 aem-Grid--default--12 aem-Grid--phone--12 ">
                    <div class="footer-items-details aem-Grid aem-Grid--8 aem-Grid--default--4 aem-Grid--phone--12">
                        <div class="aem-GridColumn aem-GridColumn--default--1 aem-GridColumn--phone--hide">
                        <div class="venia-logo"><img src={'../images/venia_logo.png'} /></div>
                        </div>
                        <div class="aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12 footer-copyright">
                            <span>@Company Name Address Ave, City Name, State ZIP</span>  
                        </div>
                        <div class="aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--phone--12 footer-policy">
                        <ul>
                            <li><a href="">Terms of Use</a></li>
                            <li><a href="">Privacy Policy</a></li>
                        </ul>
                        </div>
               
                  </div>
                  
                        
                       
                   
                  
                    
                    

                   
            </div>
           
            </div>
        </footer>
    )
}
 

export default Footer
