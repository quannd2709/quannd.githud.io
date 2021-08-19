package com.sapo.quanlybanhang.service;

import com.sapo.quanlybanhang.dto.OrderResultSet;
import com.sapo.quanlybanhang.dto.ReportDto;
import com.sapo.quanlybanhang.dto.ReportOffsetTime;

import java.util.List;

public interface IReportService {
    List<ReportDto> reportByMonth(ReportOffsetTime offsetTime);
    List<OrderResultSet> reportByOrder(ReportOffsetTime offsetTime);
}
