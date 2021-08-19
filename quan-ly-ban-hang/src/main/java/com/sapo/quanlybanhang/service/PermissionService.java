package com.sapo.quanlybanhang.service;

import com.sapo.quanlybanhang.dto.PermissionDto;
import com.sapo.quanlybanhang.dto.RoleDto;

import java.util.List;

public interface PermissionService {
 
    //Lấy danh sách Permission
    public List<PermissionDto> findAll();

}
