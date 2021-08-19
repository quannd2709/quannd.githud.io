import React, { useContext, useEffect, useState } from "react";
import { callApi } from "src/apis/ApiCaller";
import List from "src/components/sale/List";
import { JwtContext } from "src/context/JwtContext";
import { FormatMoney } from "src/helpers/FormatMoney";
import ReportOfTimeItem from "./ReportOfTimeItem";
import "./scss/ReportTableOfTime.scss";
const ReportTableOfTime = ({ startedTime, endedTime }) => {
  const { jwt } = useContext(JwtContext);
  const  [quantityOrder,setQuantityOrder] = useState(0);
  const [sumDiscount,setSumDiscount] = useState(0);
  const [quantityReturnProduct,setquantityReturnProduct] = useState(0);
  const [totalPriceReturnOrder,setTotalPriceReturnOrder] = useState(0);
  const [quantitySellProduct,setQuantitySellProduct] = useState(0);
  const [totalRevenue,setTotalRevenue] = useState(0);
  var reportTime = {
    startedTime: startedTime.toLocaleDateString("ja-JP"),
    endedTime: endedTime.toLocaleDateString("ja-jp"),
  };
  const [listReport, setListReport] = useState([]);
  useEffect(() => {
      let quantityOrders=0;
      let sumDiscounts = 0;
      let quantityReturnProducts=0;
      let totalPriceReturnOrders = 0;
      let quantitySellProducts =0;
      let totalRevenues =0;
    console.log(startedTime);
    callApi("reports/months", "post", reportTime, jwt).then((response) => {
      if (response.status !== 200) {
        alert("thao tác thất bại");
        return;
      } else {
        response.json().then((data) => {
          console.log("list-report:", data);
          setListReport(data);
          data.map(item =>{
            quantityOrders += item.quantityOrder;
            sumDiscounts +=item.totalDismount;
            quantityReturnProducts +=item.returnQuantityProduct;
            totalPriceReturnOrders += item.totalPriceReturnOrder;
            quantitySellProducts += item.sellQuanlityProduct;
            totalRevenues += item.totalRevenue;
          })
          setQuantityOrder(quantityOrders);
          setSumDiscount(sumDiscounts);
          setquantityReturnProduct(quantityReturnProducts);
          setTotalPriceReturnOrder(totalPriceReturnOrders);
          setQuantitySellProduct(quantitySellProducts);
          setTotalRevenue(totalRevenues);
        });
      }
    });
  }, [startedTime, endedTime]);

 
  return (
    <div className="report-table-time">
      <table className="table ">
        <thead>
          <tr>
            <th scope="col">Tháng </th>
            <th scope="col">SL đơn hàng</th>
            <th scope="col">Tổng chiết khấu</th>
            <th className="th-3" scope="col">
              SL hàng trả lại
            </th>
            <th scope="col">Tiền hàng trả lại</th>
            <th scope="col">SL hàng bán ra</th>
            <th scope="col">Doanh thu</th>
          </tr>
        </thead>
        <tbody>
          {" "}
          <List
            data={listReport}
            render={(item, index) => (
              <ReportOfTimeItem key={index} item={item} index={index}/>
            )}
          />
          <tr className="table-row-sum">
            <th scope="row">Tổng</th>
            <td>{FormatMoney(quantityOrder)}</td>
            <td>{FormatMoney(sumDiscount)}</td>
            <td className="td-2">{FormatMoney(quantityReturnProduct)}</td>
            <td>{FormatMoney(totalPriceReturnOrder)}</td>
            <td>{FormatMoney(quantitySellProduct)}</td>
            <td>{FormatMoney(totalRevenue)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ReportTableOfTime;
