//For Add Item from Cart
export const addCart = (product, quantity) => {
    product.qty = quantity
    return {
        type: "ADDITEM",
        payload: product
    }
}

//For Delete Item from Cart
export const deleteCart = (product) => {
    return {
        type: "DELETEITEM",
        payload: product,
    }
}