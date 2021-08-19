import React from 'react';
import { reactLocalStorage } from 'reactjs-localstorage';
import "./scss/CustomerInfor.scss"

const CustomerInfor = (props) => {
    var list = props.list;
    console.log("CustomerInfor:",list);
    
   
    const phone = "chưa có phone number"
    return (
        <div className = "customer-infor-1">
           <div className ="label-customer">
               <div className = "label-1 "><span>Thông tin khách hàng</span></div>
               <div className ="label-2 ">
               <span><i className="fas fa-user-circle fa-2x"></i></span>
               <span >{list.customerName}</span>
               </div>         
           </div>
           <div className = "contact-infor">
               <p>THÔNG TIN LIÊN HỆ</p>
               <p>Email: {list.customerEmail}</p>
               <p>Phone number:{list.customerPhone}</p>
               
           </div>
        </div>
    );
};


export default CustomerInfor;
