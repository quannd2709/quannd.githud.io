package com.sapo.quanlybanhang.service;

import com.sapo.quanlybanhang.dto.BillDto;
import com.sapo.quanlybanhang.dto.BillListDto;
import com.sapo.quanlybanhang.dto.OrderDetailDto;
import com.sapo.quanlybanhang.dto.OrderPageable;
import com.sapo.quanlybanhang.entity.BillEntity;
import com.sapo.quanlybanhang.entity.OrderDetailEntity;
import com.sapo.quanlybanhang.entity.OrderEntity;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IBillService {
    public BillDto save(BillDto billDto);

    public Long checkPrice(OrderDetailDto dto, OrderDetailEntity entity, OrderEntity orderEntity);

    public List<BillDto> findAll(Pageable pageable);

    public BillListDto findByCodeAndCustomer(OrderPageable orderPageable);

    public BillEntity findById(Integer id);

    public Integer getTotalItem();
}
