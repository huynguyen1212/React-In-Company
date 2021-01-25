import * as types from "../constants/ActionType";
var data = JSON.parse(localStorage.getItem("CART"));
var initialState = [
  {
    product: {
      id: 1,
      name: "Iphone 7 Plux",
      image:
        "https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/282227484.jpeg",
      description: "Do Apple sản xuất",
      price: 500,
      inventory: 10,
      rating: 4,
    },
    quantity: 5,
  },
  {
    product: {
      id: 2,
      name: "Samsung galaxy S10",
      image:
        "https://halomobile.vn/wp-content/uploads/2017/12/samsung-galaxy-s8-plus-g955fd-4g-64gb-dual-cafg48.jpg",
      description: "Do Samsung sản xuất",
      price: 100,
      inventory: 20,
      rating: 3,
    },
    quantity: 3,
  },
];

const cart = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      return [...state];
    default:
      return [...state];
  }
};

export default cart;
