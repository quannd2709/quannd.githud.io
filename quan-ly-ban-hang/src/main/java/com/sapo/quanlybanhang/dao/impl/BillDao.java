package com.sapo.quanlybanhang.dao.impl;

import com.sapo.quanlybanhang.converter.BillConverter;
import com.sapo.quanlybanhang.dao.IBillDao;
import com.sapo.quanlybanhang.dto.*;
import com.sapo.quanlybanhang.entity.BillEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class BillDao extends AbstractDao<BillEntity> implements IBillDao {
@Autowired
private EntityManager entityManager;
    @Override
    public BillListDto findByCodeAndCustomer(OrderPageable orderPageable) {
        List<BillDto> billDtos = new ArrayList<>();
        BillListDto listDto = new BillListDto();
        List<BillEntity> billEntities = new ArrayList<>();
        String sql1 = "select o  FROM BillEntity o ";
        String sql2 = "inner join o.customerBill c ";
        String sql3 = "select count(o)  FROM BillEntity o ";
        List<Query> listQuery = this.query(orderPageable,sql1,sql2,sql3);
        Query query = listQuery.get(0);
        Query queryCount = listQuery.get(1);
            billEntities = query.setFirstResult((orderPageable.getPage()-1)*orderPageable.getLimit())
                    .setMaxResults(orderPageable.getLimit()).getResultList();
            Long a =(Long) queryCount.getResultList().get(0);
            listDto.setTotalItem(a);
            listDto.setResultList(billEntities.stream()
                                    .map(item-> BillConverter.toDto(item)).collect(Collectors.toList()));
            return listDto;

        }

    @Override
    public List<ReturnOrderResultSet> reportByMonth(ReportOffsetTime offsetTime) {
        String sql = "select new com.sapo.quanlybanhang.dto.ReturnOrderResultSet(MONTH(o.createdDate)," +
                "YEAR(o.createdDate),sum(o.price), sum(od.quanlity)) from BillEntity o inner join o.billDetailEntities od" +
                " where Date(o.createdDate) between DATE(?1) and DATE(?2) group by Month(o.createdDate),year(o.createdDate)  ";;
                List<ReturnOrderResultSet> list = entityManager.createQuery(sql)
                                                    .setParameter(1,offsetTime.getStartedTime())
                                                     .setParameter(2,offsetTime.getEndedTime())
                                                      .getResultList();
        return list;
    }

    @Override
    public BillEntity findById() {
        String sql = "select b from BillEntity b order by b.createdDate DESC";
        List<BillEntity> list = entityManager.createQuery(sql).setFirstResult(0).getResultList();
        return list.get(0);
    }
}
