import React, { Component } from "react";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";

export default class Details extends Component {
  render() {
    const { id, products } = this.props;

    const filteredProducts = products
      .filter(product => {
        return product.prodid === id;
      })
      .map(product => {
        return (
          <div className="container py-5" key={id}>
            {/* title */}
            <div className="row">
              <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                <h1>{product.name}</h1>
              </div>
            </div>
            {/* end of title */}
            <div className="row">
              <div className="col-10 mx-auto col-md-6 my-3">
                <img src={product.allImages[0]} className="img-fluid" alt="" />
              </div>
              </div>
              {/* prdoduct info */}
              <div className="row">
              <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                  design by :{" "}
                  <span className="text-uppercase">{product.design}</span>
                </h4>
                <h4 className="text-blue">
                  <strong>
                    price : <span>£</span>
                    {product.cost}
                  </strong>
                </h4>
                {/* buttons */}
                <div>
                  <Link to="/">
                    <ButtonContainer>back to products</ButtonContainer>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      });
    return <div>{filteredProducts}</div>;
  }
}
