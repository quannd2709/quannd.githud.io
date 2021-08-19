package com.sapo.quanlybanhang.repository;

import com.sapo.quanlybanhang.dto.OrderItem;
import com.sapo.quanlybanhang.entity.BillEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;

public interface BillRepository extends JpaRepository<BillEntity, Integer> {
    @Query("select new com.sapo.quanlybanhang.dto.OrderItem(count (b), sum(b.price)) " +
            " from BillEntity b where  DATE(b.createdDate) = DATE(?1)")
    public OrderItem findPrice(LocalDate optionDate);

    BillEntity findOneById(Integer id);

}
