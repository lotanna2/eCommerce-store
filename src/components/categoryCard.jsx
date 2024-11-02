import React from "react";
import { useNavigate } from "react-router-dom";
import { ALLOWED_CATEGORIES } from "../routes";

const CategoryCard = ({ imgSrc, title }) => { // takes two props, the image and the title and returns the category
  const navigate = useNavigate()
  return (
    <div className="category-card">
      <div className="cat-card-img-cont">
        <img src={imgSrc} alt="category-img" style={{ width: "100%" }} />
      </div> 
      <button className="bigText" onClick={()=> navigate( // navigating through the different product categories, if the title is women it will allow women if not it will bring men
        `/products/${
          title === "women's"
          ? ALLOWED_CATEGORIES.WOMENS
          : ALLOWED_CATEGORIES.MENS
        }`
        )
       }
      >
       {title}</button>
    </div>
  );
};

export default CategoryCard;
