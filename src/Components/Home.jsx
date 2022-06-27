import React from 'react'
import Products from './Products'

const Home = () => {
  return (
    <div className='home'>
      <div class="main-container">
        <div class="aem-Grid aem-Grid--12 aem-Grid--tablet--12 aem-Grid--default--12 aem-Grid--phone--12 ">
        <div class="category-banner aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--6">
                  <div class="rectangle-banner">
                          <div class="women-outerwear">
                              <span>Women's</span>
                          </div>   
                  </div>
                  
          </div>
          <div class="banner-img-grid aem-GridColumn aem-Grid--default--06">
          <div class="banner-img"><img 
                      alt="banner image" src={'images/banner.png'} /></div>
          </div>
            <Products />  
        </div>

        </div>
    </div>
    
  )
}

export default Home
