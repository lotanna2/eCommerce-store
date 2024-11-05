import { lazy } from "react";
import Home from "./pages/Home";
import NotFound from "./pages/Notfound";

export const ALLOWED_CATEGORIES = { // constant variables for the categories
    MENS: "men's clothing", // objects
    WOMENS: "women's clothing",
};
const Cart = lazy(() => import("./pages/Cart"));
const Products = lazy(() => import("./pages/Products")); // defining a variable for it
const Checkout = lazy(() => import("./pages/Checkout"));
const Login = lazy(() => import("./pages/login"));
const NotFound = lazy(() => import("./pages/Notfound"));
const About = lazy(() => import("./pages/About"));

export const appRoutes = [
    {
    path: "/",
    component: Home ,
    requiresAuth: false,
},
{
    path: "/products/:category?", // adding url Parameters :'then the path' plus '?' --- the ? makes the url parameter (which in this situation is the 'categoreies') optional so the path can work 
    component: Products,
    requiresAuth: false,
},
{
    path: "/cart",
    component: Cart ,
    requiresAuth: false,
},
{
    path: "/checkout",
    component: Checkout ,
    requiresAuth: true ,
},
{
    path: "/login",
    component: Login ,
    requiresAuth: false ,
},
{
    path: "/about",
    component: About,
    requiresAuth: false ,
},
{
    path: "*",
    component: NotFound ,
    requiresAuth: false ,
},

]; // the list of our routes 