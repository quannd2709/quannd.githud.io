package com.sapo.quanlybanhang.service.impl;

import com.sapo.quanlybanhang.converter.PermissionConverter;
import com.sapo.quanlybanhang.converter.RoleConverter;
import com.sapo.quanlybanhang.dto.PermissionDto;
import com.sapo.quanlybanhang.repository.PermissionRepository;
import com.sapo.quanlybanhang.service.PermissionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PermissionServiceImpl implements PermissionService {

    @Autowired
    private PermissionRepository permissionRepository;

    @Override
    public List<PermissionDto> findAll() {
        return permissionRepository.findAll().stream().map(item-> PermissionConverter.toDto(item)).collect(Collectors.toList());
    }

}
