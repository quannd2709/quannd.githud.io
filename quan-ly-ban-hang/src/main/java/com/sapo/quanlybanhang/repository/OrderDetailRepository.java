package com.sapo.quanlybanhang.repository;

import com.sapo.quanlybanhang.entity.OrderDetailEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderDetailRepository extends JpaRepository<OrderDetailEntity, Integer> {
    List<OrderDetailEntity> findAllByOrderId(Integer id);
}
