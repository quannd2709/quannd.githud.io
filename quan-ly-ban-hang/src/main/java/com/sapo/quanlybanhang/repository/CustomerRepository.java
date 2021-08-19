package com.sapo.quanlybanhang.repository;

import com.sapo.quanlybanhang.entity.CustomerEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface CustomerRepository extends JpaRepository<CustomerEntity, Integer> {

    @Query(value = "select c from CustomerEntity c  where c.email like %:input% or c.name like %:input% and c.status<>'off'")
    Page<CustomerEntity> searchByNameOrEmail(@Param("input") String input, Pageable pageable);

    @Query(value = "select c from CustomerEntity c where c.phone like %:phone% and c.status<>'off'")
    Page<CustomerEntity> findByPhone(@Param("phone") String create, Pageable pageable);

    @Query(value = "select c from CustomerEntity c where c.gender = :gender and c.status<>'off'")
    Page<CustomerEntity> findByGender(@Param("gender") String gender, Pageable pageable);

    @Query(value = "select c from CustomerEntity c  where c.createBy like %:create% and c.status<>'off'")
    Page<CustomerEntity> findByCreateBy(@Param("create") String create, Pageable pageable);

    @Query(value = "select c from CustomerEntity c  where c.address like %:address% and c.status<>'off'")
    Page<CustomerEntity> findByAddress(@Param("address") String address, Pageable pageable);

    @Query(value = "select c from CustomerEntity c  where c.createBy like %:staff% and c.status<>'off'")
    Page<CustomerEntity> findByStaff(@Param("staff") String address, Pageable pageable);

    @Query(value = "select * from customers where ROUND(DATEDIFF(CURDATE(), date_of_birth) / 365, 0) < 18 and status<>'off'", nativeQuery = true)
    Page<CustomerEntity> findByAgeUnder18(Pageable pageable);

    @Query(value = "select * from customers where ROUND(DATEDIFF(CURDATE(), date_of_birth) / 365, 0) < 18 and gender = :gender and status<>'off'", nativeQuery = true)
    Page<CustomerEntity> findByAgeUnder18optionGender(@Param("gender") String gender, Pageable pageable);

    @Query(value = "select * from customers where ROUND(DATEDIFF(CURDATE()," +
            " date_of_birth) / 365, 0) between 18 and 35 and status<>'off'", nativeQuery = true)
    Page<CustomerEntity> findByAgeBetween18and35(Pageable pageable);

    @Query(value = "select * from customers where ROUND(DATEDIFF(CURDATE(), date_of_birth) / 365, 0) between  18 and 35 and gender = :gender and status<>'off'", nativeQuery = true)
    Page<CustomerEntity> findByAgeBetween18and35optionGender(@Param("gender") String gender, Pageable pageable);

    @Query(value = "select * from customers where ROUND(DATEDIFF(CURDATE(), date_of_birth) / 365, 0) > 35 and status<>'off'", nativeQuery = true)
    Page<CustomerEntity> findByAgeOver35(Pageable pageable);

    @Query(value = "select * from customers where ROUND(DATEDIFF(CURDATE(), date_of_birth) / 365, 0) > 35 and gender = :gender and status<>'off'", nativeQuery = true)
    Page<CustomerEntity> findByAgeOver35optionGender(@Param("gender") String gender, Pageable pageable);

    @Query(value = "select * from customers  where status<>'off'", nativeQuery = true)
    Page<CustomerEntity> All(Pageable pageable);

    @Transactional
    @Modifying
    @Query(value = "update CustomerEntity c set c.status ='off' where c.id = :id")
    void updateStatus(@Param("id") Integer id);

    @Query(value = "call getNewCustomersByMonth(:m,:y)", nativeQuery = true)
    Integer getNew(Integer m, Integer y);

//    @Query(value = "call getNewCustomersByDay(:d,:m,:y)", nativeQuery = true)
//    Integer getNewByDay(Integer d, Integer m, Integer y);

@Query(value = "call getNewCustomersByDay(:d,:m,:y)", nativeQuery = true)
Integer getNewByDay(Integer d,Integer m, Integer y);
    @Query(value = "select customers.name,phone,email,address,customers.created_date as Bat_dau,orders.created_date as Gan_nhat,count(*) as Tong_so_don,sum(price) as Tong_so_tien\n" +
            "from orders join customers on customers.id = orders.customer_id group by customers.name,phone,email,address,bat_dau\n" +
            "order by Tong_so_tien desc", nativeQuery = true)
    List<Object[]> getStatistics(Pageable pageable);
    @Query(value = "select customers.name,phone,email,address,customers.created_date as Bat_dau,orders.created_date as Gan_nhat,count(*) as Tong_so_don \n" +
            "from orders join customers on customers.id = orders.customer_id group by customers.name,phone,email,address,bat_dau\n" +
            "order by Tong_so_don desc", nativeQuery = true)
    List<Object[]> getStatistics1();
    @Query(value = "select distinct year(created_date)  from customers", nativeQuery = true)
    List<Integer> getYearCreateCustomer();

    CustomerEntity findOneById(Integer customId);

    boolean existsByPhone(String phone);

    boolean existsByEmail(String email);
}
