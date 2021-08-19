package com.sapo.quanlybanhang.converter;

import com.sapo.quanlybanhang.dto.PermissionDto;
import com.sapo.quanlybanhang.entity.PermissionEntity;


public class PermissionConverter {
    public static PermissionDto toDto (PermissionEntity permissionEntity){
        PermissionDto permissionDto = new PermissionDto();
        permissionDto.setId(permissionEntity.getId());
        permissionDto.setName(permissionEntity.getName());
        permissionDto.setCode(permissionEntity.getCode());
        return permissionDto;
    }

    public static PermissionEntity toEntity (PermissionDto permissionDto){
        PermissionEntity permissionEntity = new PermissionEntity();
        permissionEntity.setId(permissionDto.getId());
        permissionEntity.setName(permissionDto.getName());
        permissionEntity.setCode(permissionDto.getCode());
        return permissionEntity;
    }
}
