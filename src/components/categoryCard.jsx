import React from "react";

const CategoryCard = ({ imgSrc, title }) => { // takes two props, the image and the title and returns the category
  return (
    <div className="category-card">
      <div className="cat-card-img-cont">
        <img src={imgSrc} alt="category-img" style={{ width: "100%" }} />
      </div>
      <button className="bigText">{title}</button>
    </div>
  );
};

export default CategoryCard;
