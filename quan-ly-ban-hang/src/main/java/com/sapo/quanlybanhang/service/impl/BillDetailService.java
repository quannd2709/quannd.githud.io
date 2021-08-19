package com.sapo.quanlybanhang.service.impl;

import com.sapo.quanlybanhang.converter.BillDetailConverter;
import com.sapo.quanlybanhang.dao.IBillDao;
import com.sapo.quanlybanhang.dto.BillDetailDto;
import com.sapo.quanlybanhang.dto.ReturnOrderDto;
import com.sapo.quanlybanhang.entity.BillDetailEntity;
import com.sapo.quanlybanhang.entity.BillEntity;
import com.sapo.quanlybanhang.repository.BillDetailRepository;
import com.sapo.quanlybanhang.service.IBillDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class BillDetailService implements IBillDetailService {
    @Autowired
    private BillDetailRepository billDetailRepository;
    @Autowired
    private IBillDao billDao;
    @Override
    public List<BillDetailDto> findAllOrder(Integer id) {
        return billDetailRepository.findAllByBillId(id)
                .stream().map(item -> BillDetailConverter.toDto(item)).collect(Collectors.toList());
    }

    @Override
    public ReturnOrderDto findByid() {
        ReturnOrderDto returnOrderDto = new ReturnOrderDto();
        BillEntity billEntity = billDao.findById();
        List<BillDetailEntity> list = billDetailRepository.findAllByBillId(billEntity.getId());
        returnOrderDto.setCode(billEntity.getCode());
        returnOrderDto.setStaffName(billEntity.getStaffBill().getFullName());
        returnOrderDto.setCreatedDate(billEntity.getCreatedDate());
        returnOrderDto.setCustomerPhone(billEntity.getCustomerBill().getPhone());
        returnOrderDto.setCustomerEmail(billEntity.getCustomerBill().getPhone());
        returnOrderDto.setCustomerName(billEntity.getCustomerBill().getName());
        List<BillDetailDto> list1 = list.stream().map((item ->BillDetailConverter.toDto(item))).collect(Collectors.toList());
        returnOrderDto.setBillDetailDtoList(list1);
        return returnOrderDto;
    }
}
