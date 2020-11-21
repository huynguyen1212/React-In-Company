import React, { Component } from "react";

class Product extends Component {
  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div className="thumbnail">
          <img
            data-src=""
            alt=""
            src="https://yeusimso.com/wp-content/uploads/2020/07/iphone-12.jpg"
          />
          <div className="caption">
            <h3>Iphone 12 Pro MAX</h3>
            <p>20000$</p>
            <button type="button" className="btn btn-success">
              Mua hàng
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
