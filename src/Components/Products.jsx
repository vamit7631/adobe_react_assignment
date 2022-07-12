import React, { useEffect, useState } from 'react'
import '../Styles/products.css';
import { getAllProducts } from '../Services/productServices';
import { Link } from 'react-router-dom';


const Products = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const defaultValue = "asc";
        const getProducts = async () => {
            setLoading(true);
            const response = await getAllProducts(defaultValue);
            setData(response);
            setFilter(response);
            setLoading(false);
        } 
        
        getProducts();
    }, []);


    const SetProductSorting = async (e) => { 
        console.log(e.target.value, "typevalue")
        const sortdata = await getAllProducts(e.target.value);
        setData(sortdata);
    }
    
    const Loading = () => {
        return (
            <>
                <p class='loading'>Loading...</p>
            </>
        )
    }




  if (error) return <h1>{error}</h1>;

  return (
      <div class='products'>
          <div class="container">
          <div class="products-header-section aem-GridColumn aem-Grid aem-Grid--12 aem-GridColumn--default--12">
                    <div class="breadcrumbs-section aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                        <ul class="breadcrumb">
                            <li>Clothing <span>&nbsp;</span> </li>
                            <li>Women's <span>&nbsp;</span></li>
                            <li>Outerwear <span>&nbsp;</span></li>
                        </ul>
                </div>
                <div class="aem-GridColumn aem-GridColumn--default--6">
                        <div class="product-sorting">
                            <select name="products" id="products" onChange={(e) => SetProductSorting(e)}>
                                <option value="asc">Sort by Latest</option>
                                <option value="desc">Sort by Oldest</option>
                            </select>
                        </div>
                   
                </div>

       
            </div>
          {data.length > 0 ? (
        <>
          <Pagination
            data={data}
            RenderComponent={ShowProducts}
            title="Products"
            pageLimit={4}
            dataLimit={6}
          />
        </>
      ) : (
       <h1><Loading/></h1>
      )}
          </div>   
    </div>
  );
}



function ShowProducts(props) {
    const { id, title, image, price } = props.data;
    return (
        <div class="main-products aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--6" key={id}>
            <Link to={`/products/${id}`} class='buyNow'>
                <div class="category-product-outer">
                    <div class="category-product-img">
                        <img class="product-img" src={image} />
                    </div>
                
                <h3 class="category-product-title">{title.substring(0, 18)}...</h3>
                    <div class="product-details">
                        <div>${price}</div>
                        <span class="product-rating">&#9825;</span>
                    </div>
                </div>
            </Link>
      </div>
    );
}



function Pagination({ data, RenderComponent, title, pageLimit, dataLimit }) {
    const [pages] = useState(Math.round(data.length / dataLimit));
    const [currentPage, setCurrentPage] = useState(1);
  
    function goToNextPage() {
        setCurrentPage((page) => page + 1);
    }
  
    function goToPreviousPage() {
        setCurrentPage((page) => page - 1);
    }
  
    function changePage(event) {
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
    }
  
    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return data.slice(startIndex, endIndex);
    };
  
    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
    };
  




    return (
        <>
           
            <div class="aem-GridColumn aem-Grid aem-Grid--12 aem-GridColumn--default--12 aem-Grid--phone--12">
                <div class="category-product-filters aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--hide">
                    <h4>Filters</h4>
                    <div class="top-filters">
                        <h5>Categories</h5>
                        <ul>
                            <li>
                                <input type="checkbox" name='allitems' class='btn' defaultChecked={true} />
                                <label for="allitems"> All</label><br></br>
                            </li>
                            <li>
                                <input type="checkbox" name='mens_clothing' class='btn' />
                                <label for="mens_clothing"> Men's clothing</label><br></br>
                            </li>
                            <li>
                                <input type="checkbox" name='womens_clothing' class='btn' />
                                <label for="womens_clothing"> Women's clothing</label><br></br>
                            </li>
                            <li>
                                <input type="checkbox" name='jewelery' class='btn' />
                                <label for="jewelery"> Jewelery</label><br></br>
                            </li>
                            <li>
                                <input type="checkbox" name='electronics' class='btn' />
                                <label for="electronics"> Electronics</label><br></br>
                            </li>
                        </ul>
                        <div class="show-more"><a href="">Show more</a></div>
                    </div>
                    

                    <div class="middle-filters">
                        <h5>Attribute</h5>
                        <ul>
                                <li>
                                    <input type="checkbox" class='btn'/>
                                <label for="Option"> Option</label><br></br>
                                </li>
                                <li>
                                    <input type="checkbox" class='btn'/>
                                <label for="Option"> Option</label><br></br>
                                </li>
                                <li>
                                    <input type="checkbox" class='btn'/>
                                <label for="Option"> Option</label><br></br>
                                </li>
                                <li>
                                    <input type="checkbox" class='btn'/>
                                <label for="Option"> Option</label><br></br>
                                </li>
                                <li>
                                    <input type="checkbox" class='btn'/>
                                <label for="Option"> Option</label><br></br>
                                </li>
                                <li>
                                    <input type="checkbox" class='btn'/>
                                <label for="Option"> Option</label><br></br>
                                </li>
                                <li>
                                    <input type="checkbox" class='btn'/>
                                <label for="Option"> Option</label><br></br>
                                </li>
                        </ul>
                        
                    </div>
                </div>
                <div class="prdct-container aem-GridColumn aem-GridColumn--default--9 aem-Grid--phone--12">
                    <div class="products-listing aem-GridColumn aem-Grid aem-Grid--12 aem-GridColumn--default--12">
                                {getPaginatedData().map((d, idx) => (
                                    <RenderComponent key={idx} data={d} />
                                ))}

                        
                        

                    </div>


                    <div class="products-listing aem-GridColumn aem-Grid aem-Grid--12 aem-GridColumn--default--12">
                    <div className="pagination">
          {/* previous button */}
          {/* <button
            onClick={goToPreviousPage}
            className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
          >
            prev
          </button> */}
    
          {/* show page numbers */}
          {getPaginationGroup().map((item, index) => (
            <button
              key={index}
              onClick={changePage}
              className={`paginationItem ${currentPage === item ? 'active' : null}`}
            >
              <span>{item}</span>
            </button>
          ))}
    
          {/* next button */}
          {/* <button
            onClick={goToNextPage}
            className={`next ${currentPage === pages ? 'disabled' : ''}`}
          >
            next
          </button> */}
                        </div>
                    </div>

                </div>

    

        
                </div>
      </>
    );
  }




export default Products
