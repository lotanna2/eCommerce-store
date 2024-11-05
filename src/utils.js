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
};

export const authenticateUser = async (email, password) => {
        const response = await axios.get(`${BASE_URL}/users`); // api endpoint
        const authenticate = response.data.find( // basically checking if the users info from the api call is = that from our user input
                (user) => user.email === email && 
                user.password === password
        );
        return authenticate;
};