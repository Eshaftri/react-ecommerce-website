import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const Product = props => {

    const { prodid, name, allImages, cost } = props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
           
                <div
                  className="img-container p-5" onClick={()=> props.onDetail(prodid)}>
                  <Link to="/details">
                    <img src={allImages[0]} alt={name} className="card-img-top" />
                  </Link>
                </div>

          <div className="card-footer d-flex justify-content-between">
            <p className=" mb-0 ">{name}</p>
            <h5 className="text-blue font-italic mb-3">
              <span className="mr-1">£</span>
              {cost}
            </h5>
          </div>
        </div>
      </ProductWrapper>
    );
  
}

export default Product; 

const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 1s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 1s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
  
  .img-container:hover {
    transform: translate(0, 0);
  }
  
`;
