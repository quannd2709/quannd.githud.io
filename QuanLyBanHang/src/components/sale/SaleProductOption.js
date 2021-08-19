import React, { useContext, useEffect, useState } from "react";
import { SalerContext } from "src/context/JwtContext";
import NewNotSearch from "src/helpers/NewNotSearch";
import List from "./List";
import SaleProductOptionItem from "./SaleProductOptionItem";
import "./scss/SaleProductOption.scss";

const SaleProductOption = ({products}) => {
  console.log("saleProductOption:",products);
  // ---------------------------use state-----------------------
  const [listProducts,setListProducts] = useState();
 
  console.log("saleProductOption", products);
  return (
    <div className="wrap-sale-product-option">      
    {products.length!=0 ? <List data = {products} render = {(item,index) =><SaleProductOptionItem key = {index} item= {item} index = {index} />}/>
   :
    <NewNotSearch />
  }
    </div>
    
  );
};

export default SaleProductOption;
