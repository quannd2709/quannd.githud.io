import React, { useEffect, useState } from 'react';
import { FormatMoney } from 'src/helpers/FormatMoney';
import OrderInforItem from '../OrderDetail/OrderInforItem';
import ReturnOrderDetailItem from './ReturnOrderDetailItem';
import './scss/ReturnOrderDetailInfor.scss'
const ReturnOrderDetailInfor = ({order, quantity, totalPrice}) => {

  console.log("product-------:", order);
  console.log("total price:",quantity);
  const elm = order.map((item, index) => {
    return (
      <ReturnOrderDetailItem
        key = {index}
        item = {item}
      />
    );
  });

  return (
    <div className="order-infor-1">
      <div class="label-order">Thông tin sản phẩm</div>
      <div className="list-item">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">mã sản phẩm</th>
              <th scope="col">tên sản phẩm</th>
              <th className = 'th-1' scope="col">số lượng </th>
              <th  className = 'th-1' scope="col">giá hàng trả</th>
              <th className = 'th-1' scope="col">Thành tiền</th>
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
              <span>{FormatMoney(totalPrice)}</span> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReturnOrderDetailInfor;
