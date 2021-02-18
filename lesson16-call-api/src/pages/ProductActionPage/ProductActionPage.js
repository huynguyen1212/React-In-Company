import React, { useState, useEffect } from "react";
import callApi from "../../utils/apiCaller"
import { Link, useHistory } from "react-router-dom";

function ProductActionPage(props) {

  const [id, setId] = useState("");
  const [txtName, setTxtName] = useState("");
  const [txtPrice, setTxtPrice] = useState("");
  const [chkbStatus, setChkbStatus] = useState("");

  let history = useHistory();

  useEffect(() => {
    var { match } = props;
    if (match) {
      var id = match.params.id;
      callApi(`products/${id}`, 'GET', null).then(res => {
        var data = res.data;
        setId(data.id);
        setTxtName(data.name);
        setTxtPrice(data.price);
        setChkbStatus(data.status);
      })
    }
  }, [props]);

  const onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    if (name == "id") {
      setId(value);
    }
    else if (name == "txtName") {
      setTxtName(value);
    }
    else if (name == "txtPrice") {
      setTxtPrice(value);
    }
    else if (name == "chkbStatus") {
      setChkbStatus(value)
    }
  };

  const onSave = (e) => {
    e.preventDefault();
    if (id) {
      callApi(`products/${id}`, "PUT",
        {
          name: txtName,
          price: txtPrice,
          status: chkbStatus
        }
      ).then(res => {
        history.push("/product-list");
      })
    }
    else {
      callApi("products", "POST",
        {
          name: txtName,
          price: txtPrice,
          status: chkbStatus
        }
      ).then(res => {
        history.push("/product-list");
      })
    }
  }

  return (
    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
      <form onSubmit={onSave}>
        <div className="form-group">
          <label>Tên sản phẩm : </label>
          <input type="text" className="form-control" name="txtName" value={txtName} onChange={onChange} />
        </div>
        <div className="form-group">
          <label>Giá : </label>
          <input type="number" className="form-control" name="txtPrice" value={txtPrice} onChange={onChange} />
        </div>
        <label>Trạng thái :</label> <br />
        <div className="checkbox">
          <label>
            <input type="checkbox" name="chkbStatus" value={chkbStatus} onChange={onChange} checked={chkbStatus} />
            Còn hàng
          </label>
        </div>
        <Link to="/product-list" className="btn btn-danger mr-10">
          Trở lại
        </Link>
        <button type="submit" className="btn btn-primary">Lưu lại</button>
      </form>
    </div>
  );
}

export default ProductActionPage;
