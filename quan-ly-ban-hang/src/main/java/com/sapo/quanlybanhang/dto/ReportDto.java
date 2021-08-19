package com.sapo.quanlybanhang.dto;

import lombok.Data;

@Data
public class ReportDto {
    String time;
    Long quantityOrder;
    Long totalDismount;
    Long returnQuantityProduct;
    Long returnMoney;
    Long sellQuanlityProduct;
    Long totalRevenue;
    Long totalPriceOrder;
    Long totalPriceReturnOrder;
}
