package com.sapo.quanlybanhang.dto;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class OrderListDto {
    private Long totalItem;
    private List<OrderDto> resultItem = new ArrayList<>();
}
