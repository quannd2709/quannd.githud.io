import React, { useContext } from "react";
import { SalerContext } from "src/context/JwtContext";
import List from "./List";
import SaleProductItem from "./SaleProductItem";

import "./scss/SaleTableProduct.scss";
const SaleTableProduct = ({productOption}) => {
 const getAmount=(amount, item)=>{
    for (const ob of productOption) {
      if(ob.id==item.id){
        ob.amount = amount;
      }
    }
 }
  return (
    <div className="sale-table-product">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col" className = "th-1">STT </th>
            <th scope="col" className = "th-1">Mã sản phẩm</th>
            <th scope="col" className = "th-1">Tên sản phẩm</th>
            <th scope="col" className = "th-6">Số lượng</th>
            <th scope="col" className = "th-2">Đơn giá</th>
            <th scope="col" className = "th-2">Thành tiền</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <List data = {productOption}  render = {(item,index) => <SaleProductItem listProductOption = { getAmount}  key = {index} item = {item} index = {index}/>} />
        </tbody>
      </table>
    </div>
  );
};

export default SaleTableProduct;
