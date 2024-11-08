import { useEffect, useState } from "react";
import { fetchProducts, fetchCategoryProducts } from "../utils";
import { ALLOWED_CATEGORIES } from "../routes";
import { useParams } from "react-router-dom";
import ProductCard from "../components/productCard";
  
const Products = (setCartItems) => {  //making state variables to hold all of the products 
 
    const {category} = useParams();
    const [allProducts, setAllProducts] = useState([]); // a place to store all the filtered data that would not change
    const [products, setProducts] = useState([]);
    const [activeCat, setActiveCat] = useState("All"); 
    
        const handleFilterProducts = (productCategory = null) => { // handle filter product function that allows you to now filter the 'allProduct' function, productCategory passed in as a prop
          if(productCategory) { // the 'if' logic is to return the product category to null (show everything for 'all' category)
            const filterProducts = allProducts.filter(
                (product) => product.category === productCategory
            );
            setProducts(filterProducts); 
          } else { // if no filter is selected return all of our products
            setProducts(allProducts); 
          }
        };

        useEffect(() => { // fetching & returning the product list using useEffect for all of them to appear without lag
          if (!category) { // implementing optional ul parameters for categories
            const getProducts = async () => { //  getting the product with async
              const response = await fetchProducts(category); // getting the data from 'response.data'
              setProducts(response);
              setAllProducts(response); //all the products would be visible initially
            };
            getProducts().catch((e) => console.error("we have an error", e)); //catching error
          } else { //if category selection
            const getCategoryProducts = async () => { // then getting the category product with async from the api in utils
              const response = await fetchCategoryProducts(category); // getting the data from 'response.data'
              setProducts(response);
                  // removed setAllProducts(response); because we dont need to filter the categories
            };
            getCategoryProducts().catch((e) => console.error("we have an error", e));
          }
            
            },[]); 
            
            return (  
            <div className="products-cont"> 
            {!category  ? // this is also for the styling for the categories on click
                <div className="category-select"> 
                    <span 
                      className={`select-cat-span ${ // the filter method for the products below, made the className dynamic to know what state its in to change the color when clicked
                        activeCat === "All" ? "cat-active" : ""
                        }`}
                        onClick={() => {
                             handleFilterProducts();
                             setActiveCat("All");
                        }} 
                      >
                        All
                        </span>
                    <span 
                      className={`select-cat-span ${ // made the className dynamic to know what state its in to change the color when clicked
                        activeCat === "women's" ? "cat-active" : ""
                        }`}
                         onClick={() => {
                          handleFilterProducts(ALLOWED_CATEGORIES.WOMENS);
                          setActiveCat("women's"); // when setActive cat is clicked it will activate the function above 'activeCat' that will now check its state
                        }}
                      > 
                        Women's
                        </span>
                    <span  
                      className={`select-cat-span ${ // made the className dynamic to know what state its in to change the color when clicked
                        activeCat === "men's" ? "cat-active" : ""
                        }`}
                    onClick={() => {
                     handleFilterProducts(ALLOWED_CATEGORIES.MENS);
                     setActiveCat("men's");
                    }} 
                     >
                        Men's
                        </span>
                </div> : <div className="category-select"> 
                  <span>{category}</span>  
                  </div>} 
                <div className="product-card-cont"> 
                    {products.length > 0 && // mapping through the product card when the length is > 0 and it displays this
                    products.map(
                    (product) => 
                      product.category !== "jewelry" && 
                      product.category !== "electronics" && 
                    (
                    
                        <ProductCard // a product card with id props passed in from the prop paramteres will display these values 
                        id={product.id} 
                        rating ={product.rating}
                        img={product.image}
                        categoryName={product.category}
                        productName={product.title}
                        description={product.description}
                        price={product.price}
                        setCartItems={setCartItems }
                        />
                    
                    )
            
                )};     
            </div>
        </div> );

    };

export default Products;