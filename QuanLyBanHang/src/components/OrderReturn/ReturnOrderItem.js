import React from 'react';
import { useHistory } from 'react-router-dom';
import { reactLocalStorage } from 'reactjs-localstorage';
import { FormatMoney } from 'src/helpers/FormatMoney';
import './scss/ReturnOrderItem.scss'
const ReturnOrderItem = (props) => {
    const history = useHistory();
    const item = props.item;
    const d = new Date(item.createdDate);
    var option = {day:"numeric",month:"2-digit",year:'numeric', hour:'2-digit',minute:'2-digit'};
    const times=d.toLocaleDateString("ja-JP", option)
    var customerInfor = {
      customerName: item.customerName,
      customerPhone:item.customerPhone,
      customerEmail:item.customerEmail
    }
    const redirectDetail = ()=>{
      var dates = new Date(item.createdDate);
      var stringDate = dates.getFullYear()+'-'+('0'+(dates.getMonth()+1)).slice(-2)+'-'+('0'+dates.getDate()).slice(-2);
      const location = {
        pathname: `/return/return-order-detail/${item.id}/${item.code}/${stringDate}/${item.staffName}`, 
        state:{item:item}  
      }
    history.push (location);
    reactLocalStorage.set("bPrice",item.price);
    reactLocalStorage.setObject("cInfor",customerInfor);
    }
    return (   
         <tr className = "table-row-2" onClick ={redirectDetail}> 
            <th scope="row">{item.codeOrder}</th>
            <th scope="row">{item.code}</th>
            <td >{item.customerName}</td>
            <td >{times}</td>
            <td className = "td-1-2">{FormatMoney(item.price)}</td>
           
          </tr>
    );
}

export default ReturnOrderItem;
