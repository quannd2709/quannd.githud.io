package com.sapo.quanlybanhang.dto;


import lombok.*;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class InputProductDto {

    private int id;

    private String code;

    private String name;

    private String brandName;

    private int numberProduct;

    private int sellProduct;

    private String image;

    private float price;

    private String supplierName;

    private String description;

    private String color;

    private Date createdDate;

    private Date modifiedDate;

    private String size;

    private String categoryName;

    private String modified_by;

    private String created_by;

    private String status;
}
