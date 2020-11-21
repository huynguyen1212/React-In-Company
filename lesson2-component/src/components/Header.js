import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse">
        <a className="navbar-brand">Bài 2: Component</a>
        <ul className="nav navbar-nav">
          <li >
            <a>Trang Chủ</a>
          </li>
          <li className="active">
            <a>Danh Mục Sản Phẩm</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
