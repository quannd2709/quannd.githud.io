package com.sapo.quanlybanhang.dto;

import com.sapo.quanlybanhang.dto.enums.OptionTime;
import lombok.Data;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Data
public class DashBoarDto {
    List<DashBoardItem> dashBoardItems = new ArrayList();
    OptionTime optionTime;
    private LocalDate optionDate;
    private Long price;
    private Integer orderNumber;
    private Integer billNumber;
    private Long totalPrice;
}
