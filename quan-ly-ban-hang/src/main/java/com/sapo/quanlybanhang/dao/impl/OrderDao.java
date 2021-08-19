package com.sapo.quanlybanhang.dao.impl;

import com.sapo.quanlybanhang.converter.OrderConverter;
import com.sapo.quanlybanhang.dao.IOrderDao;
import com.sapo.quanlybanhang.dto.*;
import com.sapo.quanlybanhang.entity.OrderEntity;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import java.math.BigDecimal;
import java.sql.Date;
import java.sql.Time;
import java.sql.Timestamp;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class OrderDao extends AbstractDao<OrderEntity> implements IOrderDao {
    public static final Logger logger = LoggerFactory.getLogger(OrderDao.class);
    @Autowired
    private EntityManager entityManager;


    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Override
    public OrderListDto findByCodeAndCustomer(OrderPageable orderPageable) {
        String sql1 = "SELECT o FROM OrderEntity o ";
        String sql2 = "inner join o.customer c ";
        String sql3 = "select count(o) from OrderEntity o ";
        Long totalItem = 0L;
        List<Query> queryList = this.query(orderPageable,sql1,sql2,sql3);
        Query query = queryList.get(0);
        Query query1 = queryList.get(1);
        OrderListDto orderListDto = new OrderListDto();
        List<OrderDto> orderDtos = new ArrayList<>();
        List<OrderEntity> orderEntities = new ArrayList<>();
        orderEntities = query.setFirstResult((orderPageable.getPage()-1)*orderPageable.getLimit())
                    .setMaxResults(orderPageable.getLimit()).getResultList();

        System.out.println(orderEntities);
         orderListDto.setResultItem(orderEntities.stream().
                map(item-> OrderConverter.toDto(item)).collect(Collectors.toList()));
         totalItem = (Long) query1.getResultList().get(0);
         orderListDto.setTotalItem(totalItem);
         logger.info("total item:"+totalItem);
        OrderListDto list = orderListDto;
        int xx =0;
        return orderListDto;

    }

    @Override
    public List<DashBoardItem> findAllByTime(LocalDate startTime, LocalDate endTime) {
        String sql = "select Date(created_date),sum(p_order),sum(pr_order), sum(discount) " +
                "from ( select created_date, price as p_order,0 as pr_order," +
                "discount from orders union all select created_date, 0 as p_order," +
                " price as pr_order, 0 as discount from return_orders ro) as t " +
                "where Date(created_date) between Date(:startTime) and Date(:endTime) group by created_date";

        List<DashBoardItem> lists = new ArrayList();
        Query query = this.entityManager.createNativeQuery(sql);
        query.setParameter("startTime",startTime);
        query.setParameter("endTime",endTime);
        List<Object[]> results = query.getResultList();
        int a = results.size();
        logger.info("độ dài :"+results.get(0)[0]);
        logger.info("results");
        for (int i=0;i<results.size();i++){
            for(int j = i+1;j<results.size();j++){
                if(results.get(i)[0].equals(results.get(j)[0])){
                    results.get(i)[1] = (Long)results.get(j)[1] +  (Long)results.get(i)[1] ;
                    results.get(i)[2] = (Long) results.get(j)[2]+(Long) results.get(i)[2];
                    results.get(i)[3] = (Long) results.get(j)[3] + (Long) results.get(i)[3];
                    results.remove(j);
                    --j;
                }
            }
        }
        results.stream().forEach(item->{
            DashBoardItem dashBoardItem = new DashBoardItem();
            dashBoardItem.setCreatedDate((Date)item[0]);
            dashBoardItem.setPrice(Long.parseLong(item[1] .toString()) -  Long.parseLong(item[2].toString()) - Long.parseLong(item[3].toString()));
            lists.add(dashBoardItem);
        });
        logger.info(lists.toString());
        return lists;
    }

    @Override
    public List<OrderResultSet> reportByMonth(ReportOffsetTime offsetTime) {
        List<ReportDto> reportDtoList = new ArrayList();
        String sql = "select new com.sapo.quanlybanhang.dto.OrderResultSet(MONTH(o.createdDate)," +
                "YEAR(o.createdDate), sum(o.price),sum(o.discount), count(od.quanlity),count (o)) " +
                "from OrderEntity o inner join o.orderDetailEntities od " +
                "where Date(o.createdDate) between Date(?1) and Date(?2) " +
                "group by MONTH(o.createdDate),YEAR(o.createdDate) ";
        List<OrderResultSet> list = entityManager.createQuery(sql)
                .setParameter(1, offsetTime.getStartedTime())
                .setParameter(2, offsetTime.getEndedTime())
                .getResultList();
        return list;
    }

    @Override
    public List<OrderResultSet> reportByOrder(ReportOffsetTime offsetTime) {
        String sql = "select  new com.sapo.quanlybanhang.dto.OrderResultSet( o.code ,sum(o.price)," +
                "sum(o.discount),  count(ro),sum(od.quanlity), sum(ro.price) ,sum(rod.quanlity))\n" +
                " from OrderEntity o \n" +
                "  left JOIN  o.orderDetailEntities od \n" +
                "   left JOIN  o.billEntities ro\n" +
                " left join ro.billDetailEntities rod\n" +
                " where DATE(o.createdDate) between Date(?1) and Date(?2)\n" +
                "  group by o.code ";
        List<OrderResultSet> list = entityManager.createQuery(sql)
                .setParameter(1,offsetTime.getStartedTime())
                .setParameter(2, offsetTime.getEndedTime())
                .getResultList();
            return list;
    }


}
