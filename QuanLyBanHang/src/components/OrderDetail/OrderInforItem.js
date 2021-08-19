import React from "react";
import "./scss/OrderInforItem.scss"

const OrderInforItem = (props) => {
    const item = props.item;
    console.log("orderInfor:",item);
  return (
      <tr className = "order-infor-row">
        <th scope="row">{item.codeProduct}</th>
        <td>{item.productName}</td>
        <td className = "td-1">{item.quanlity}</td>
        <td className = "td-1">{item.priceProduct}</td>
        <td className = "td-1">{item.price}</td>
      </tr>
  );
};

export default OrderInforItem;
