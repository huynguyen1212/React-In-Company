import * as Message from "../constants/Message";

function CartItem(props) {
  var { item } = props;
  const onUpdateQuantity = (product, quantity) => {
    var { onUpdateProductInCart, onChangeMessage } = props;
    onUpdateProductInCart(product, quantity);
    onChangeMessage(Message.MSG_UPDATE_CART_SUCCESS);
  };

  const onDelete = (product) => {
    var { onDeleteProductInCart, onChangeMessage } = props;
    onDeleteProductInCart(product);
    onChangeMessage(Message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
  };

  const subTotal = (price, quantity) => {
    return price * quantity;
  };

  return (
    <tr>
      <th scope="row">
        <img
          src={item.product.image}
          alt={item.product.name}
          className="img-fluid z-depth-0"
        />
      </th>
      <td>
        <h5>
          <strong>{item.product.name}</strong>
        </h5>
      </td>
      <td>{item.product.price}$</td>
      <td className="center-on-small-only">
        <span className="qty">{item.quantity} </span>
        <div className="btn-group radio-group" data-toggle="buttons">
          <label
            onClick={() => onUpdateQuantity(item.product, item.quantity - 1)}
            className="btn btn-sm btn-primary
                            btn-rounded waves-effect waves-light"
          >
            <a>—</a>
          </label>
          <label
            onClick={() => onUpdateQuantity(item.product, item.quantity + 1)}
            className="btn btn-sm btn-primary
                            btn-rounded waves-effect waves-light"
          >
            <a>+</a>
          </label>
        </div>
      </td>
      <td>{subTotal(item.product.price, item.quantity)}$</td>
      <td>
        <button
          type="button"
          className="btn btn-sm btn-primary waves-effect waves-light"
          data-toggle="tooltip"
          data-placement="top"
          title=""
          data-original-title="Remove item"
          onClick={() => {
            onDelete(item.product);
          }}
        >
          X
        </button>
      </td>
    </tr>
  );
}

export default CartItem;
