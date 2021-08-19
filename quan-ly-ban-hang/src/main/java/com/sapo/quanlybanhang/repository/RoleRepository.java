package com.sapo.quanlybanhang.repository;

import com.sapo.quanlybanhang.entity.RoleEntity;
import com.sapo.quanlybanhang.entity.StaffEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<RoleEntity, Integer> {
    Page<RoleEntity> findAll(Pageable pageable);
}
