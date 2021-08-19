package com.sapo.quanlybanhang.converter;

import com.sapo.quanlybanhang.dto.BillDto;
import com.sapo.quanlybanhang.entity.BillEntity;

public class BillConverter {
    public static BillEntity toEntity(BillDto dto) {
        BillEntity entity = new BillEntity();
        entity.setCode(dto.getCode());
        entity.setId(dto.getId());
        entity.setModifiedBy(dto.getModifiedBy());
        entity.setModifiedDate(dto.getModifiedDate());
        entity.setCreatedBy(dto.getCreateBy());
        entity.setCreatedDate(dto.getCreatedDate());
        entity.setPrice(dto.getPrice());
        return entity;
    }

    public static BillDto toDto(BillEntity entity) {
        BillDto dto = new BillDto();
        dto.setCode(entity.getCode());
        dto.setId(entity.getId());
        dto.setModifiedBy(entity.getModifiedBy());
        dto.setModifiedDate(entity.getModifiedDate());
        dto.setCreateBy(entity.getCreatedBy());
        dto.setCreatedDate(entity.getCreatedDate());
        dto.setPrice(entity.getPrice());
        dto.setOrderId(entity.getOrderEntity().getId());
        dto.setStaffId(entity.getStaffBill().getId());
        dto.setCustomId(entity.getCustomerBill().getId());
        dto.setCustomerName(entity.getCustomerBill().getName());
        dto.setStaffName(entity.getStaffBill().getFullName());
        dto.setCodeOrder(entity.getOrderEntity().getCode());
        dto.setCustomerEmail(entity.getCustomerBill().getEmail());
        dto.setCustomerPhone(entity.getCustomerBill().getPhone());
        dto.setCodeOrder(entity.getOrderEntity().getCode());
        return dto;
    }

}
