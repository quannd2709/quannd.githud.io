import React, { useContext, useEffect, useState } from "react";
import { callApi, callApiNotJwt } from "src/apis/ApiCaller";
import OrderHeader from "../Order/OrderHeader";
import ReturnOrderList from "./ReturnOrderList";
import "./../Order/scss/order.scss";
import { JwtContext } from "src/context/JwtContext";
import { Dropdown, Modal } from "react-bootstrap";
import Login from "src/views/pages/login/Login";
import Order from "../Order/Order";
import Logins from "../Login/Login";
import OrderModal from "../Order/OrderModal";
import { CPagination } from "@coreui/react";
import NewNotOrder from "src/helpers/NewNotOrder";

const ReturnOrder = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { jwt } = useContext(JwtContext);
  const [totalPage, setTotalPage] = useState();
  const [orderPageable, setOrderPageAble] = useState({
    page: 1,
    limit: 7,
    inputOrder: "",
    orderTime: "",
  });
 const [isCheck, setIscheck] = useState(false);
  const getDate = (startedTime, endedTime) => {
    console.log("------------------started", startedTime);
    console.log("kiểu:", typeof op);
    setOrderPageAble({
      ...orderPageable,
      startedTime: startedTime,
      endedTime: endedTime,
    });
  };
  const [listOrder, setListOrder] = useState([]);

  useEffect(() => {
    console.log("useeffect:" + orderPageable);

    callApi("bill", "post", orderPageable, jwt).then((response) => {
      console.log("trả về:", response);
      if (response.status !== 200) {
        alert("thao tác thất bại");
        setListOrder([]);
        return;
      } else {
        response.json().then((data) => {
          console.log(data);
          console.log("length",(data.resultList.length));
          if(data.resultList.length==0){
            setListOrder([]);
            setIscheck(true);
          }else{
            setIscheck(false);
            setListOrder(data.resultList);      
          }
          setTotalPage(Math.ceil(data.totalItem / orderPageable.limit));
        });
      }
    });
  }, [orderPageable, show]);

  /**
   * filter and search order
   */

  const getInput = (e) => {
    let { name, value } = e.target;
    console.log(name + value);
    setOrderPageAble({ ...orderPageable, [name]: value });
    console.log(orderPageable);
  };

  const getPage = (page) => {
    console.log("trang:", page);
    if (page == 0) {
      page = 1;
    }
    setOrderPageAble({ ...orderPageable, page: page });
  };

  return (
    <div className="list-order">
      <div className="order-1 ">
        <OrderHeader inputs={getInput} getDate={getDate} />
        <div className="btn-create">
          <button onClick={handleShow}>Trả hàng</button>
        </div>
      </div>
      {!isCheck? (
        <div className="order-pagination">
          <ReturnOrderList lists={listOrder} />
          <CPagination
            doubleArrows={true}
            activePage={orderPageable.page}
            pages={totalPage}
            onActivePageChange={getPage}
          />
        </div>
      ) : (
        <NewNotOrder />
      )}

      {show ? <OrderModal show={show} setShow={setShow} /> : ""}
    </div>
  );
};

export default ReturnOrder;
