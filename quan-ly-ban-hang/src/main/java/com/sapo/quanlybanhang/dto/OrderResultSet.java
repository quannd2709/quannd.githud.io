package com.sapo.quanlybanhang.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class OrderResultSet {
    Integer month;
    Integer year;
    Long totalPriceOrder;
    Long sumDiscount;
    Long sellQuantityProduct;
    Long CountOrder;
    String orderCode;
    Long returnMoney;
    Long returnQuantityProduct;
    Long quantityReturnOrder;
    public OrderResultSet(Integer month, Integer year, Long totalPriceOrder, Long sumDiscount, Long sellQuantityProduct, Long countOrder) {
        this.month = month;
        this.year = year;
        this.totalPriceOrder = totalPriceOrder;
        this.sumDiscount = sumDiscount;
        this.sellQuantityProduct = sellQuantityProduct;
         CountOrder = countOrder;
    }

    public OrderResultSet( String orderCode, Long totalPriceOrder,
                           Long sumDiscount,Long quantityReturnOrder ,
                           Long sellQuantityProduct, Long returnMoney,
                           Long returnQuanlityProduct ) {
        this.totalPriceOrder = totalPriceOrder;
        this.sumDiscount = sumDiscount;
        this.sellQuantityProduct = sellQuantityProduct;
        this.orderCode = orderCode;
        this.returnMoney = returnMoney;
        this.returnQuantityProduct = returnQuanlityProduct;
        this.quantityReturnOrder = quantityReturnOrder;
    }
}
