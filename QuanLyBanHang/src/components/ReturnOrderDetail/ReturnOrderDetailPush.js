import React, { useContext, useEffect, useState } from 'react';
import { callApiNotJwt } from 'src/apis/ApiCaller';
import { JwtContext } from 'src/context/JwtContext';
import InformNew from 'src/helpers/InformNew';
import { dataDay } from '../Customer/data';
import CustomerInfor from '../OrderDetail/CustomerInfor';
import InforOrderReturn from './InforOrderReturn';
import ReturnOrderDetailInfor from './ReturnOrderDetailInfor';

const ReturnOrderDetailPush = () => {
    const [orderReturn, setOrderReturn] = useState({customerName:"",customerEmail:"",
    customerPhone:"",code:"",createdDate:"",staffName:"",billDetailDtoList:[]                    
});
    const [news , setNews] = useState("thanh cong");
    const { jwt } = useContext(JwtContext);
    const[customerInfor,setCustomerInfor] = useState({
        customerName:"", customerPhone:"",customerEmail:""
    });  
    const [quantity, setQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
        callApiNotJwt("bill-details", "GET", jwt).then((response) => {
          if (response.status !== 200) {
            alert("thao tác thất bại");
            return;
          }
          response.json().then((data) => {
            setCustomerInfor({
                customerName:data.customerName,
                customerPhone:data.customerPhone,
                customerEmail:data.customerEmail
            })
            setOrderReturn(data);
            console.log("data of:", data);
            let am = 0;
            let total = 0;
            for (let i = 0; i < data.billDetailDtoList.length; i++) {
              let item = data.billDetailDtoList[i];
              am += item["quanlity"];
              total += item["price"];
              console.log("giá returnorderdetail:",total);
            }
            console.log("amount:", am);
            setQuantity(am);
            setTotalPrice(total);
          });
        });
      }, [news]);
    return (
        <div>
        <div className="order-detail-label">
          <span>{orderReturn!=null ? orderReturn.code:""}</span>
          <span>{orderReturn!=null? orderReturn.createdDate: ""}</span>
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
                  order={orderReturn.billDetailDtoList}
                />
              </div>
  
              <div className="total-bill"></div>
            </div>
            <div className="col-lg-4 ">
              <InforOrderReturn staffName = {orderReturn.staffName} code = {orderReturn.code} createdDate = {orderReturn.createdDate} />
            </div>
          </div>
         
        </div>
      </div>
    );
}

export default ReturnOrderDetailPush;
