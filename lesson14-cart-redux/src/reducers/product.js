var initialState = [
  {
    id: 1,
    name: "Iphone 7 Plux",
    image: "",
    description: "Do Apple sản xuất",
    price: 500,
    inventory: 10,
  },
  {
    id: 2,
    name: "Samsung galaxy S10",
    image: "",
    description: "Do Samsung sản xuất",
    price: 100,
    inventory: 20,
  },
  {
    id: 3,
    name: "Iphone X Plux",
    image: "",
    description: "Do Apple sản xuất",
    price: 1000,
    inventory: 15,
  },
];

const product = (state = initialState, action) => {
  switch (action.type) {
    default:
      return [...state];
  }
};

export default product;
