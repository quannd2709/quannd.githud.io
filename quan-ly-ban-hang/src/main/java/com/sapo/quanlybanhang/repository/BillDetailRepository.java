package com.sapo.quanlybanhang.repository;

import com.sapo.quanlybanhang.entity.BillDetailEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BillDetailRepository extends JpaRepository<BillDetailEntity, Integer> {
    List<BillDetailEntity> findAllByBillId(Integer id);

}
