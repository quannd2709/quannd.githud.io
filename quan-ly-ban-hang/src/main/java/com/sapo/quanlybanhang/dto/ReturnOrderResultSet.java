package com.sapo.quanlybanhang.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ReturnOrderResultSet {
    Integer month;
    Integer year;
    Long returnMoney;
    Long returnQuantityProduct;
}
