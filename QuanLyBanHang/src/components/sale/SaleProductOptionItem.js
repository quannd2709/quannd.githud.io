import React, { useContext, useState } from "react";
import { SalerContext } from "src/context/JwtContext";
import "./scss/SaleProductOptionItem.scss";
const SaleProductOptionItem = (props) => {
  const {getNews,setProductOption,productOption, setIsShowProducts,amountChange,setAmountChange} = useContext (SalerContext);
  const { item } = props;
  const [isCheck,setIsCheck]= useState(false);
  const checkItem = ()=>{
    if(item.image == "" || item.image == null){
      setIsCheck(false);
    }else{
      setIsCheck(true);
    }
  }

  const getProductOption= ()=>{
    console.log("hello ap");
    let isCheck = false;
    if(item.numberProduct<=0){
      getNews('Sản phẩm hết hàng');
      return;
    }else{
      if(productOption.length ==0){
        item.amount = 1;
        setProductOption([item]);
        console.log("productOption:",item);
      }else{
        for (const ob of productOption) {
          
          if(  ob['id']== item.id){
            ob['amount']+=1;
            isCheck=true;
            console.log("product option:",ob['amount']);
            setAmountChange(!amountChange);
          } 
        }
        if(!isCheck){
          item.amount = 1;
          setProductOption([...productOption,item]);
          console.log("productOption:",productOption);
          setAmountChange(!amountChange);
        }
    }
   
    setIsShowProducts(false);
  }
}
  return (
    <div className="Sale-product-option-item" onClick = {getProductOption}>
      <div className="option-item-left">
        <div className="option-item-left-1">
   
          <img src = {item.image}/>
          {/* <img src="https://lh3.googleusercontent.com/NevAMsFwOcu9jE1olaVuBh7mOFjiwvX125G0gyU_yeOzFvT4mNodgJxBew33Wc0xJ7wAap9uhayfIcODs5dziCV0bdvAzEGMvHvEAF4f4-L6HDHRxPd4bwXYvztRu5McDOi9V-9xOw=s60-p-k" /> */}
  
          </div>
      </div>
      <div className="option-item-content">
        <div className="option-item-right">
          <div className="item-1 item-3">
            <span>{item.name}</span>
            <span>{item.price}</span>
          </div>
          <div className="item-1 item-2">
            <span>{item.code}</span>
            <span>Có thể bán: {item.numberProduct}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaleProductOptionItem;
