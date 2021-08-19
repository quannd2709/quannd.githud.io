package com.sapo.quanlybanhang.service;

import com.sapo.quanlybanhang.dto.OrderDetailDto;

import java.util.List;

public interface IOrderDetailService {
    List<OrderDetailDto> findAllByOrderId(Integer id);
}
