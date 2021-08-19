package com.sapo.quanlybanhang.controller;

import com.sapo.quanlybanhang.converter.BillConverter;
import com.sapo.quanlybanhang.dto.*;
import com.sapo.quanlybanhang.service.IBillService;
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
public class BillController {
    @Autowired
    private IBillService billService;

    @PostMapping("/bills")
    public ResponseEntity save(@RequestBody BillDto billDto) {
        List<OrderDetailDto> orderDetailDtos = billDto.getOrderDetailDtos();
        if (orderDetailDtos.size() == 0) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN)
                    .body(new OrderResponse(" sản phẩm không hợp lệ hoặc quá thời hạn bảo hành"));
        }
        if ((billDto = billService.save(billDto)) != null) {
            return ResponseEntity.ok(billDto);
        }
        return ResponseEntity.status(HttpStatus.FORBIDDEN)
                .body(new OrderResponse("sản phẩm không hợp lệ hoặc quá thời hạn bảo hành"));

    }

    /**
     * paging of order . sort descending, sortyby created date
     * search and filter
     */
    @PostMapping("/bill")
    public BillListDto findAll(@RequestBody OrderPageable orderPageable) {
        Integer totalItem = 0;
        BillListDto listDto = new BillListDto();
        if(orderPageable.getStartedTime() == null && (orderPageable.getInputOrder() == null
                || orderPageable.getInputOrder() =="" ) && (orderPageable.getEndedTime()== null)){
            Sort sort = Sort.by("createdDate").descending();
            Pageable pageable = PageRequest.of(orderPageable.getPage()-1,orderPageable.getLimit(),sort);
            listDto.setTotalItem((long)billService.getTotalItem());
            listDto.setResultList(billService.findAll(pageable));
            return listDto;
        }else {
            listDto= billService.findByCodeAndCustomer(orderPageable);
            if(listDto.getResultList().size()==0){
                listDto.setTotalItem(0L);
            }
            return listDto ;
        }

    }

    @GetMapping("/bill/{id}")
    public BillDto findById(@PathVariable(name = "id") Integer id) {
        return BillConverter.toDto(billService.findById(id));
    }

}
