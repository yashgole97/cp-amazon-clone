import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, price, rating, image }) {
  const [{}, dispatch] = useStateValue();
  const addToBasket = () => {
    //  Add item to basket...
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        // if i will map thru the props like id: id, title: title, I can use something like:
        id,
        title,
        price,
        rating,
        image,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating).fill(
            <span role="img" aria-label="stars">
              ⭐
            </span>
          )}
        </div>
      </div>
      <img className="product__image" src={image} alt="product_image" />
      <button className="product__button" onClick={addToBasket}>
        Add to basket
      </button>
    </div>
  );
}

export default Product;
