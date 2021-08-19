package com.sapo.quanlybanhang.dto;

import lombok.Data;

import java.util.Date;

@Data
public class SupplierDto {

    private int id;

    private String code;

    private String name;

    private String email;

    private String address;

    private String phone;

    private String state;

    private Date createdDate;

    private Date modifiedDate;

    private String createdBy;

    private String modifiedBy;

}
