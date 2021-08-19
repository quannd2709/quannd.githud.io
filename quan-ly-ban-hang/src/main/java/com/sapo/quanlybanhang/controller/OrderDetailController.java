package com.sapo.quanlybanhang.controller;

import com.sapo.quanlybanhang.dto.OrderDetailDto;
import com.sapo.quanlybanhang.dto.OrderDto;
import com.sapo.quanlybanhang.service.IOrderDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class OrderDetailController {
    @Autowired
    private IOrderDetailService orderDetailService;

    @GetMapping("/order-details/{id}")
    public ResponseEntity findAll(@PathVariable(name = "id") Integer id) {
        OrderDto orderDto = new OrderDto();
        List<OrderDetailDto> list = orderDetailService.findAllByOrderId(id);
        if (list.size() == 0) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("do not have result");
        }
        orderDto.setOrderDetailDtos(list);
        return ResponseEntity.ok(list);
    }
}
