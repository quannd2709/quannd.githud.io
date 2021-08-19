package com.sapo.quanlybanhang.converter;

import com.sapo.quanlybanhang.dto.CustomerDto;
import com.sapo.quanlybanhang.entity.CustomerEntity;

public class CustomerConvert {
    public static CustomerDto toDTO(CustomerEntity customerEntity) {
        CustomerDto customerDto = new CustomerDto();
        customerDto.setPhone(customerEntity.getPhone());
        customerDto.setNote(customerEntity.getNote());
        customerDto.setGender(customerEntity.getGender());
        customerDto.setAddress(customerEntity.getAddress());
        customerDto.setName(customerEntity.getName());
        customerDto.setEmail(customerEntity.getEmail());
        customerDto.setDateOfBirth(customerEntity.getDateOfBirth());
        customerDto.setCreateBy(customerEntity.getCreateBy());
        customerDto.setCreatedDate(customerEntity.getCreatedDate());
        customerDto.setModifiedBy(customerEntity.getModifiedBy());
        customerDto.setModifiedDate(customerEntity.getModifiedDate());
        customerDto.setStatus(customerEntity.getStatus());
        customerDto.setId(customerEntity.getId());
        return customerDto;
    }

    public static CustomerEntity toEntity(CustomerDto customerDto) {
        CustomerEntity customerEntity = new CustomerEntity();
        customerEntity.setEmail(customerDto.getEmail());
        customerEntity.setPhone(customerDto.getPhone());
        customerEntity.setGender(customerDto.getGender());
        customerEntity.setAddress(customerDto.getAddress());
        customerEntity.setModifiedDate(customerDto.getModifiedDate());
        customerEntity.setModifiedBy(customerDto.getModifiedBy());
        customerEntity.setCreatedDate(customerDto.getCreatedDate());
        customerEntity.setCreateBy(customerDto.getCreateBy());
        customerEntity.setName(customerDto.getName());
        customerEntity.setId(customerDto.getId());
        customerEntity.setNote(customerDto.getNote());
        customerEntity.setDateOfBirth(customerDto.getDateOfBirth());
        customerEntity.setStatus(customerDto.getStatus());
        return customerEntity;
    }
}