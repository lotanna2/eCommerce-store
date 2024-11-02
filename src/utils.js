// for the api calls for product data
import axios from "axios";
const BASE_URL = "https://fakestoreapi.com";

export const fetchProducts = async () => {

        const response = await axios.get(`${BASE_URL}/productS`)
        return response.data;
};

export const fetchCategoryProducts = async (_category) => { // the api we're using has a specific category endpoint that allows us to get only data from a specific category
        const response = await axios.get(`${BASE_URL}/products/category/${_category}` // so this brings out the specific category we want which is the function that triggers when clicked 
        );
        return response.data;
}