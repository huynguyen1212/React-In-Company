var initialState = [
  {
    id: 1,
    name: "Iphone 7 Plux",
    image:
      "https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/282227484.jpeg",
    description: "Do Apple sản xuất",
    price: 500,
    inventory: 10,
    rating: 4,
  },
  {
    id: 2,
    name: "Samsung galaxy S10",
    image:
      "https://halomobile.vn/wp-content/uploads/2017/12/samsung-galaxy-s8-plus-g955fd-4g-64gb-dual-cafg48.jpg",
    description: "Do Samsung sản xuất",
    price: 100,
    inventory: 20,
    rating: 3,
  },
  {
    id: 3,
    name: "Iphone X Plux",
    image:
      "https://shopdunk.com/wp-content/uploads/2019/07/iphone-x-1-min-compressor.jpg",
    description: "Do Apple sản xuất",
    price: 1000,
    inventory: 15,
    rating: 5,
  },
];

const products = (state = initialState, action) => {
  switch (action.type) {
    default:
      return [...state];
  }
};

export default products;
