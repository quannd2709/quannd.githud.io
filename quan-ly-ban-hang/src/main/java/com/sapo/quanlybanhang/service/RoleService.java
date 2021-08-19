package com.sapo.quanlybanhang.service;

import com.sapo.quanlybanhang.dto.RoleDto;
import com.sapo.quanlybanhang.dto.StaffDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface RoleService {

    //Lấy danh sách Role
    public List<RoleDto> findAll();

    //Phân trang danh sách role
    public Page<RoleDto> getAllRole(Pageable pageable);

    //Tạo mới một Role
    public RoleDto createRole(RoleDto roleDto);

    //Cập nhật một Role
    public RoleDto updateRole(int id, RoleDto roleDto);
}
