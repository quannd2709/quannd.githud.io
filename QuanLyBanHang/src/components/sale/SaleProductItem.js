import React, { useContext, useEffect, useState } from "react";
import { SalerContext } from "src/context/JwtContext";
import { FormatMoney } from "src/helpers/FormatMoney";
import SaleProductOption from "./SaleProductOption";
import "./scss/SaleProductItem.scss";
const SaleProductItem = ({item,index, listProductOption}) => {
 const {getAmounts,productOption,setProductOption,setAmountChange, amountChange, setIsShowTableProduct} = useContext(SalerContext);
 const [itemValue,setItemValue] = useState(0);
// -------------------delete list product option---------------------
  const deleteItem =()=>{
    let list = productOption;
    list = list.filter(items =>items != item );
    setProductOption(list);
  }
  // -----------------------get input amount---------------------------
 const getAmount =(e)=>{
   let val = e.target.value;
   let exp = /^\d+$/;
   val = val.replace(/,/g,'');
   if(exp.test(val)){
     let val1 = item.numberProduct;
     if(val>val1){
       console.log("lon hon");
      setItemValue(FormatMoney(val1));
      getAmounts(val1,item);
     }else{
      setItemValue(FormatMoney(val)); 
      getAmounts(val,item);
     }

    console.log("get value:",val);
    setAmountChange(!amountChange);
 
   }else {
     console.log("fail");
     setItemValue(1);
     setAmountChange(!amountChange);
     getAmounts(1,item);
   }
  
 }
//  ----------------press button increment amount--------------------
const incrementAmount =()=>{
  var x = parseInt(itemValue);
  if (item.numberProduct>x){  
    item['amount']=x+1;
    console.log("giá trị:",x+1);
    setItemValue(x+1);
    setAmountChange(!amountChange);
  }
 
}

const decrementAmount =()=>{
  if(itemValue>1){
    let val = parseInt(itemValue);
    item['amount']=val-1;
    setItemValue(val-1);
  }
 
}


 useEffect(() => {
   let val = item.amount;
   setItemValue(FormatMoney(val));
 }, [item.amount,amountChange]);
  return (
    <tr style = {{backgroundColor :index%2!=0? "#f2f7fd": "white"}} className="table-row" >
      <th scope="row" className="h-3">
        {index+1}
      </th>
      <td className="h-3">{item.code}</td>
      <td className="h-3">{item.name}</td>
      <td className="h-4 h-4-4">
      <span className = 's-2'><i className="fas fa-arrow-up" onClick = {incrementAmount}></i></span>
      <span><input type = 'text' value = {FormatMoney(new Number(itemValue))}  maxLength = "5" onChange = {(e)=>getAmount(e)}/></span>
      <span className = 's-2'><i className="fas fa-arrow-down" onClick = {decrementAmount}></i></span>
      </td>
      <td className="h-5">{FormatMoney(item.price)}</td>
      <td className="h-5">{FormatMoney(item.price*itemValue)}</td>
      <td className="h-4" onClick = {deleteItem}><i className="far fa-trash-alt fa-lg" /></td>
    </tr>
  
  );
};

export default SaleProductItem;
