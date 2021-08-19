package com.sapo.quanlybanhang.dto;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class OrderDetailDto {

    private Integer id;

    private String code;

    private Integer quanlity;

    private Long discount;

    private String codeOrder;

    private String codeProduct;

    private Integer productId;

    private Integer orderId;

    private Integer remainAmount;

    private Integer amountPay;

    private String productName;
    private Long price;
    private  Long priceProduct;
}
