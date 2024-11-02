import { lazy } from "react";
import Home from "./pages/Home";

export const ALLOWED_CATEGORIES = { // constant variables for the categories
    MENS: "men's clothing", // objects
    WOMENS: "women's clothing",
};
const Products = lazy(() => import("./pages/Products") ) // defining a variable for it
export const appRoutes = [
    {
    path: "/",
    component: Home ,
    requiresAuth: false,
},
{
    path: "/products",
    component: Products,
    requiresAuth: false,
},
]; // the list of our routes 