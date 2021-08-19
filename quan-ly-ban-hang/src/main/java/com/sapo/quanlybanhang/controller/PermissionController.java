package com.sapo.quanlybanhang.controller;

import com.sapo.quanlybanhang.dto.PermissionDto;
import com.sapo.quanlybanhang.dto.RoleDto;
import com.sapo.quanlybanhang.service.PermissionService;
import com.sapo.quanlybanhang.service.RoleService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/admin")
public class PermissionController {
    private final PermissionService permissionService;

    public PermissionController(PermissionService permissionService) {
        this.permissionService = permissionService;
    }

    //Lấy danh sách Permissions
    @GetMapping("/permissions")
    public ResponseEntity getAllPermissions(){
     List<PermissionDto> list = permissionService.findAll();
     ResponseEntity responseEntity = new ResponseEntity<>(list , HttpStatus.OK);
        return responseEntity;
    }

}
