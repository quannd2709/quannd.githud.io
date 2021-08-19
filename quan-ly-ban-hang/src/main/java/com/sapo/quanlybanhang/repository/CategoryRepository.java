package com.sapo.quanlybanhang.repository;

import com.sapo.quanlybanhang.entity.CategoryEntity;
import com.sapo.quanlybanhang.entity.SupplierEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoryRepository extends JpaRepository<CategoryEntity, Integer> {
    CategoryEntity findByName(String name);
    @Query(value = "select * from categories order by id desc",nativeQuery = true)
    List<CategoryEntity> getAll();

}
