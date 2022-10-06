import React, { Fragment, useEffect, useState } from "react";
import Product from "./product";
import "./productlist.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const apiUrl = "https://fakestoreapi.com/products";
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <Fragment>
      <h2 className="text-center">Our Products</h2>
      <div className="container">
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-3" key={product.id}>
                <Product product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};
export default ProductList;
