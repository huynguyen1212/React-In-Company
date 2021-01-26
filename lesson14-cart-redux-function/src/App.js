import React, { useState } from "react";
import Header from "./components/Header";
import ProductsContainer from "./containers/ProductsContainer";
import CartContainer from "./containers/CartContainer";
import Footer from "./components/Footer";
import MessageContainer from "./containers/MessageContainer";

function App(props) {
  return (
    <div>
      <Header />
      <main id="mainContainer">
        <div className="container">
          <ProductsContainer />
          <MessageContainer />
          <CartContainer />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
