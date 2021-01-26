import PropTypes from "prop-types";
import Cart from "../components/Cart";
import CartItem from "../components/CartItem";
import * as Message from "../constants/Message";
import CartResult from "../components/CartResult";
import {
  actChangeMessage,
  actDeleteProductInCart,
  actUpdateProductInCart,
} from "../actions/index";
import { useDispatch, useSelector } from "react-redux";

function CartContainer(props) {
  const cart = useSelector((state) => {
    return state.cart;
  });

  const dispatch = useDispatch();

  const showCartItem = (cart) => {
    var result = (
      <tr>
        <td>{Message.MSG_CART_EMPTY}</td>
      </tr>
    );
    if (cart.length > 0) {
      result = cart.map((item, index) => {
        return (
          <CartItem
            key={index}
            item={item}
            index={index}
            onDeleteProductInCart={(product) => {
              dispatch(actDeleteProductInCart(product));
            }}
            onChangeMessage={(message) => {
              dispatch(actChangeMessage(message));
            }}
            onUpdateProductInCart={(product, quantity) => {
              dispatch(actUpdateProductInCart(product, quantity));
            }}
          />
        );
      });
    }
    return result;
  };

  const showTotalAmount = (cart) => {
    var result = null;
    if (cart.length > 0) {
      return <CartResult cart={cart}></CartResult>;
    }
    return result;
  };

  return (
    <Cart>
      {showCartItem(cart)},{showTotalAmount(cart)}
    </Cart>
  );
}

CartContainer.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        inventory: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
      }),
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default CartContainer;
