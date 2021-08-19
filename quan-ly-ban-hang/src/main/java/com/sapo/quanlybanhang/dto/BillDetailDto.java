package com.sapo.quanlybanhang.dto;

import lombok.Data;

@Data
public class BillDetailDto {
    private Integer id;
    private Long price;
    private String productName;
    private Integer quanlity;
    private Long discount;
    private String productCode;
    private Long priceProduct;

}
