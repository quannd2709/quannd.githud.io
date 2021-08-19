import React from 'react';
import { FormatMoney } from 'src/helpers/FormatMoney';
import './scss/ReturnOrderDetailItem.scss'
const ReturnOrderDetailItem = (props) => {
    const item = props.item;
  return (
      <tr className = "order-infor-row">
        <th scope="row">{item.productCode}</th>
        <td>{item.productName}</td>
        <td className = 'td-1'>{FormatMoney(item.quanlity)}</td>
        <td className = 'td-1'>{FormatMoney(item.priceProduct)}</td>
        <td className = 'td-1'>{FormatMoney(item.price)}</td>
      </tr>
  );
}

export default ReturnOrderDetailItem;
