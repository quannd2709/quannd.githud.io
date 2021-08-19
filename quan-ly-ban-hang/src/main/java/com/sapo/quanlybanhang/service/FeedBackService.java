package com.sapo.quanlybanhang.service;

import com.sapo.quanlybanhang.dto.CustomerDto;
import com.sapo.quanlybanhang.dto.FeedBackDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Date;
import java.util.List;

public interface FeedBackService {
    FeedBackDto findById(Integer id);

    Page<FeedBackDto> getPage(Pageable pageable);


//    Page<FeedBackDto> findByCustomerAndStaff(Integer id1,Integer id2,Pageable pageable);

    //
    Page<FeedBackDto> findByCustomer(Integer id,Pageable pageable);

    Page<FeedBackDto> findBySlove(String slove,Pageable pageable);
    Page<FeedBackDto> findByCustomerName(String name, Pageable pageable);
    Page<FeedBackDto> findByCustomerNameAndSlove(String name,String slove,Pageable pageable);
    List<FeedBackDto> getAll();
    //
    Page<FeedBackDto> getByDate(Date date, Pageable pageable);
    Page<FeedBackDto> getByRangeDate(Date dateBegin,Date dateEnd, Pageable pageable);
    FeedBackDto save(FeedBackDto FeedBackDto);

    //
    void delete(Integer id);

}
