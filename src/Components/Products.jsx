import React, { useEffect, useState } from 'react'
import '../Styles/products.css';
import '../Styles/aem-grid.css'
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
                <div class="category-banner">
                    <div class="rectangle-banner">
                        <div class="women-outerwear">
                            <span>Women's</span>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <ul class="breadcrumb">
                            <li>Clothing</li>
                            <li>Women's</li>
                            <li>Outerwear</li>
                        </ul>
                    </div>
                    <div>
                    <label for="cars">Sort by </label>
                    <select name="cars" id="cars">
                        <option value="asc">Latest</option>
                        <option value="desc">Price</option>
                    </select>
                    </div>
                </div>
                
                
                <div className="aem-GridColumn aem-GridColumn--default--3">
                    <button className='btn' type='submit' onClick={() => setFilter(data)}>All</button>
                    <button className='btn' type='submit' onClick={() => filterProduct("men's clothing")}>Men's clothing</button>
                    <button className='btn' type='submit' onClick={() => filterProduct("women's clothing")}>Women's clothing</button>
                    <button className='btn' type='submit' onClick={() => filterProduct("jewelery")}>Jewelery</button>
                    <button className='btn' type='submit' onClick={() => filterProduct("electronics")}>Electronics</button>
                </div>
                <div className="products-listing">
                    <div class="aem-Grid aem-Grid--9">
                        {filter.map((product) => {
                            return(
                                <>
                                    
                                        <div class="aem-GridColumn aem-GridColumn--default--3" key={product.id}>
                                        <img class="product-img" src={product.image} alt={product.title} />
                                        <div>
                                            <h3 className="title">{product.title.substring(0, 15)}...</h3>
                                            <div className="product-details">
                                                <span>Rate: {product.rating.rate}</span>
                                                <span>${product.price}</span>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <Link to={`/products/${product.id}`} className='buyNow'>Buy Now</Link>
                                        </div> 
                                    </div>
                              
            
                                    
                                </>
                            )
                        })}
                    </div>
                </div>   
            </>
        )
    }

  return (
    <div className='products'>
        <div className="container">
            <div className="row productsRow">
                <div className="aem-GridColumn aem-GridColumn--default--12">
                    {loading ? <Loading/> : <ShowProducts/>}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products
