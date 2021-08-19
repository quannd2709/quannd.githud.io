package com.sapo.quanlybanhang.dao.impl;

import com.sapo.quanlybanhang.dao.GenericDao;
import com.sapo.quanlybanhang.dto.OrderPageable;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import javax.persistence.EntityManager;
import javax.persistence.Query;
import java.util.ArrayList;
import java.util.List;

public class AbstractDao<T> implements GenericDao<T> {
    public  static final Logger logger = LoggerFactory.getLogger(AbstractDao.class);
    @Autowired
    private EntityManager entityManager;
  
    @Override
    public List<Query> query(OrderPageable orderPageable, String sql1, String sql2, String sql3) {
        Query query = null;
        Query queryCount = null;
        List<Query> queryList = new ArrayList();
        StringBuilder sql = new StringBuilder(sql1);
        StringBuilder sqlCount = new StringBuilder(sql3);
        System.out.println("chuỗi:"+sql1);
        if (orderPageable.getStartedTime()== null && orderPageable.getEndedTime()== null ) {
            sql.append(sql2);
            sqlCount.append(sql2);
            sql.append(" where (c.name like  ?1 or c.phone like ?2) or (o.code like ?3) order By o.createdDate DESC");
            sqlCount.append(" where (c.name like  ?1 or c.phone like ?2) or (o.code like ?3) order By o.createdDate DESC");
            query= entityManager.createQuery(sql.toString())
                    .setParameter(1, "%" + orderPageable.getInputOrder() + "%")
                    .setParameter(2, "%" + orderPageable.getInputOrder() + "%")
                    .setParameter(3, "%" + orderPageable.getInputOrder() + "%");
            queryCount = entityManager.createQuery(sqlCount.toString())
                    .setParameter(1, "%" + orderPageable.getInputOrder() + "%")
                    .setParameter(2, "%" + orderPageable.getInputOrder() + "%")
                    .setParameter(3, "%" + orderPageable.getInputOrder() + "%");
        }else if ((orderPageable.getInputOrder() == null || orderPageable.getInputOrder() == "")){
            sql.append(" where ( DATE(o.createdDate) between Date(?1) and Date(?2)) order By o.createdDate DESC");
            sqlCount.append(" where ( DATE(o.createdDate) between Date(?1) and Date(?2)) order By o.createdDate DESC");
            query = entityManager.createQuery(sql.toString())
                    .setParameter(1, orderPageable.getStartedTime())
                    .setParameter(2, orderPageable.getEndedTime());
            queryCount = entityManager.createQuery(sqlCount.toString())
                    .setParameter(1, orderPageable.getStartedTime())
                    .setParameter(2, orderPageable.getEndedTime());
        }else {
            sql.append(sql2);
            sqlCount.append(sql2);
            sql.append(" where (c.name like ?1 AND DATE (o.createdDate) between Date (?4) and Date(?5)) " +
                    "or (c.phone like ?2 AND DATE (o.createdDate) between Date (?4) and Date(?5))  " +
                    "or (o.code like ?3 AND DATE (o.createdDate) between Date (?4) and Date(?5)) " +
                    " order By o.createdDate DESC");
            sqlCount.append(" where (c.name like ?1 AND DATE (o.createdDate) between Date (?4) and Date(?5)) " +
                    "or (c.phone like ?2 AND DATE (o.createdDate) between Date (?4) and Date(?5))  " +
                    "or (o.code like ?3 AND DATE (o.createdDate) between Date (?4) and Date(?5)) " +
                    " order By o.createdDate DESC");
             query = entityManager.createQuery(sql.toString())
                     .setParameter(1, "%" + orderPageable.getInputOrder() + "%")
                     .setParameter(2, "%" + orderPageable.getInputOrder() + "%")
                     .setParameter(3, "%" + orderPageable.getInputOrder() + "%")
                     .setParameter(4, orderPageable.getStartedTime())
                     .setParameter(5, orderPageable.getEndedTime());
             queryCount = entityManager.createQuery(sqlCount.toString())
                     .setParameter(1, "%" + orderPageable.getInputOrder() + "%")
                     .setParameter(2, "%" + orderPageable.getInputOrder() + "%")
                     .setParameter(3, "%" + orderPageable.getInputOrder() + "%")
                     .setParameter(4, orderPageable.getStartedTime())
                     .setParameter(5, orderPageable.getEndedTime());

        }
        queryList.add(query);
        queryList.add(queryCount);
        return queryList;
    }

}
