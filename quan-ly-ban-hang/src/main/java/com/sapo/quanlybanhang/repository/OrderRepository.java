package com.sapo.quanlybanhang.repository;

import com.sapo.quanlybanhang.dto.OrderItem;
import com.sapo.quanlybanhang.entity.OrderEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.sql.Date;
import java.time.LocalDate;

public interface OrderRepository extends JpaRepository<OrderEntity, Integer> {

    Page<OrderEntity> findByState(String state, Pageable pageable);

    OrderEntity findOneById(Integer id);

    @Query("select new com.sapo.quanlybanhang.dto.OrderItem(count (o), sum(o.price),sum(o.discount)) " +
            "from OrderEntity o where date(o.createdDate)= Date(?1)")
    public OrderItem findPrice(LocalDate optionTime);

     @Query(value = "select Date(o.created_date) from orders o limit 1",nativeQuery = true)
     Date getStartTime();

     @Query (value = "select Date(o.created_date) from orders o order by o.id DESC  limit 1",nativeQuery = true)
     Date getEndTime();

}
