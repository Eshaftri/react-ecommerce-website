import React from "react";
import Product from "./Product";
import Title from "./Title";

const ProductList = props => {
  const product = props.products.map(product => {
    return <Product key={product.prodid} product={product} {...props} />;
  });
  return (
    <React.Fragment>
      <div className="py-5">
        <div className="container">
          <Title name="our" title="products" />
          <div className="row">{product}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductList;
