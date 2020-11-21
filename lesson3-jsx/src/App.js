import React, { Component } from "react";
import "./App.css";

class App extends Component {
  showInforProduct(product) {
    if (product.status) {
      return (
        <h2>
          ID: {product.id} <br />
          Name: {product.name} <br />
          Price: {product.price} VND <br />
          Status: {product.status ? "Active" : "Pending"}
        </h2>
      );
    }
  }
  render() {
    var a = 5,
      b = 7;
    var name = "Huy Nguyen";
    var Product = {
      id: 1,
      name: "Iphone 7 plus",
      price: 20000000,
      status: true,
    };

    var users = [
      {
        id: 1,
        name: "Nguyen Van A",
        tuoi: 13,
      },
      {
        id: 2,
        name: "Nguyen Van B",
        tuoi: 13,
      },
      {
        id: 3,
        name: "Nguyen Van C",
        tuoi: 30,
      },
    ];
    var elements = users.map((user, index) => {
      return (
        <div key={user.id}>
          <h2>Ten : {user.name}</h2>
          <p>Tuoi : {user.tuoi}</p>
        </div>
      );
    });
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <a className="navbar-brand">
            Title
          </a>
          <ul className="nav navbar-nav">
            <li className="active">
              <a>Home</a>
            </li>
            <li>
              <a>Link</a>
            </li>
          </ul>
        </nav>
        <div className="ml-30">
          <h2>
            a : {a} <br />b : {b} <br />a + b = {a + b}
          </h2>
          <hr />
          <h3>name : {name}</h3>
          <hr />
          {this.showInforProduct(Product)}
          <hr />
          {elements}
        </div>
      </div>
    );
  }
}

export default App;
