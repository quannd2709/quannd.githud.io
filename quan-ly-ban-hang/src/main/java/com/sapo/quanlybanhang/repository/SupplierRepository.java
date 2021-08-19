package com.sapo.quanlybanhang.repository;

import com.sapo.quanlybanhang.entity.SupplierEntity;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SupplierRepository extends JpaRepository<SupplierEntity, Integer> {
    @Query(value = "SELECT * FROM supplier as s where s.code like %?1% OR s.name like %?1% or s.phone like  %?1%  or s.address like %?1% ", nativeQuery = true)
    List<SupplierEntity> findAll(String keyword);

    @Query(value = "SELECT * FROM supplier as s where s.code like %?1% OR s.name like %?1% or s.phone like  %?1%  or s.address like %?1%", nativeQuery = true)
    List<SupplierEntity> findAllPagination(String keyword, Pageable pageable);

    @Query(value = "SELECT * FROM supplier as p where created_date>= now() - INTERVAL 7 day ", nativeQuery = true)
    List<SupplierEntity> getALLByDay();

    @Query(value = "select * from supplier where state is null order by id desc", nativeQuery = true)
    List<SupplierEntity> getAll();

    @Query(value = "select * from supplier where state is null order by id desc ", nativeQuery = true)
    List<SupplierEntity> getAllPagination(Pageable pageable);


    @Query(value = " SELECT * FROM supplier where modified_by = ?1 ", nativeQuery = true)
    List<SupplierEntity> getALLByModified(String keyword);

    SupplierEntity findByIdAndStateIsNotNull(int id);

    SupplierEntity findByIdAndStateIsNull(int id);

    List<SupplierEntity> findAllByStateIsNull();

    SupplierEntity findByName(String name);

}