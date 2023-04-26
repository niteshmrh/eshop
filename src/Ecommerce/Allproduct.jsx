import React, { useState, useEffect } from "react";
import "./Allproduct.css";
import { Link, useNavigate } from "react-router-dom";

function Allproduct(props) {
  const [products, fetchProducts] = useState([]);
  const navigate = useNavigate();
  const getData = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        fetchProducts(res);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  if (!products) {
    return <p style={{ fontSize: "50px", textAlign: "center" }}>Loading...</p>;
  }

  console.log(products);
  return (
    <div className="latestproduct">
      <div>
        <h1 style={{ textAlign: "center" }}>Latest Product</h1>
      </div>
      <div className="row">
        {products.map((item, index) => {
          return (
            <div className="col" key={index}>
              <div>
                <div className="item-images">
                  <Link to={`/product/${item.id}`}>
                    {/* Link ke through is trh se krte h */}
                    <img
                      src={item.image}
                      className="item-images"
                      height="206px"
                      width="162px"
                    />
                  </Link>
                </div>
                <div className="details" style={{ textAlign: "center" }}>
                  <div className="item-title">{item.title}</div>
                  <div className="item-price">$&nbsp;{item.price}</div>
                  {/* <Link to={`/product/${item.id}`}> */}
                  <button
                    className="buy-button"
                    onClick={() => {
                      navigate(`/product/${item.id}`); // navigate ke through is trjh sekrenge
                    }}
                  >
                    BUY NOW
                  </button>
                  {/* </Link> */}
                  {/* </Link> */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Allproduct;
