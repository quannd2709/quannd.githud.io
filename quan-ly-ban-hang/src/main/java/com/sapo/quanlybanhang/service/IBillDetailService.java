package com.sapo.quanlybanhang.service;

import com.sapo.quanlybanhang.dto.BillDetailDto;
import com.sapo.quanlybanhang.dto.ReturnOrderDto;
import com.sapo.quanlybanhang.entity.BillDetailEntity;

import java.util.List;

public interface IBillDetailService {
    public List<BillDetailDto> findAllOrder(Integer id);
    public ReturnOrderDto findByid();
}
