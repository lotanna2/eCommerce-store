// for the api calls for product data
import axios from "axios";
const BASE_URL = "https://fakestoreapi.com";

export const fetchProducts = async () => {

        const response = await axios.get(`${BASE_URL}/productS`)
        return response.data;
};