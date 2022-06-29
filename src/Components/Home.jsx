import React from 'react'
import Products from './Products'

const Home = () => {
  return (
    <div className='home'>
      <div class="main-container">
        <div class="aem-GridColumn aem-Grid aem-Grid--12 aem-GridColumn--default--12">
        <div class="category-banner aem-GridColumn aem-GridColumn--default--6">
                  <div class="rectangle-banner">
                          <div class="women-outerwear">
                              Women's Out<span>erwe</span>ar
                          </div>   
                  </div>
                  
          </div>
          <div class="banner-img-grid aem-GridColumn aem-GridColumn--default--6">
          <div class="banner-img"><img 
                      alt="banner image" src={'images/banner.png'} /></div>
          </div>
            
        </div>
          <Products />  
        </div>
    </div>
    
  )
}

export default Home
