import React, { useContext, useEffect, useState } from 'react';
import { callApi } from 'src/apis/ApiCaller';
import List from 'src/components/sale/List';
import { JwtContext } from 'src/context/JwtContext';
import { FormatMoney } from 'src/helpers/FormatMoney';
import ReportOfOrderItem from './ReportOfOrderItem';
import './scss/ReportTableOfOrder.scss'

const ReportTableOfOrder = ({ startedTime, endedTime }) => {
    const [quantityOrder,setQuantityOrder] = useState(0);
    const [sumDiscount, setSumDiscount] = useState(0);
    const [quantityReturnProduct, setquantityReturnProduct] = useState(0);
    const [returnMoney, setReturnMoney] = useState(0);
    const [quantityReturnOrder, setQuantityReturnOrder] = useState(0);
    const [Revenue, setRevenue] = useState(0);
    const [totalPriceOrder, setTotalPriceOrder] = useState(0);
    const [sellQuantityProduct, setSellQuantityProduct] = useState(0);
    const { jwt } = useContext(JwtContext);
    var reportTime = {
        startedTime: startedTime.toLocaleDateString("ja-JP"),
        endedTime: endedTime.toLocaleDateString("ja-jp"),
      };
      const [listReport, setListReport] = useState([]);
      useEffect(() => {
         let totalPriceOrders = 0;
         let returnMoneys = 0;
         let sumDiscounts = 0;
         let sellQuantityProducts = 0;
         let quantityReturnOrders = 0;
         let returnQuantityProducts = 0;
        console.log(startedTime);
        callApi("reports/orders", "post", reportTime, jwt).then((response) => {
          if (response.status !== 200) {
            alert("thao tác thất bại");
            return;
          } else {
            response.json().then((data) => {
              console.log("list-report:", data);
              setListReport(data);
              data.map(item =>{
                if(item.totalPriceOrder==null){
                    item.totalPriceOrder=0;
                }
                if(item.returnMoney==null){
                    item.returnMoney=0;
                }
                if(item.sumDiscount==null){
                    item.sumDiscount=0;
                }
                if(item.sellQuantityProduct==null){
                    item.sellQuantityProduct=0
                }
                if(item.quantityReturnOrder==null){
                    item.quantityReturnOrder=0;
                }
                if(item.returnQuantityProduct==null){
                    item.returnQuantityProduct=0;
                }
                totalPriceOrders += item.totalPriceOrder;
                returnMoneys += item.returnMoney;
                sumDiscounts += item.sumDiscount;
                sellQuantityProducts += item.sellQuantityProduct;
                quantityReturnOrders += item.quantityReturnOrder;
                returnQuantityProducts += item.returnQuantityProduct;
               
              })
              setTotalPriceOrder(totalPriceOrders);
              setReturnMoney(returnMoneys);
              setSumDiscount(sumDiscounts);
              setSellQuantityProduct(sellQuantityProducts);
              setQuantityReturnOrder(quantityReturnOrders);
              setquantityReturnProduct(returnQuantityProducts);
              setRevenue(totalPriceOrders-returnMoneys-sumDiscounts);
              
            });
          }
        });
      }, []);
    return (
        <div className="report-table-order">
        <table className="table ">
          <thead>
            <tr>
              <th scope="col">Mã đơn hàng </th>
              <th scope="col">SL hàng bán ra</th>
              <th scope="col">Tổng chiết khấu</th>
              <th className="th-3" scope="col">
                SL hàng trả lại
              </th>
              <th scope="col">Tiền hàng trả lại</th>
              <th scope="col">SLĐH trả lại</th>
              <th scope="col">Doanh thu</th>
            </tr>
          </thead>
          <tbody>
            {" "}
            <List
              data={listReport}
              render={(item, index) => (
                <ReportOfOrderItem key={index} item={item} index={index}/>
              )}
            />
            <tr className="table-row-sum">
              <th scope="row">Tổng</th>
              <td>{FormatMoney(sellQuantityProduct)}</td>
              <td>{FormatMoney(sumDiscount)}</td>
              <td className="td-2">{FormatMoney(quantityReturnProduct)}</td>
              <td>{FormatMoney(returnMoney)}</td>
              <td>{FormatMoney(quantityReturnOrder)}</td>
              <td>{FormatMoney(Revenue)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
}

export default ReportTableOfOrder;
