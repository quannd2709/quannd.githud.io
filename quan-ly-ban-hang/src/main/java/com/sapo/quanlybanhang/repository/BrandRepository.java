package com.sapo.quanlybanhang.repository;

import com.sapo.quanlybanhang.entity.BrandEntity;
import com.sapo.quanlybanhang.entity.SupplierEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BrandRepository extends JpaRepository<BrandEntity, Integer> {
    BrandEntity findByName(String name);

    @Query(value = "select * from brand order by id desc",nativeQuery = true)
    List<BrandEntity> getAll();

}