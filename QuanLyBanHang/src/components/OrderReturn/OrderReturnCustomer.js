import { CButton } from "@coreui/react";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { reactLocalStorage } from "reactjs-localstorage";
import { callApi, callApiNotJwt } from "src/apis/ApiCaller";
import { JwtContext } from "src/context/JwtContext";
import { FormatMoney } from "src/helpers/FormatMoney";
import Swal from "sweetalert2";
import CustomerInfor from "../OrderDetail/CustomerInfor";
import List from "../sale/List";
import OrderReturnCustomerItem from "./OrderReturnCustomerItem";
import "./scss/OrderReturnCustomer.scss";
import WarrantyProduct from "./WarrantyProduct";
const OrderReturnCustomer = ({ item }) => {
  const { jwt } = useContext(JwtContext);
  const customerInfor = reactLocalStorage.getObject("infor");
  const [orderDto, setOrderDto] = useState([]);
  const param = useParams();
  const { id, code,createdDate } = param;
  const [payMoney,setPayMoney] = useState(0);
  const [amount,setAmount] = useState(0);
  const [total,setTotal] = useState(0);
  const [billDto, setBillDto] = useState({});
  const [orderDetails, setOrderDetails] = useState([]);
  const [isState, setIsState] = useState(false);
  const [isShow, setIsShow] = useState(false);
 const history = useHistory();
  useEffect(() => {
    console.log("types:" + param.id);
    callApiNotJwt(`order-details/${id}`, "GET", jwt).then((response) => {
      console.log("trả về:",response);
      if (response.status !== 200) {
        return;
      }
      response.json().then((data) => {
        console.log("orderDetail:", data);
        setOrderDto(data);
       
      });
    });
    var dateNow = new Date();
    var offset = 60*60*1000*24;
    var myDate = new Date(createdDate);
    var moneyPay = 0;
    console.log("hello",isShow);
    if(dateNow.getTime()-(offset*30)>myDate.getTime()){
      setIsShow(true);
      console.log("hello",isShow);
      console.log("het bao hanh");
      moneyPay=100;
      setPayMoney(100);
    }else if(dateNow.getTime()-(offset*7)<myDate.getTime()){
      console.log("trừ 7 ngày:",(dateNow.setDate(dateNow.getDate()-7)));
      console.log("trả 100%");
      moneyPay=100;
      setPayMoney(100);
     
    }else {
      console.log("trả 70%");
      moneyPay=70;
      setPayMoney(70);
    }
    let val = 0;
    let totalMoney = 0;
    if(orderDetails.length!==0){
      for (const ob of orderDetails) {
        val += ob['amountPay'];
        totalMoney += ob['amountPay']*((ob.priceProduct)*moneyPay/100);
        setAmount(val);
        setTotal(totalMoney);
      }
    }else{
      setAmount(0);
      setTotal(0);
    }
    let orderDetailDtos = orderDetails.map(item =>{
      console.log("----------+++++",item);
      return {
        id:item.id,
        amountPay:item.amountPay,
        price:item.price
      }
    })
    setBillDto({
      orderId:id,
      price:total,
      orderDetailDtos:orderDetailDtos
    })
    
  }, [amount,total, isState,orderDetails]);
// ------------------------functions------------------------
const getOrderDetail = (item)=>{
  console.log("++++++++++++++++",item);
  if(orderDetails.length ===0){
    setOrderDetails([item]);
    console.log ("=0");
    setAmount(item.amount);
  }else{
    console.log("khac 0");
    let check =false;
    for (const ob of orderDetails) {
      if(ob['id']==item['id']){
        console.log("=nhau");
        ob['amountPay'] = item['amountPay'];
        ob['price'] = item['price'];
        check= true;
      }
    }
    if(check === false){
      setOrderDetails([...orderDetails,item]);
    }
  }
 console.log("orderDetail---------",orderDetails);
console.log("orderBillDto",billDto);
 setIsState(!isState);
}

const getPay =()=>{
  console.log("danh sách đơn trả hàng:",orderDetails);
 
  console.log("billDto",billDto);
  callApi("bills", "POST",billDto, jwt).then((response) => {
    // console.log("trả về:",ré)
    if (response.status !== 200) {
      alert("thao tác thất bại");
      return;
    }else{
      
    }
    response.json().then((data) => {
      console.log(data);
      history.push("/return/return-order-detail")
      alert("thành công");

     
    });
  });

}
  return (
    <div className="create-return-order">
      <div className="lable">
        <p>Tạo đơn trả hàng</p>
      </div>
      <div className="order-return-content">
        <div className="row">
          <div className="col-lg-8">
            <div className="content-right">
              <div className="label-product">
                <span>Thông tin sản phẩm-đơn hàng</span>
                <span>({code})</span>
              </div>
              <div className="table-product">
                <table className="table ">
                  <thead>
                    <tr>
                      <th scope="col">Mã sản phẩm</th>
                      <th scope="col">Tên sản phẩm</th>
                      <th scope="col">Số lượng trả</th>
                      <th scope="col">Giá bán ra</th>
                      <th className="th-3" scope="col">
                        Giá hàng trả
                      </th>
                      <th scope="col">Thành tiền</th>
                    </tr>
                  </thead>
                  <tbody>
                    <List
                      data={orderDto}
                      render={(item, index) => (
                        <OrderReturnCustomerItem
                          dismount ={payMoney}
                          key={index}
                          item={item}
                          index={index}
                          getOrderDetail = {getOrderDetail}
                        />
                      )}
                    />
                  </tbody>
                </table>
              </div>
              <div className="content-end">
                <div className="row">
                  <div className="col-lg-5"></div>
                  <div className="col-lg-7">
                    <div className="amount">
                      <span>Số lượng</span>
                      <span>{amount}</span>
                    </div>
                    <div className="total-money">
                      <span>Tổng số tiền trả khách</span>
                      <span>{FormatMoney(total)}</span>
                    </div>
                  </div>
                </div>  
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="content-left">
              <CustomerInfor list={customerInfor} />
            </div>
          </div>
        </div>
      </div>
      <div className = "btn-end">
      <CButton className = "btn-1" color="primary" onClick = {getPay} >Trả  hàng</CButton>
      </div>
      <WarrantyProduct createdDate = {createdDate} isShow={isShow} setShow= {setIsShow} />
    </div>
  );
};

export default OrderReturnCustomer;
