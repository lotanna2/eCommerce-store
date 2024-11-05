import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { HiShoppingCart } from "react-icons/hi";
import { useNavigate, Link } from "react-router-dom"; // adjusted the a tag on the nav bar
import "./styles.css";


const Navbar = ({ cartItemsCount, isLogged, categoryRef }) => {
  const navigate = useNavigate(); // for the logo taking you back to the home page
  const handleNavigateScroll = () => {
    navigate("/");
    setTimeout(() => { // giving it a timeout to allow it to navigate then smooth scroll to categories 
      categoryRef.current?.scrollIntoView({ behaviour: "smooth"}); // checking the current page
    }, 500);
    };
    
  return ( // onClick useNavigate to the home page
    <nav>
      <div className="nav-cont-1">
        <h2 className="nav-h2" onClick={() => navigate("/")}> 
          LOTY-<span style={{ fontWeight: "400" }}>store</span>
        </h2>
        <ul className="nav-ul"> 
          <Link to={"/products"}>Products</Link> 

          <span onClick={handleNavigateScroll} className="about-span">Shop</span>
          <Link to={"/about"} href="##">About</Link>
        </ul>
      </div>

      <div className="nav-cont-2">
        {!isLogged && ( //if not logged, do this - sends the login button to the login page
          <button className="login-nav" onClick={() => navigate("/login")}>
          Login
          </button>
        )}
        <AiOutlineSearch size={25} />
        <Link to={"/cart"} href="##" className="cart-icon-cont"> 
          <span className="nav-cart-count">{ //carditemsCount added to the nav bar on 'App.js'
          cartItemsCount}</span>
          <HiShoppingCart
            size={25}
            style={{
              marginRight: "10px",
              marginLeft: "15px",
              marginBottom: "-5px",
            }}
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
