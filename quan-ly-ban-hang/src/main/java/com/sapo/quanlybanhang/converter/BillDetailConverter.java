package com.sapo.quanlybanhang.converter;

import com.sapo.quanlybanhang.dto.BillDetailDto;
import com.sapo.quanlybanhang.entity.BillDetailEntity;

public class BillDetailConverter {
    public static BillDetailEntity toEntity(BillDetailDto dto) {
        BillDetailEntity entity = new BillDetailEntity();
        entity.setQuanlity(dto.getQuanlity());
        entity.setDiscount(dto.getDiscount());
        entity.setId(dto.getId());
        entity.setPrice(dto.getPrice());
        entity.setPrice(dto.getPrice());

        return entity;
    }

    public static BillDetailDto toDto(BillDetailEntity entity) {
        BillDetailDto dto = new BillDetailDto();
        dto.setDiscount(entity.getDiscount());
        dto.setId(entity.getId());
        dto.setPrice(entity.getPrice());
        dto.setProductName(entity.getProductBill().getName());
        dto.setQuanlity(entity.getQuanlity());
        dto.setProductCode(entity.getProductBill().getCode());
        dto.setPriceProduct(entity.getProductBill().getPrice());
        return dto;
    }
}
