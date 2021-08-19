import React, { useContext, useEffect, useState } from "react";
import { SalerContext } from "src/context/JwtContext";
import FirstContent from "./FirstContent";
import SalePayment from "./SalePayment";
import SaleTableProduct from "./SaleTableProduct";
import "./scss/SalerContent.scss";
const SalerContent = ({productOption, setIsShowProducts,total,setIsShowCustomer,isShowCustomer}) => {
const [isChecks, setIsChecks] = useState(false);
const isCheck = false;
  const IsCheckShowProductList = ()=>{
    setIsShowProducts(false);
   
    setIsChecks(!isChecks);
    
  }
  const getShow = ()=>{
    setIsShowCustomer(false);
  }
  
  useEffect(() => {
    // console.log(isShowCustomer);
  }, []);
  return (
    <div className="wrap-content"
    onClick ={IsCheckShowProductList}>
      <div className="content-left" onClick = {getShow}>
       {productOption.length ==0 ?<FirstContent setIsShowProducts ={setIsShowProducts} />:<SaleTableProduct productOption = {productOption} />}
      
      </div>
      <div className="content-right">
        <SalePayment setIsShowCustomer ={setIsShowCustomer} isShowCustomer ={isShowCustomer}   total = {total} />
      </div>
    </div>
  );
};
export default SalerContent;
