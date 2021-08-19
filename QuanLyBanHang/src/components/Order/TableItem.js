import React from 'react';
import {useHistory} from 'react-router-dom'
import { reactLocalStorage } from 'reactjs-localstorage';
import { FormatMoney } from 'src/helpers/FormatMoney';
import "./scss/TableItem.scss"
const TableItem = (props) => {  
 
  const history = useHistory();

    // const {id,code, name, price, createdDate}= props;
    const {item,index, type} = props;
    const d = new Date(item.createdDate);
    var option = {day:"numeric",month:"2-digit",year:'numeric', hour:'2-digit',minute:'2-digit',hour24 :true};
    var options = {day:"numeric",month:"2-digit",year:'numeric'}
    const times=d.toLocaleDateString();
    console.log("**********",item.createdDate);
    var customerInfor = {
      customerName: item.customerName,
      customerPhone:item.customerPhone,
      customerEmail:item.customerEmail
    }
    console.log("customInf:",item.createdDate);
    var dates = new Date(item.createdDate);
    var dateString = dates.getFullYear()+'-'+('0'+(dates.getMonth()+1)).slice(-2)+'-'+('0'+dates.getDate()).slice(-2);
    console.log("------------",dates);
    const redirectDetail = ()=>{
      var location ={};
      if(type=="order"){
        console.log("-----type order");
         location = {
          pathname: `/order/order-detail/${item.id}/${item.code}/${dateString}/${item.staffName}`, 
          state:{item:item}  
        }
      }else{
         location = {
          pathname: `/create-order-return/${item.id}/${item.code}/${dateString}`, 
          state:{item:item}  
        }
      }
     
    history.push (location);
    reactLocalStorage.setObject('infor', customerInfor);
    }
    return (   
         <tr className = "table-row-1"  onClick ={redirectDetail}> 
            <th >{item.code}</th>
            <td >{item.customerName}</td>
            <td >{item.createdDate}</td>
            <td className = "hh">{FormatMoney(item.discount)}</td>
            <td className = "hh">{FormatMoney(item.price)}</td>
           
          </tr>
    );
};




export default TableItem;
