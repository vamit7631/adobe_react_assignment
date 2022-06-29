import axios from 'axios'
import { GET_ALL_PRODUCTS } from "./CONSTANTS";
import { SYSTEM_ERROR } from "../Config/CONSTANTS";

export const getAllProducts = (type) => { 
    return new Promise((resolve, reject) => {
        try {
            axios.get(GET_ALL_PRODUCTS + '?sort=' + type)  
                .then((res) => {
                    console.log("getAllProducts> axios res=", res);
                    resolve(res.data);   
              }).catch((err) => {
                    console.log("getAllProducts > axios err=", err);
                    reject("Error in getAllProducts axios!");
            })
        } catch (err) {
            reject(SYSTEM_ERROR);
        }
    });

}


export const getSingleProduct = (id) => { 
    console.log("Get Single Product");

    return new Promise((resolve, reject) => { 
        try {
            axios.get(GET_ALL_PRODUCTS + '/' + id)
                .then((res) => { 
                    console.log("getSingleProduct> axios res=", res);
                    resolve(res.data);   
                }).catch((err) => {
                    console.log("getSingleProduct > axios err=", err);
                    reject("Error in getSingleProduct axios!");
                })
        } catch (err) {
            reject(SYSTEM_ERROR);
        }
    })
} 