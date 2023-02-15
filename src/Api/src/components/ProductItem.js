import React from "react";
import { Link } from "react-router-dom";

function ProductItem({ data }) {
  return (
    <div className="product-item">
      <div className="product-image">
        <Link to={`${data.id}`}>
          <img src={data.image} alt="" />
        </Link>
      </div>
      <div className="product-content">
        <p>{data.title}</p>
        <h5>${data.price}</h5>
        <Link to={`${data.id}`}>
          <button className="btn">Buy Now</button>
        </Link>
      </div>
    </div>
  );
}

export default ProductItem;
