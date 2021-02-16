import React, { useEffect, useState } from "react";
import ProductList from "../../components/ProductList/ProductList"
import ProductItem from "../../components/ProductItem/ProductItem"
// import { useSelector } from "react-redux";
import callApi from "../../utils/apiCaller"
import { Link } from "react-router-dom"

function ProductListPage(props) {
  // const products = useSelector((state) => {
  //   return state.products;
  // });

  const [products, setProducts] = useState("");

  useEffect(() => {
    callApi("products", "GET", null).then(
      res => {
        setProducts(res.data);
      }
    )
  }, [props]);

  const showProducts = (products) => {
    var result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <ProductItem
            key={index}
            product={product}
            index={index}
          />
        )
      })
    }
    return result;
  }
  return (
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <Link to = "product/add" className="btn btn-info mb-10">
        Thêm sản phẩm
      </Link>
      <ProductList>
        {showProducts(products)}
      </ProductList>
    </div>
  );
}

export default ProductListPage;
