package com.sapo.quanlybanhang.service;

import com.sapo.quanlybanhang.dto.CustomerDto;
import com.sapo.quanlybanhang.entity.CustomerEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface CustomerService {
    CustomerDto findById(Integer id);

    Page<CustomerDto> getPage(Pageable pageable);

    //
    Page<CustomerDto> search(String input, Pageable pageable);

    //
    Page<CustomerDto> findByPhone(String input, Pageable pageable);

    //
    Page<CustomerDto> findByGender(String input, Pageable pageable);

    //
    Page<CustomerDto> findByAddress(String input, Pageable pageable);

    //
    Page<CustomerDto> findByStaff(String input, Pageable pageable);

    //
    Page<CustomerDto> findAgeUnder18(Pageable pageable);

    Page<CustomerDto> findAgeUnder18optionGender(String gender, Pageable pageable);

    //
    Page<CustomerDto> findByAgeBetween18and35(Pageable pageable);

    Page<CustomerDto> findByAgeBetween18and35optionGender(String gender, Pageable pageable);

    //
    Page<CustomerDto> findByAgeOver35(Pageable pageable);

    Page<CustomerDto> findByAgeOver35optionGender(String gender, Pageable pageable);

    //


    //
    List<CustomerDto> getAll();

    //
    CustomerDto save(CustomerDto customerDto);

    //
    void delete(Integer id);

    //
    Integer countCustomersByMonth(Integer m, Integer n);

//    Integer countCustomersByDay(Integer d, Integer m, Integer n);

public Integer countCustomersByDay(Integer d,Integer m, Integer y) ;

    //
    List<Object[]> getStatistics(Pageable pageable);
    List<Object[]> getStatistics1();

    List<Integer> getYearCreateCustomer();

    boolean checkDuplicatePhone(String phone);

    boolean checkDuplicateEmail(String email);
    CustomerEntity save(CustomerEntity customerEntity);
}
