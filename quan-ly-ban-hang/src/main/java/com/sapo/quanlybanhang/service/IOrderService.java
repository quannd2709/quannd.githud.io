package com.sapo.quanlybanhang.service;

import com.sapo.quanlybanhang.dto.OrderDto;
import com.sapo.quanlybanhang.dto.OrderListDto;
import com.sapo.quanlybanhang.dto.OrderPageable;
import com.sapo.quanlybanhang.entity.OrderEntity;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;

import java.time.LocalDate;
import java.util.List;

public interface IOrderService {
    public List<OrderDto> findAll(Pageable pageable);

    public OrderDto save(OrderDto orderDto);

    OrderListDto findByCodeAndCustomer(OrderPageable orderPageable);

    public List<Long> findPrice(LocalDate optionTime);

    public OrderEntity findById(Integer id);
    public  Integer getTotalItem ();
    ResponseEntity getStartTime();
    ResponseEntity getEndTime();
}
