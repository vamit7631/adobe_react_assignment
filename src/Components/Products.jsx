import React, { useEffect, useState } from 'react'
import '../Styles/products.css';
import { getAllProducts } from '../Services/productServices';
import { Link } from 'react-router-dom';
const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);

    console.log(filter);

    let componentMounted = true;

    useEffect(() => {

        const getProducts = async () => {
            setLoading(true);

            const response = await getAllProducts();
            if(componentMounted) {
                setData(response);
                setFilter(response);
                setLoading(false);
            }

            return () => {
                componentMounted = false;
            }
        }

        getProducts();

    }, []);

    const Loading = () => {
        return (
            <>
                <p className='loading'>Loading...</p>
            </>
        )
    }

    const filterProduct = (cat) => {
        const updatedList = data.filter((x) => x.category === cat);
        setFilter(updatedList);
    }

    const ShowProducts = () => {
        return (
            <>

                <div class="products-header-section aem-GridColumn aem-Grid aem-Grid--12 aem-GridColumn--default--12">
                    <div class="breadcrumbs-section aem-GridColumn aem-GridColumn--default--6">
                        <ul class="breadcrumb">
                            <li>Clothing <span>&nbsp;</span> </li>
                            <li>Women's <span>&nbsp;</span></li>
                            <li>Outerwear <span>&nbsp;</span></li>
                        </ul>
                    </div>
                    <div class="aem-GridColumn aem-GridColumn--default--6">
                        <div class="product-sorting">
                            <select name="products" id="products">
                                <option value="asc">Sort by Latest</option>
                                <option value="desc">Sort by Price</option>
                            </select>
                        </div>
                   
                    </div>
                </div>
                

                <div class="aem-GridColumn aem-Grid aem-Grid--12 aem-GridColumn--default--12 aem-Grid--phone--12">
                    <div class="category-product-filters aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--hide">
                        <h4>Filters</h4>
                        <div class="top-filters">
                        <h5>Categories</h5>
                        <ul>
                            <li>
                                <input type="checkbox" name='allitems' class='btn' defaultChecked={true} onChange={() => setFilter(data)} />
                                <label for="allitems"> All</label><br></br>
                            </li>
                            <li>
                                <input type="checkbox" name='mens_clothing' class='btn' onChange={() => filterProduct("men's clothing")} />
                                <label for="mens_clothing"> Men's clothing</label><br></br>
                            </li>
                            <li>
                                <input type="checkbox" name='womens_clothing' class='btn' onChecked={() => filterProduct("women's clothing")} />
                                <label for="womens_clothing"> Women's clothing</label><br></br>
                            </li>
                            <li>
                                <input type="checkbox" name='jewelery' class='btn' onChecked={() => filterProduct("jewelery")} />
                                <label for="jewelery"> Jewelery</label><br></br>
                            </li>
                            <li>
                                <input type="checkbox" name='electronics' class='btn' onChecked={() => filterProduct("electronics")} />
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
                    <div className="products-listing aem-GridColumn aem-Grid aem-Grid--12 aem-GridColumn--default--12">
                        {filter.map((product) => {
                            return(
                                <>
                                    <div class="main-products aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--6" key={product.id}>
                                        <Link to={`/products/${product.id}`} className='buyNow'>
                                        <div class="category-product-outer">
                                        <div class="category-product-img">
                                            <img class="product-img" src={product.image} alt={product.title} />
                                            </div>
                                            <div>
                                            <h3 className="category-product-title">{product.title.substring(0, 18)}...</h3>
                                            <div className="product-details">
                                                {/* <span>Rate: {product.rating.rate}</span> */}
                                                        <div>${product.price}</div>
                                                        <span class="product-rating">&#9825;</span>
                                            </div>
                                        </div>
                                        </div>
                                        </Link>

                                    </div>
                              
            
                                    
                                </>
                            )
                        })}
              
                </div>  
                    </div>
                </div>
                

 
            </>
        )
    }

  return (
    <div class='products'>
        <div class="container">
                    {loading ? <Loading/> : <ShowProducts/>}
        </div>
    </div>
  )
}

export default Products
