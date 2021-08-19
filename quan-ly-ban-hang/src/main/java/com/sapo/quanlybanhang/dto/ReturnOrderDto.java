package com.sapo.quanlybanhang.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.sql.Timestamp;
import java.util.List;
@Data
public class ReturnOrderDto {
    String StaffName;
    String customerName;
    String customerEmail;
    String customerPhone;
    String code;
    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="yyyy/MM/dd")
    Timestamp createdDate;
    List<BillDetailDto> billDetailDtoList;
}
