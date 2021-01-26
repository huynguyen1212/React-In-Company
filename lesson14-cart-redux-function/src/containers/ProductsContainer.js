import Products from "../components/Products";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import PropTypes from "prop-types";
import { actAddToCart, actChangeMessage } from "../actions/index";

function ProductsContainer(props) {
  const products = useSelector((state) => state.products);

  const dispatch = useDispatch();

  const showProducts = (products) => {
    var result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <Product
            key={index}
            product={product}
            onAddToCart={(product) => {
              dispatch(actAddToCart(product, 1));
            }}
            onChangeMessage={(message) => {
              dispatch(actChangeMessage(message));
            }}
          />
        );
      });
    }
    return result;
  };

  return <Products>{showProducts(products)}</Products>;
}

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      inventory: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ProductsContainer;
