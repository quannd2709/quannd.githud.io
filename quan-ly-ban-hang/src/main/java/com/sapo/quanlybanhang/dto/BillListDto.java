package com.sapo.quanlybanhang.dto;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class BillListDto {
    private Long totalItem;
    private List<BillDto> resultList = new ArrayList<>();
}
