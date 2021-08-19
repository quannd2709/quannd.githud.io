package com.sapo.quanlybanhang.service.impl;

import com.sapo.quanlybanhang.converter.OrderDetailConverter;
import com.sapo.quanlybanhang.dto.OrderDetailDto;
import com.sapo.quanlybanhang.entity.OrderDetailEntity;
import com.sapo.quanlybanhang.repository.OrderDetailRepository;
import com.sapo.quanlybanhang.service.IOrderDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class OrderDetailService implements IOrderDetailService {
    @Autowired
    private OrderDetailRepository orderDetailRepository;

    @Override
    public List<OrderDetailDto> findAllByOrderId(Integer id) {
        List <OrderDetailEntity>  list = orderDetailRepository.findAllByOrderId(id);

        return orderDetailRepository.findAllByOrderId(id).stream()
                .map(item -> OrderDetailConverter.toDto(item)).collect(Collectors.toList());
    }
}
