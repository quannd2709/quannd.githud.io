package com.sapo.quanlybanhang.converter;

import com.sapo.quanlybanhang.dto.*;
import com.sapo.quanlybanhang.entity.*;

import java.util.ArrayList;
import java.util.List;

public class Converter {
    public ProductDto ConverterToDtoProduct(ProductEntity item) {
        ProductDto dto = new ProductDto();
        dto.setId(item.getId());
        dto.setCode(item.getCode());
        dto.setName(item.getName());
        dto.setNumberProduct(item.getNumberProduct());
        dto.setSellProduct(item.getSellProduct());
        dto.setImage(item.getImage());
        dto.setPrice(item.getPrice());
        dto.setDescription(item.getDescription());
        dto.setCreatedDate(item.getCreatedDate());
        dto.setModifiedDate(item.getModifiedDate());
        dto.setCreateBy(item.getCreatedBy());
        dto.setModifiedBy(item.getModifiedBy());
        dto.setSize(item.getSize());
        dto.setCategoryId(item.getCategory().getName());
        dto.setSupplierId(item.getSupplier().getName());
        dto.setColor(item.getColor());
        dto.setBrandID(item.getBrand().getName());
        return dto;

    }
    public CategoryDto ConverterToDtoCategory(CategoryEntity item) {
        CategoryDto dto = new CategoryDto();
        dto.setId(item.getId());
        dto.setCode(item.getCode());
        dto.setName(item.getName());
        dto.setCreatedDate(item.getCreatedDate());
        dto.setModifiedDate(item.getModifiedDate());
        dto.setCreate_by(item.getCreate_by());
        dto.setModified_by(item.getModified_by());
//        List<ProductDto> productDtoList = new ArrayList<>();
//        for ( ProductEntity productEntity: item.getProductEntities())
//        {
//            ProductDto productDto = ConverterToDtoProduct(productEntity);
//            productDtoList.add(productDto);
//
//        }
//        dto.setProductDtoList(productDtoList);

        return dto;

    }
    public SupplierDto ConverterToDtoSupplier(SupplierEntity item) {
        SupplierDto dto = new SupplierDto();
        dto.setId(item.getId());
        dto.setCode(item.getCode());
        dto.setName(item.getName());
        dto.setEmail(item.getEmail());
        dto.setPhone(item.getPhone());
        dto.setAddress(item.getAddress());
        dto.setState(item.getState());
        dto.setCreatedDate(item.getCreatedDate());
        dto.setModifiedDate(item.getModifiedDate());
        dto.setCreatedBy(item.getCreatedBy());
        dto.setModifiedBy(item.getModifiedBy());
        return dto;

    }

    public BrandDto ConverterToDtoBrand(BrandEntity item) {
        BrandDto dto = new BrandDto();
          dto.setId(item.getId());
          dto.setName(item.getName());
        return dto;

    }


}
