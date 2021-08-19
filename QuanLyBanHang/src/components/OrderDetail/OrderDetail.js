import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { reactLocalStorage } from "reactjs-localstorage";
import { callApiNotJwt } from "src/apis/ApiCaller";
import { JwtContext } from "src/context/JwtContext";
import InforOrderReturn from "../ReturnOrderDetail/InforOrderReturn";
import CustomerInfor from "./CustomerInfor";
import OrderInfor from "./OrderInfor";
import "./scss/OrderDetail.scss";

const OrderDetail = () => {
  const { jwt } = useContext(JwtContext);
  const customerInfor = reactLocalStorage.getObject("infor");
  const [orderDto, setOrderDto] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);
  const param = useParams();
  const { id, code, createdDate, staffName } = param;
  console.log("orderDetail:" + id + "/" + code);
  useEffect(() => {
    console.log("types:" + param.id);
    callApiNotJwt(`order-details/${id}`, "GET", jwt).then((response) => {
      if (response.status !== 200) {
        alert("thao tác thất bại");
        return;
      }
      response.json().then((data) => {
        setOrderDto(data);
        let am = 0;
        let total = 0;
        for (let i = 0; i < data.length; i++) {
          let item = data[i];
          am += item["quanlity"];
          total += item["price"];
        }
        setTotal(total);
        setQuantity(am);
      });
    });
  }, []);

  return (
    <div>
      <div className="order-detail-code">
        <span>{code}</span>
        <span>{createdDate}</span>
      </div>
      <div className="order-detail">
        <div className="row">
          <div className="col-lg-8 ">
            <div className="customer-infor">
              <CustomerInfor list={customerInfor} />
            </div>
            <div className="order-infor">
              <OrderInfor quantity={quantity} total={total} order={orderDto} />
            </div>
          </div>
          <div className="col-lg-4">
          <InforOrderReturn staffName = {staffName} code = {code} createdDate = {createdDate} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
