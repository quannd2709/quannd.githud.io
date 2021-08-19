import React, { useEffect, useState } from "react";
import { FormatMoney } from "src/helpers/FormatMoney";
import OrderInforItem from "./OrderInforItem";
// import "./scss/OrderDetail.scss";
import "./scss/OrderInfor.scss";

const OrderInfor = (props) => {
  const products = props.order;
  const [totalPrice, setTotalPrice] = useState(0);
  const [amount, setAmount] = useState(0);
  console.log("productssss:", products);
  const {total, quantity} = props;
  const elm = products.map((item, index) => {
    return <OrderInforItem key={index} item={item} />;
  });

useEffect(() => {
  var total = 0;
  var am= 0;
  console.log("product:",products);
  products.map(item =>{
    total +=item.price;
    am +=item.quanlity;
  })
  console.log('tổng total price:',total);
  setTotalPrice(total);
  setAmount(am);
  }, [totalPrice]);
  return (
    <div className="order-infor-1">
      <div class="label-order-1">Thông tin sản phẩm</div>
      <div className="list-item">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">mã sản phẩm</th>
              <th scope="col">tên sản phẩm</th>
              <th scope="col" className = "th-3">Số lượng </th>
              <th scope="col" className = "th-3">Đơn giá</th>
              <th scope="col" className = "th-3">Thành tiền</th>
            </tr>
          </thead>
          <tbody>{elm}</tbody>
        </table>
        <div className="list-item-amount row">
          <div className="col-lg-6"></div>
          <div className="col-lg-6">
            <div className="amount-1 ">
              <span>Số lượng</span>
              <span>{FormatMoney(quantity)}</span>
            </div>
            <div className="total-money-1">
              <span>Tổng số tiền trả khách</span>
              <span>{FormatMoney(total)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderInfor;
