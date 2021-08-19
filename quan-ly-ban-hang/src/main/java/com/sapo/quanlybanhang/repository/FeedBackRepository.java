package com.sapo.quanlybanhang.repository;

import com.sapo.quanlybanhang.entity.FeedBackEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Date;
@Repository
public interface FeedBackRepository extends JpaRepository<FeedBackEntity,Integer> {
    @Query(value = "select f from FeedBackEntity f")
    Page<FeedBackEntity> getAll(Pageable pageable);

    @Query(value = "select f from FeedBackEntity f where f.customerEntity.name like %:customerName% and f.slove=:slove")
    Page<FeedBackEntity> getAllByCustomerNameAndSlove(@Param("customerName") String customerName,
                                                      @Param("slove") String slove,Pageable pageable);

   @Query(value = "select f from FeedBackEntity f where f.customerEntity.name like %:customerName%")
    Page<FeedBackEntity> getAllByCustomerName(@Param("customerName") String customerName,Pageable pageable);

    @Query(value = "select f from FeedBackEntity f where f.slove =:slove")
    Page<FeedBackEntity> getAllBySlove(@Param("slove") String slove,Pageable pageable);

    @Query(value = "select f from FeedBackEntity f where f.createdBy =:createBy")
    Page<FeedBackEntity> getAllByStaff(@Param("createBy") String createBy,Pageable pageable);

    @Query(value = "select f from FeedBackEntity f where f.customerEntity.id =:customer_id")
    Page<FeedBackEntity> getAllByCustomer(@Param("customer_id") Integer customer_id,Pageable pageable);

//    @Query(value = "select f from FeedBackEntity f where f.customerEntity.id =:customer_id and f.createBy =:createBy")
//    Page<FeedBackEntity> getAllByCustomerAndStaff(@Param("customer_id") Integer customer_id,@Param("staff_id") Integer staff_id,Pageable pageable);
    @Query(value = "select f from FeedBackEntity f where f.createdDate =:created_date")
    Page<FeedBackEntity> getAllByCreatedDate(@Param("created_date") Date created_date,Pageable pageable);
    @Query(value = "select f from FeedBackEntity f where f.createdDate between ?1 and ?2")
    Page<FeedBackEntity> getAllByRangeDate(Date dateBegin,Date dateEnd,Pageable pageable);
}
