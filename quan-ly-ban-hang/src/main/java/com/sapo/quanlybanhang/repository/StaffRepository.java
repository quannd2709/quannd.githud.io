package com.sapo.quanlybanhang.repository;

import com.sapo.quanlybanhang.entity.StaffEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface StaffRepository extends JpaRepository<StaffEntity, Integer> {

    Page<StaffEntity> findAll(Pageable pageable);

    StaffEntity findOneById(Integer id);

    StaffEntity findOneByPhone(String phone);

    //    @Query( value = "select * from staff where full_name like '%?1%'", nativeQuery = true)
//    List<StaffEntity> findAllStaffByName(String name);
    @Query(value = "select s from StaffEntity s where s.fullName like %:name%")
    Page<StaffEntity> findAllStaffByName(@Param("name") String name, Pageable page);

    Boolean existsByPhone(String phone);
}
