import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getSingleProduct } from '../Services/productServices';
import { addCart } from '../redux/action';
import '../Styles/single-product.css'
const Product = () => { 
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    let componentMounted = true;

    const dispatch = useDispatch();

    const addProduct = (product) => {
        dispatch(addCart(product));
    }

    useEffect(() => {
        console.log("test1")
        const getSingleProductfn = async () => {
            setLoading(true);
            console.log(id, "test2")
            const response = await getSingleProduct(id);
            console.log("test3")
            if (componentMounted) {
                setProduct(response);
                setLoading(false);
            }
            return () => {
                componentMounted = false;
            }
        }

        getSingleProductfn()

    }, [id]);

    const Loading = () => {
        return (
            <>
                <p class='loading'>Loading...</p>
            </>
        )
    }


    const ShowProduct = () => { 
        return (
            <>
            <div class="aem-GridColumn aem-Grid aem-Grid--12 aem-GridColumn--default--12">
                    <div class="aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--phone--hide">
                        <div>
                            <ul class="item-list">
                                <li> <img src={product.image} alt={product.title} /></li>
                                <li> <img src={product.image} alt={product.title} /></li>
                                <li> <img src={product.image} alt={product.title} /></li>
                            </ul>
                        </div>
                       
                    </div>
                    <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                        <div class="single-product-img">
                        <img src={product.image} alt={product.title} />
                        </div>
                    </div>
                    <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                        <h2>{product.title}</h2>
                        <h3>${product.price}</h3>
                        <p class="product-description">{product.description}</p>
                        <div class="quantity-section">
                            <h4>Quantity</h4>
                            <div class="qnty-input">
                                <span><img src={'../images/minus-icon.png'} /></span>
                                <input id="quantity" type="text" name="quantity" value="1" />
                                <span><img src={'../images/plus-icon.png'} /></span>
                            </div>
                       
                        </div>
                        <div class="cart-section">
                            <button class='add-cart' onClick={() => addProduct(product)}> Add to Cart</button>
                        </div>
                        
                    </div>
                  </div>
            </>
        )
    }


    return (
        <div class='signle-product main-container'>
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
