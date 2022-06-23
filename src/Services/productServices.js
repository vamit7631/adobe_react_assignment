import axios from 'axios'
import { GET_ALL_PRODUCTS } from "./CONSTANTS";
import { SYSTEM_ERROR } from "../Config/CONSTANTS";

export const getAllProducts = () => { 
    console.log("Get All Products");
    return new Promise((resolve, reject) => {
        try {
          axios.get(GET_ALL_PRODUCTS)  
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