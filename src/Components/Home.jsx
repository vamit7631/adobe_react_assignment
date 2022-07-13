import React from 'react'
import Products from './Products'

const Home = () => {
  return (
    <div class='home'>
      <div class="main-container">
        <div class="banner-columns aem-GridColumn aem-Grid aem-Grid--12 aem-GridColumn--default--12">
        <div class="category-banner aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                  <div class="rectangle-banner">
                          <div class="women-outerwear">
                              Women's Out<span>erwe</span>ar
                          </div>   
                  </div>
                  
          </div>
          <div class="banner-img-grid aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
          <div class="banner-img"><img src={'./images/banner.png'} alt="product-img" /></div>
          </div>
            
        </div>
          <Products />  
        </div>
    </div>
    
  )
}

export default Home
