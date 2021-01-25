import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Cart from "../components/Cart";
import CartItem from "../components/CartItem";
import * as Message from "../constants/Message";
import CartResult from "../components/CartResult";

class CartContainer extends Component {
  render() {
    var { cart } = this.props;
    return (
      <Cart>
        {this.showCartItem(cart)},{this.showTotalAmount(cart)}
      </Cart>
    );
  }

  showCartItem = (cart) => {
    var result = (
      <tr>
        <td>{Message.MSG_CART_EMPTY}</td>
      </tr>
    );
    if (cart.length > 0) {
      result = cart.map((item, index) => {
        return <CartItem key={index} item={item} index={index}></CartItem>;
      });
    }
    return result;
  };

  showTotalAmount = (cart) => {
    var result = null;
    if (cart.length > 0) {
      return <CartResult cart={cart}></CartResult>;
    }
    return result;
  };
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

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps, null)(CartContainer);