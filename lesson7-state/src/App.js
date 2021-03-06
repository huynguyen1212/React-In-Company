import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          name: "Iphone 12 Pro MAX",
          image:
            "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2020/10/da-co-thiet-ke-mau-sac-va-ngay-ra-mat-chinh-thuc-cua-iphone-12-pro3.jpg",
          price: 20000000,
          status: true,
        },
        {
          id: 2,
          name: "Samsung Galaxy J6",
          image:
            "data:image/jpeg;base64,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",
          price: 10000000,
          status: true,
        },
        {
          id: 3,
          name: "Oppo F7",
          image:
            "https://vn-test-11.slatic.net/p/31411ce8b2dc7ac0540df818de835739.jpg_720x720q80.jpg_.webp",
          price: 20000000,
          status: true,
        },
      ],
      isActive: true,
    };
    this.onSetState = this.onSetState.bind(this);
  }

  onSetState() {
    // if (this.state.isActive === true) {
    //   this.setState({
    //     isActive: false,
    //   });
    // } else {
    //   this.setState({
    //     isActive: true,
    //   });
    // }
    this.setState({
      isActive: !this.state.isActive,
    });
  }
  render() {
    var elements = this.state.products.map((product, index) => {
      let result = "";
      if (product.status) {
        result = (
          <tr key={index}>
            <td>{index}</td>
            <td>{product.name}</td>
            <td>
              <span className="label label-success">{product.price} VNĐ</span>
            </td>
          </tr>
        );
      }
      return result;
    });
    return (
      <div className="App">
        <nav className="navbar navbar-inverse">
          <a className="navbar-brand">State</a>
        </nav>

        <div className="container">
          <div className="row">
            <div className="row">
              <table className="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Tên sản phẩm</th>
                    <th>Giá</th>
                  </tr>
                </thead>
                <tbody>{elements}</tbody>
              </table>

              <button
                type="button"
                className="btn btn-warning"
                onClick={this.onSetState}
              >
                Active : {this.state.isActive === true ? "true" : "false"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
