package com.sapo.quanlybanhang.dao;

import com.sapo.quanlybanhang.dto.*;
import com.sapo.quanlybanhang.entity.OrderEntity;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;

public interface IOrderDao extends GenericDao<OrderEntity> {
    public OrderListDto findByCodeAndCustomer(OrderPageable orderPageable);

    public List<DashBoardItem> findAllByTime(LocalDate startTime, LocalDate endTime);
    public List<OrderResultSet> reportByMonth(ReportOffsetTime offsetTime);
    public List<OrderResultSet> reportByOrder(ReportOffsetTime offsetTime);
}
