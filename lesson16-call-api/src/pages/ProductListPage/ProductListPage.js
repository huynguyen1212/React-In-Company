import React, { useEffect, useState } from "react";
import ProductList from "../../components/ProductList/ProductList"
import ProductItem from "../../components/ProductItem/ProductItem"
import { useSelector, useDispatch } from "react-redux";
// import callApi from "../../utils/apiCaller"
import { Link } from "react-router-dom"
import { actDeleteProductRequest, actFetchProductsRequest } from "../../actions/index";

function ProductListPage(props) {
  const products = useSelector((state) => {
    return state.products;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actFetchProductsRequest());
  }, [props]);

  const onDelete = (id) => {
    dispatch(actDeleteProductRequest(id));
  }

  const showProducts = (products) => {
    var result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <ProductItem
            key={index}
            product={product}
            index={index}
            onDelete={onDelete}
          />
        )
      })
    }
    return result;
  }

  return (
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <Link to="product/add" className="btn btn-info mb-10">
        Thêm sản phẩm
      </Link>
      <ProductList>
        {showProducts(products)}
      </ProductList>
    </div>
  );
}

export default ProductListPage;
