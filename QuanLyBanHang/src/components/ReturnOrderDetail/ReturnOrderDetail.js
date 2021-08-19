import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { reactLocalStorage } from "reactjs-localstorage";
import { callApi, callApiNotJwt } from "src/apis/ApiCaller";
import { JwtContext } from "src/context/JwtContext";
import CustomerInfor from "../OrderDetail/CustomerInfor";
import InforOrderReturn from "./InforOrderReturn";
import ReturnOrderDetailInfor from "./ReturnOrderDetailInfor";
import "./scss/ReturnOrderDetail.scss";
const ReturnOrderDetail = () => {
  const { jwt } = useContext(JwtContext);
  const [orderDto, setOrderDto] = useState([]);
  const customerInfor = reactLocalStorage.getObject("cInfor");
  const param = useParams();
  const { id, code, createdDate, staffName } = param;
  const [quantity, setQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  console.log("orderDetail:" + id);
  useEffect(() => {
    console.log("types:" + param.id);
    callApiNotJwt(`bill-details/${id}`, "GET", jwt).then((response) => {
      if (response.status !== 200) {
        alert("thao tác thất bại");
        return;
      }
      response.json().then((data) => {
        setOrderDto(data);
        console.log("data of:", data);
        let am = 0;
        let total = 0;
        for (let i = 0; i < data.length; i++) {
          let item = data[i];
          am += item["quanlity"];
          total += item["price"];
          console.log("giá returnorderdetail:",total);
        }
        console.log("amount:", am);
        setQuantity(am);
        setTotalPrice(total);
      });
    });
  }, []);

  return (
    <div>
      <div className="order-detail-label">
        <span>{code}</span>
        <span>{createdDate}</span>
      </div>
      <div className="order-detail-1">
        <div className="row">
          <div className="col-lg-8 ">
            <div className="customer-infor-1">
              <CustomerInfor list={customerInfor} />
            </div>
            <div className="order-infor">
              <ReturnOrderDetailInfor
                quantity={quantity}
                totalPrice={totalPrice}
                order={orderDto}
              />
            </div>

            <div className="total-bill"></div>
          </div>
          <div className="col-lg-4 ">
            <InforOrderReturn staffName = {staffName} code = {code} createdDate = {createdDate} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnOrderDetail;
