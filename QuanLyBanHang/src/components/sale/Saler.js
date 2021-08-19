import React, { useContext, useEffect, useState } from "react";
import { callApi, callApiNotJwt } from "src/apis/ApiCaller";
import {
  JwtContext,
  LayoutContext,
  SalerContext,
} from "src/context/JwtContext";
import InformNew from "src/helpers/InformNew";
import SaleProductOption from "./SaleProductOption";
import SalerContent from "./SalerContent";
import SalerHeader from "./SalerHeader";
import "./scss/Sale.scss";

const Saler = () => {
  // ------------------------------- useState-------------------------------------------
  const [products, setProducts] = useState([]);
  const { jwt } = useContext(JwtContext);
  const [isShowProducts, setIsShowProducts] = useState(false);
  const [productOption, setProductOption] = useState([]);
  const [total, setTotal] = useState(0);
  const [amountChange, setAmountChange] = useState(false);
  const [amount] = useState(0);
  const { isShow, setShow } = useContext(LayoutContext);
  const [isFocus, setFocus] = useState(false);
  const [isShowCustomer, setIsShowCustomer] = useState(false);
  const [isNews, setIsNews] = useState(false);
  const [news,setNews] = useState();
  const orderPageable = {
    page: 1,
    limit: 20,
  };
  //--------------------------------useEffect-------------------------------------------
  useEffect(() => {
    let val = 0;
    if (productOption == 0) {
      setTotal(0);
    } else {
      for (const ob of productOption) {
        val += ob["amount"] * ob["price"];
      }
    }
    setShow(false);
  }, [isShowProducts, productOption]);

  const getAmounts = (amount, item) => {
    for (const ob of productOption) {
      if (ob["id"] == item["id"]) {
        ob["amount"] = parseInt(amount);
      }
    }
  };

  const getNews =(news)=>{

    setNews(news);
    setIsNews(true);
    setTimeout(()=>setIsNews(false),2000);
  }

  window.onpopstate = function () {
    setShow(true);
};
  return (
    <div>
      <SalerContext.Provider
        value={{
          getNews,
          setIsShowCustomer,
          isFocus,
          setFocus,
          getAmounts,
          amountChange,
          setAmountChange,
          setProducts,
          setIsShowProducts,
          products,
          isShowProducts,
          setProductOption,
          productOption,
        }}
      >
        <div className="header">
          <SalerHeader />
        </div>
        <div className="body">
          {isShowProducts ? <SaleProductOption products={products} /> : ""}
          <SalerContent
            total={total}
            productOption={productOption}
            setIsShowProducts={setIsShowProducts}
           isShowCustomer = {isShowCustomer}  
           setIsShowCustomer = {setIsShowCustomer}
          /> 
        </div>
        {
          isNews ?  <InformNew news = {news}/>:""
        }
      
      </SalerContext.Provider>
    </div>
  );
};

export default Saler;
