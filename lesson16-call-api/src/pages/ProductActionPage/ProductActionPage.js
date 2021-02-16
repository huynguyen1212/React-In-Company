import React, { useState } from "react";
import callApi from "../../utils/apiCaller"

function ProductActionPage(props) {

  const [id, setId] = useState("");
  const [txtName, setTxtName] = useState("");
  const [txtPrice, setTxtPrice] = useState("");
  const [chkbStatus, setChkbStatus] = useState("");

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
    // console.log(id, txtName, txtPrice, chkbStatus);
    callApi("products", "POST",
      {
        name: txtName,
        price: txtPrice,
        status: chkbStatus
      }
    ).then(res => {
      console.log(res);
    })
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
            <input type="checkbox" name="chkbStatus" value={chkbStatus} onChange={onChange} />
            Còn hàng
          </label>
        </div>
        <button type="submit" className="btn btn-primary">Lưu lại</button>
      </form>
    </div>
  );
}

export default ProductActionPage;
