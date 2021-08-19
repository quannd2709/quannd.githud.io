package com.sapo.quanlybanhang.controller;

import com.sapo.quanlybanhang.converter.OrderConverter;
import com.sapo.quanlybanhang.dto.*;
import com.sapo.quanlybanhang.service.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin()
public class OrderController {
    @Autowired
    private IOrderService orderService;

    /**
     * paging of order . sort descending, sortyby created date
     * search and filter
     */
    @PostMapping("/order")
    public OrderListDto findAll(@RequestBody OrderPageable orderPageable) {
        Integer totalItem = 0;
        OrderListDto listDto = new OrderListDto();
        if(orderPageable.getStartedTime() == null && (orderPageable.getInputOrder() == null
                || orderPageable.getInputOrder() =="" ) && (orderPageable.getEndedTime()==null)){
            Sort sort = Sort.by("createdDate").descending();
            Pageable pageable = PageRequest.of(orderPageable.getPage()-1,orderPageable.getLimit(),sort);
            listDto.setTotalItem(orderService.getTotalItem().longValue());
            listDto.setResultItem(orderService.findAll(pageable));
            return listDto;
        } else {
            listDto = orderService.findByCodeAndCustomer(orderPageable);
            if(listDto.getResultItem().size()==0){
                listDto.setTotalItem(0L);
            }
            return listDto;
        }

    }

    /**
     * create bill
     *
     * @param orderDto
     * @return
     */
    @PostMapping("/orders")
    public ResponseEntity save(@RequestBody OrderDto orderDto) {
        List<OrderDetailDto> orderDetailDtos = orderDto.getOrderDetailDtos();
        if (orderDetailDtos.size() == 0) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN)
                    .body(new OrderResponse("không có sản phẩm hoặc sản phẩm không hợp lệ"));
        }

        if ((orderDto = orderService.save(orderDto)) != null) {
            return ResponseEntity.ok(orderDto);
        }
        return ResponseEntity.status(HttpStatus.FORBIDDEN)
                .body(new OrderResponse("không có sản phẩm hoặc sản phẩm không hợp lệ"));
    }

    @GetMapping("/orders/{id}")
    public OrderDto findById(@PathVariable(name = "id") Integer id) {
        return OrderConverter.toDto(orderService.findById(id));
    }

    @GetMapping("/orders/start-time")
        public ResponseEntity getStartTime(){
            return orderService.getStartTime();
        }

        @GetMapping ("/orders/end-time")
         public  ResponseEntity getEndTime(){
            return orderService.getEndTime();
        }

}
