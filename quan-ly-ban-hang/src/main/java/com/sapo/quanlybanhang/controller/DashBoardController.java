package com.sapo.quanlybanhang.controller;

import com.sapo.quanlybanhang.dto.DashBoarDto;
import com.sapo.quanlybanhang.service.IDashBoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class DashBoardController {
    @Autowired
    private IDashBoardService dashBoardService;

    @PostMapping("/dashboard")
    public ResponseEntity findAll(@RequestBody DashBoarDto dto) {
        dto = dashBoardService.collectOrder(dto);
        return ResponseEntity.ok(dto);
    }
}
