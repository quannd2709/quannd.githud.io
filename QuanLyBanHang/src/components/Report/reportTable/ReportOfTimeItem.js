import React from "react";
import { FormatMoney } from "src/helpers/FormatMoney";
import "./scss/ReportOfTimeItem.scss";
const ReportOfTimeItem = ({ item }) => {
  return (
    <tr className="table-row">
      <th scope="row">{item.time}</th>
      <td>{FormatMoney(item.quantityOrder)}</td>
      <td>{FormatMoney(item.totalDismount)}</td>
      <td className="td-2">{FormatMoney(item.returnQuantityProduct)}</td>
      <td>{FormatMoney(item.totalPriceReturnOrder)}</td>
      <td>{FormatMoney(item.sellQuanlityProduct)}</td>
      <td>{FormatMoney(item.totalRevenue)}</td>
    </tr>
  );
};

export default ReportOfTimeItem;
