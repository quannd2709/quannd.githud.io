import React, { useContext, useEffect, useState } from "react";
import { reactLocalStorage } from "reactjs-localstorage";
import { callApi } from "src/apis/ApiCaller";
import { JwtContext, OrderContext } from "src/context/JwtContext";
import OrderHeader from "./OrderHeader";
import OrderTable from "./OrderTable";
import "./scss/order.scss";
import { CPagination } from "@coreui/react";
import List from "../sale/List";
import NewNotOrder from "src/helpers/NewNotOrder";

const Order = () => {
  const [orderDto, setOrderDto] = useState({});
  const [totalPage, setTotalPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const { jwt } = useContext(JwtContext);
  const acc = reactLocalStorage.getObject("acc");
  console.log(acc);
  const [orderPageable, setOrderPageAble] = useState({
    page: 1,
    limit: 7,
  });

  const [listOrder, setListOrder] = useState([]);
  const [startedTime, setStartedTime] = useState("");
  const [endedTime, setEndTime] = useState("");

  useEffect(() => {
    console.log("useeffect:", orderPageable);
    console.log(acc.token);
    callApi("order", "post", orderPageable, jwt).then((response) => {
      if (response.status !== 200) {
        alert("thao tác thất bại");
        return;
      }
      response.json().then((data) => {
        console.log("date  now---------------", new Date());
        console.log("size data:", data.length);
        setOrderDto(data);
        console.log("order give:", data);
        setTotalPage(Math.ceil(data.totalItem / orderPageable.limit));
        setListOrder(data.resultItem);
      });
    });
  }, [orderPageable]);

  /**-------------------------------------------------
   * filter and search order
   */

  const getInput = (e) => {
    let { name, value } = e.target;
    console.log(name + value);
    setOrderPageAble({ ...orderPageable, [name]: value });
    console.log(orderPageable);
  };

  const getDate = (startedTime, endedTime) => {
    console.log("------------------started", startedTime);
    console.log("kiểu:", typeof op);
    setOrderPageAble({
      ...orderPageable,
      startedTime: startedTime,
      endedTime: endedTime,
    });
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
      <OrderContext.Provider value={{ setStartedTime, setEndTime }}>
        <OrderHeader inputs={getInput} getDate={getDate} />
        {
          listOrder.length
          ?
        <div className="order-table-pagination">         
          <OrderTable type="order" lists={listOrder} />
          <CPagination
            doubleArrows={true}
            activePage={orderPageable.page}
            pages={totalPage}
            onActivePageChange={getPage}
          />
        </div>
        : 
        <NewNotOrder />
}
      </OrderContext.Provider>
    </div>
  );
};

export default Order;
