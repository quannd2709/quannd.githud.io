package com.sapo.quanlybanhang.service.impl;

import com.sapo.quanlybanhang.dao.IBillDao;
import com.sapo.quanlybanhang.dao.IOrderDao;
import com.sapo.quanlybanhang.dto.OrderResultSet;
import com.sapo.quanlybanhang.dto.ReportDto;
import com.sapo.quanlybanhang.dto.ReportOffsetTime;
import com.sapo.quanlybanhang.dto.ReturnOrderResultSet;
import com.sapo.quanlybanhang.service.IReportService;
import lombok.extern.java.Log;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.time.LocalDate;
import java.time.Period;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ReportService implements IReportService {
    private final static Logger logger = LoggerFactory.getLogger(ReportService.class);
    @Autowired
    private IOrderDao orderDao;
    @Autowired
    private IBillDao billDao;
    @Override
    public List<ReportDto> reportByMonth(ReportOffsetTime offsetTime) {
        List<OrderResultSet> list = orderDao.reportByMonth(offsetTime);
        List<ReturnOrderResultSet> list1 = billDao.reportByMonth(offsetTime);
        LocalDate startedTime = offsetTime.getStartedTime().toLocalDateTime().toLocalDate();
        LocalDate endedTime = offsetTime.getEndedTime().toLocalDateTime().toLocalDate();
        Period period = Period.between(startedTime.withDayOfMonth(1),endedTime.withDayOfMonth(1));
        int offset = period.getMonths() +period.getYears()*12;
        List<ReportDto> reportDtoList = new ArrayList();
          for(int i =  0;i<=offset;i++){
              ReportDto reportDto = new ReportDto();
              LocalDate s = startedTime.plusMonths(i);
              for(OrderResultSet o : list){
                  if(o.getMonth()==s.getMonthValue()&& o.getYear()==s.getYear()){
                      String times = o.getMonth()+"/"+o.getYear();
                      reportDto.setTime(times);
                      reportDto.setQuantityOrder(o.getCountOrder());
                      reportDto.setSellQuanlityProduct(o.getSellQuantityProduct());
                      reportDto.setTotalDismount(o.getSumDiscount());
                      reportDto.setTotalPriceOrder(o.getTotalPriceOrder());
                      break;
                  }
              }
              for(ReturnOrderResultSet o :list1){
                  if(o.getMonth()==s.getMonthValue()&& o.getYear()==s.getYear()){
                      reportDto.setTime(o.getMonth()+"/"+o.getYear());
                      reportDto.setTotalPriceReturnOrder(o.getReturnMoney());
                      reportDto.setReturnQuantityProduct(o.getReturnQuantityProduct());
                      break;
                  }
              }
              if(reportDto!=null){
                  if(reportDto.getTime()==null){
                      reportDto.setTime(s.getMonthValue()+"/"+s.getYear());
                  }
                  if(reportDto.getQuantityOrder()==null){
                      reportDto.setQuantityOrder(0L);
                  }
                  if(reportDto.getTotalDismount()==null){
                      reportDto.setTotalDismount(0L);
                  }
                  if(reportDto.getSellQuanlityProduct()==null){
                      reportDto.setSellQuanlityProduct(0L);

                  }
                  if(reportDto.getTotalPriceOrder()==null){
                      reportDto.setTotalPriceOrder(0L);
                  }
                  if(reportDto.getTotalPriceReturnOrder()==null){
                      reportDto.setTotalPriceReturnOrder(0L);
                  }
                  if(reportDto.getReturnQuantityProduct()==null){
                      reportDto.setReturnQuantityProduct(0L);
                  }
                  reportDto.setTotalRevenue(reportDto.getTotalPriceOrder()-reportDto.getTotalDismount()-reportDto.getTotalPriceReturnOrder());
                  reportDtoList.add(reportDto);
                  logger.info(reportDto.toString());
              }

          }



        return reportDtoList;
    }

    @Override
    public List<OrderResultSet> reportByOrder(ReportOffsetTime offsetTime) {
        return  orderDao.reportByOrder(offsetTime);
    }

}
