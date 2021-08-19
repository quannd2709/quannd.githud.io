package com.sapo.quanlybanhang.dao;

import com.sapo.quanlybanhang.dto.OrderPageable;

import javax.persistence.Query;
import java.time.LocalDate;
import java.util.List;

public interface GenericDao<T> {
     List<Query> query(OrderPageable orderPageable, String sql1, String sql2,String sql3);
//     List<LocalDate> getTime(OrderPageable orderPageable);
}
