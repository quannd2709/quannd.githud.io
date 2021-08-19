package com.sapo.quanlybanhang.dto;

import lombok.Data;

import java.sql.Timestamp;
import java.util.List;

@Data
public class BillDto {
    private Integer id;

    private String code;

    private Long price;

    private Timestamp createdDate;

    private Timestamp modifiedDate;

    private Integer orderId;

    private String createBy;

    private String modifiedBy;

    private Integer customId;

    private Integer staffId;

    private List<OrderDetailDto> orderDetailDtos;

    private String customerName;

    private String StaffName;

    private String codeOrder;

    private String customerPhone;

    private String customerEmail;


}
