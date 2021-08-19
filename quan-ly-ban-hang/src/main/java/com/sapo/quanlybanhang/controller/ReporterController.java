package com.sapo.quanlybanhang.controller;

import com.sapo.quanlybanhang.dto.ReportOffsetTime;
import com.sapo.quanlybanhang.service.IReportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class ReporterController {
    @Autowired
     private IReportService reportService;
    @PostMapping("/reports/months")
    public ResponseEntity reportMonth(@RequestBody ReportOffsetTime reportTime){

        return  ResponseEntity.ok(reportService.reportByMonth(reportTime));
    }
    @PostMapping ("reports/orders")
    public ResponseEntity reportByOrder(@RequestBody ReportOffsetTime reportOffsetTime){
        return ResponseEntity.ok(reportService.reportByOrder(reportOffsetTime));
    }
}
