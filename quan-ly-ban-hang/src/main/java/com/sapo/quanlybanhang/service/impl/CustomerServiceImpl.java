package com.sapo.quanlybanhang.service.impl;

import com.sapo.quanlybanhang.converter.CustomerConvert;
import com.sapo.quanlybanhang.dto.CustomerDto;
import com.sapo.quanlybanhang.entity.CustomerEntity;
import com.sapo.quanlybanhang.helper.Valid;
import com.sapo.quanlybanhang.repository.CustomerRepository;
import com.sapo.quanlybanhang.service.CustomerService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CustomerServiceImpl implements CustomerService {
    private final CustomerRepository customerRepository;
    private final Valid valid;

    public CustomerServiceImpl(CustomerRepository customerRepository, Valid valid) {
        this.customerRepository = customerRepository;
        this.valid = valid;
    }

    @Override
    public Page<CustomerDto> getPage(Pageable pageable) {
        Page<CustomerEntity> entityPage = customerRepository.All(pageable);
        Page<CustomerDto> dtoPage = entityPage.map(CustomerConvert::toDTO);
        return entityPage.hasContent() ? dtoPage : null;
    }

    @Override
    public CustomerDto findById(Integer id) {
        CustomerEntity customerEntity = customerRepository.getById(id);
        return CustomerConvert.toDTO(customerEntity);
    }

    @Override
    public Page<CustomerDto> search(String input, Pageable pageable) {
        if (valid.checkNumber(input)) {
            return findByPhone(input, pageable);
        } else {
            Page<CustomerEntity> entityPage = customerRepository.searchByNameOrEmail(input, pageable);
            Page<CustomerDto> dtoPage = entityPage.map(CustomerConvert::toDTO);
            return entityPage.hasContent() ? dtoPage : null;
        }
    }

    @Override
    public Page<CustomerDto> findByPhone(String input, Pageable pageable) {
        Page<CustomerEntity> entityPage = customerRepository.findByPhone(input, pageable);
        Page<CustomerDto> dtoPage = entityPage.map(CustomerConvert::toDTO);
        return entityPage.hasContent() ? dtoPage : null;
    }

    @Override
    public Page<CustomerDto> findByGender(String input, Pageable pageable) {
        Page<CustomerEntity> entityPage = customerRepository.findByGender(input, pageable);
        Page<CustomerDto> dtoPage = entityPage.map(CustomerConvert::toDTO);
        return entityPage.hasContent() ? dtoPage : null;
    }

    @Override
    public Page<CustomerDto> findByAddress(String input, Pageable pageable) {
        Page<CustomerEntity> entityPage = customerRepository.findByAddress(input, pageable);
        Page<CustomerDto> dtoPage = entityPage.map(CustomerConvert::toDTO);
        return entityPage.hasContent() ? dtoPage : null;
    }

    @Override
    public Page<CustomerDto> findByStaff(String input, Pageable pageable) {
        Page<CustomerEntity> entityPage = customerRepository.findByCreateBy(input, pageable);
        Page<CustomerDto> dtoPage = entityPage.map(CustomerConvert::toDTO);
        return entityPage.hasContent() ? dtoPage : null;
    }

    @Override
    public Page<CustomerDto> findAgeUnder18(Pageable pageable) {
        Page<CustomerEntity> entityPage = customerRepository.findByAgeUnder18(pageable);
        Page<CustomerDto> dtoPage = entityPage.map(CustomerConvert::toDTO);
        return entityPage.hasContent() ? dtoPage : null;
    }

    @Override
    public Page<CustomerDto> findAgeUnder18optionGender(String gender, Pageable pageable) {
        Page<CustomerEntity> entityPage = customerRepository.findByAgeUnder18optionGender(gender, pageable);
        Page<CustomerDto> dtoPage = entityPage.map(CustomerConvert::toDTO);
        return entityPage.hasContent() ? dtoPage : null;
    }

    @Override
    public Page<CustomerDto> findByAgeBetween18and35(Pageable pageable) {
        Page<CustomerEntity> entityPage = customerRepository.findByAgeBetween18and35(pageable);
        Page<CustomerDto> dtoPage = entityPage.map(CustomerConvert::toDTO);
        return entityPage.hasContent() ? dtoPage : null;
    }

    @Override
    public Page<CustomerDto> findByAgeBetween18and35optionGender(String gender, Pageable pageable) {
        Page<CustomerEntity> entityPage = customerRepository.findByAgeBetween18and35optionGender(gender, pageable);
        Page<CustomerDto> dtoPage = entityPage.map(CustomerConvert::toDTO);
        return entityPage.hasContent() ? dtoPage : null;
    }

    @Override
    public Page<CustomerDto> findByAgeOver35(Pageable pageable) {
        Page<CustomerEntity> entityPage = customerRepository.findByAgeOver35(pageable);
        Page<CustomerDto> dtoPage = entityPage.map(CustomerConvert::toDTO);
        return entityPage.hasContent() ? dtoPage : null;
    }

    @Override
    public Page<CustomerDto> findByAgeOver35optionGender(String gender, Pageable pageable) {
        Page<CustomerEntity> entityPage = customerRepository.findByAgeOver35optionGender(gender, pageable);
        Page<CustomerDto> dtoPage = entityPage.map(CustomerConvert::toDTO);
        return entityPage.hasContent() ? dtoPage : null;
    }

    @Override
    public List<CustomerDto> getAll() {
        return customerRepository.findAll().stream().map(item -> CustomerConvert.toDTO(item)).collect(Collectors.toList());
    }

    @Override
    public CustomerDto save(CustomerDto customerDto) {
       CustomerEntity customerEntity= customerRepository.save(CustomerConvert.toEntity(customerDto));
return (CustomerConvert.toDTO(customerEntity));
    }

    @Override
    public void delete(Integer id) {
        customerRepository.updateStatus(id);
    }

    @Override
    public Integer countCustomersByMonth(Integer m, Integer n) {
        return customerRepository.getNew(m, n);
    }

//    @Override
//    public Integer countCustomersByDay(Integer d, Integer m, Integer n) {
//        return customerRepository.getNewByDay(d, m, n);
//    }
    @Override
    public Integer countCustomersByDay(Integer d,Integer m, Integer y) {
        return customerRepository.getNewByDay(d, m, y);
    }
    @Override
    public List<Object[]> getStatistics(Pageable pageable) {
        return customerRepository.getStatistics(pageable);
    }

    @Override
    public List<Object[]> getStatistics1() {
        return customerRepository.getStatistics1();
    }

    @Override
    public List<Integer> getYearCreateCustomer() {
        return customerRepository.getYearCreateCustomer();
    }

    @Override
    public boolean checkDuplicatePhone(String phone) {
        return customerRepository.existsByPhone(phone);
    }

    @Override
    public boolean checkDuplicateEmail(String email) {
        return customerRepository.existsByEmail(email);
    }

    @Override
    public CustomerEntity save(CustomerEntity customerEntity) {
        return customerRepository.save(customerEntity);
    }
}
