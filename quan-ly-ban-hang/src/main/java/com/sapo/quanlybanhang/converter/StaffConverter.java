package com.sapo.quanlybanhang.converter;

import com.sapo.quanlybanhang.dto.StaffDto;
import com.sapo.quanlybanhang.entity.StaffEntity;

import java.util.stream.Collectors;

public class StaffConverter {
    public static StaffDto toDto(StaffEntity staffEntity) {
        StaffDto staffDto = new StaffDto();
        staffDto.setId(staffEntity.getId());
        staffDto.setFullName(staffEntity.getFullName());
        staffDto.setPassWord(staffEntity.getPassWord());
        staffDto.setAddress(staffEntity.getAddress());
        staffDto.setMail(staffEntity.getMail());
        staffDto.setPhone(staffEntity.getPhone());
        staffDto.setDateOfBirth(staffEntity.getDateOfBirth());
        staffDto.setStatus(staffEntity.getStatus());
        staffDto.setCreatedDate(staffEntity.getCreatedDate());
        staffDto.setModifiedDate(staffEntity.getModifiedDate());
        staffDto.setCreateBy(staffEntity.getCreateBy());
        staffDto.setModifiedBy(staffEntity.getModifiedBy());
        staffDto.setRoleName(staffEntity.getRoles().stream().map(item -> item.getName()).collect(Collectors.toList()));
        staffDto.setRoleId(staffEntity.getRoles().stream().map(item -> item.getId()).collect(Collectors.toList()));
        return staffDto;
    }

    public static StaffEntity toEntity(StaffDto staffDto) {
        StaffEntity staffEntity = new StaffEntity();
        staffEntity.setId(staffDto.getId());
        staffEntity.setFullName(staffDto.getFullName());
        staffEntity.setPassWord(staffDto.getPassWord());
        staffEntity.setAddress(staffDto.getAddress());
        staffEntity.setMail(staffDto.getMail());
        staffEntity.setPhone(staffDto.getPhone());
        staffEntity.setDateOfBirth(staffDto.getDateOfBirth());
        staffEntity.setStatus(staffDto.getStatus());
        staffEntity.setCreatedDate(staffDto.getCreatedDate());
        staffEntity.setModifiedDate(staffDto.getModifiedDate());
        staffEntity.setCreateBy(staffDto.getCreateBy());
        staffEntity.setModifiedBy(staffDto.getModifiedBy());
        staffEntity.setRoles(staffDto.getRoleEntity());
        return staffEntity;
    }
}
