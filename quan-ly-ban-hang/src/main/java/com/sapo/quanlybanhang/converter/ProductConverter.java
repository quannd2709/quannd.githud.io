package com.sapo.quanlybanhang.converter;

import com.sapo.quanlybanhang.dto.ProductDto;
import com.sapo.quanlybanhang.entity.ProductEntity;

public class ProductConverter {
    public static ProductDto toDto(ProductEntity entity) {
        ProductDto dto = new ProductDto();
        dto.setCode(entity.getCode());
        dto.setName(entity.getName());
        dto.setNumberProduct(entity.getNumberProduct());
        dto.setPrice(entity.getPrice());
        dto.setId(entity.getId());
        dto.setImage(entity.getImage());
        return dto;
    }
}
