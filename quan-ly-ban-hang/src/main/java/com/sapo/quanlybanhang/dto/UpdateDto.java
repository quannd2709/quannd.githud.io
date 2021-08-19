package com.sapo.quanlybanhang.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UpdateDto {
    private int id;

    private String code;

    private String name;

    private String brandName;

    private int numberProduct;

    private int sellProduct;

    private String image;

    private Long price;

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
