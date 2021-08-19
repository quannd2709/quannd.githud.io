package com.sapo.quanlybanhang.dto;


import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;

import java.sql.Timestamp;
import java.util.List;
import java.util.TimeZone;

@Getter
@Setter
@NoArgsConstructor
public class OrderDto {

    private Integer id;

    private String code;

    private Long price;
//    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="yyyy/MM/dd hh:mm a ",timezone = "EST")
    private Timestamp createdDate;
//    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="yyyy/MM/dd hh:mm ", timezone = "UTC")
    private Timestamp modifiedDate;

    private String createBy;

    private String modifiedBy;

    private Integer customId;

    private Integer staffId;

    private List<OrderDetailDto> orderDetailDtos;

    private String customerName;

    private String StaffName;

    private String customerPhone;

    private String customerEmail;

    private Long discount;


}
