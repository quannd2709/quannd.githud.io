import React from 'react';
import { FormatMoney } from 'src/helpers/FormatMoney';

const ReportOfOrderItem = ({item}) => {
    function totalRevenue(totalPriceOrder,returnMoney,dismount){
        if(totalPriceOrder==null){
            totalPriceOrder=0;
        }
        if(returnMoney==null){
            returnMoney=0;
        }
        if(dismount==null){
            dismount=0;
        }
        return totalPriceOrder-returnMoney-dismount;
    }
    return (
        <tr className="table-row">
        <th scope="row">{item.orderCode}</th>
        <td>{FormatMoney(item.sellQuantityProduct)}</td>
        <td>{FormatMoney(item.sumDiscount)}</td>
        <td className="td-2">{item.returnQuantityProduct==null ? 0 :FormatMoney(item.returnQuantityProduct)}</td>
        <td>{item.returnMoney==null ? 0 :FormatMoney(item.returnMoney)}</td>
        <td>{item.quantityReturnOrder==null ? 0 :FormatMoney(item.quantityReturnOrder)}</td>
        <td>{FormatMoney(totalRevenue(item.totalPriceOrder, item.returnMoney, item.sumDiscount))}</td> 
      </tr>
    );
}

export default ReportOfOrderItem;
