package com.sapo.quanlybanhang.dao;

import com.sapo.quanlybanhang.dto.BillListDto;
import com.sapo.quanlybanhang.dto.OrderPageable;
import com.sapo.quanlybanhang.dto.ReportOffsetTime;
import com.sapo.quanlybanhang.dto.ReturnOrderResultSet;
import com.sapo.quanlybanhang.entity.BillEntity;

import java.util.List;

public interface IBillDao extends GenericDao<BillEntity> {
    public BillListDto findByCodeAndCustomer(OrderPageable orderPageable);
    public List<ReturnOrderResultSet> reportByMonth(ReportOffsetTime offsetTime);
    public BillEntity findById();
}
