var initialState = [
    {
        id: 1,
        name: "Iphone X",
        price: 400,
        status: true,
    },
    {
        id: 2,
        name: "Samsung galaxy J6",
        price: 500,
        status: false,
    },
    {
        id: 3,
        name: "Oppo F1S",
        price: 200,
        status: true,
    }
];

const products = (state = initialState, action) => {
    switch (action.type) {
        default: return [...state];
    }
};

export default products;