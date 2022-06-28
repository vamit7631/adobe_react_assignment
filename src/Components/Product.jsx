import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { addCart } from '../redux/action';
import '../Styles/single-product.css'
const Product = () => { 
    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    const addProduct = (product) => {
        dispatch(addCart(product));
    }



    useEffect(() => {

        const getProduct = async () => {
            setLoading(true);

            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            console.log(response,"rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr")
            setProduct(await response.json());
            setLoading(false);
        }

        getProduct();

    }, [id]);


    const Loading = () => {
        return (
            <>
                <p className='loading'>Loading...</p>
            </>
        )
    }


    const ShowProduct = () => {
        return (
            <>
                <div class="aem-GridColumn aem-Grid aem-Grid--12 aem-GridColumn--default--12">
                    <div className="aem-GridColumn aem-GridColumn--default--2">
                        <div>
                            <ul class="item-list">
                                <li> <img src={product.image} alt={product.title} /></li>
                                <li> <img src={product.image} alt={product.title} /></li>
                                <li> <img src={product.image} alt={product.title} /></li>
                            </ul>
                        </div>
                       
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--4">
                        <div class="single-product-img">
                        <img src={product.image} alt={product.title} />
                        </div>
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--6">
                        <h2>{product.title}</h2>
                        <h3>${product.price}</h3>
                        <p class="product-description">{product.description}</p>
                        <div class="quantity-section">
                            <h4>Quantity</h4>
                            <div>
                                <span><img src={'../images/minus-icon.png'} /></span>
                                <input id="quantity" type="text" name="quantity" value="1" />
                                <span><img src={'../images/plus-icon.png'} /></span>
                            </div>
                       
                        </div>
                        <button className='add-cart' onClick={() => addProduct(product)}> Add to Cart</button>
                    </div>
                  </div>
                  
                
            </>
        )
    }

    return (
        <div className='signle-product main-container'>
            <div class="aem-Grid aem-Grid--12 aem-Grid--tablet--12 aem-Grid--default--12 aem-Grid--phone--12 ">
                <div class="single-product-item">
                    <div class="aem-Grid aem-Grid--12 aem-Grid--tablet--12 aem-Grid--default--12 aem-Grid--phone--12 ">
                    {loading ? <Loading/> : <ShowProduct/>}
                    </div>
                </div>
            </div>
        </div>
      )

}

export default Product
