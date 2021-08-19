package com.sapo.quanlybanhang.service.impl;

import com.sapo.quanlybanhang.converter.CustomerConvert;
import com.sapo.quanlybanhang.converter.FeedBackConverter;
import com.sapo.quanlybanhang.dto.CustomerDto;
import com.sapo.quanlybanhang.dto.FeedBackDto;
import com.sapo.quanlybanhang.entity.CustomerEntity;
import com.sapo.quanlybanhang.entity.FeedBackEntity;
import com.sapo.quanlybanhang.repository.CustomerRepository;
import com.sapo.quanlybanhang.repository.FeedBackRepository;
import com.sapo.quanlybanhang.service.FeedBackService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
@Service
public class FeedBackSeriveImpl implements FeedBackService {
    private final FeedBackRepository feedBackRepository;
private  final CustomerRepository customerRepository;
    public FeedBackSeriveImpl(FeedBackRepository feedBackRepository, CustomerRepository customerRepository) {
        this.feedBackRepository = feedBackRepository;
        this.customerRepository = customerRepository;
    }

    @Override
    public FeedBackDto findById(Integer id) {
        FeedBackEntity feedBackEntity=feedBackRepository.getById(id);
        FeedBackDto feedBackDto = FeedBackConverter.toDto(feedBackEntity);
        return feedBackDto;
    }

    @Override
    public Page<FeedBackDto> getPage(Pageable pageable) {
        Page<FeedBackEntity> entityPage = feedBackRepository.getAll(pageable);
        Page<FeedBackDto> dtoPage = entityPage.map(FeedBackConverter::toDto);
        return entityPage.hasContent() ? dtoPage : null;
    }
//
//    @Override
//    public Page<FeedBackDto> findByCustomerAndStaff(Integer customerId, Integer staffId, Pageable pageable) {
//        Page<FeedBackEntity> entityPage = feedBackRepository.getAllByCustomerAndStaff(customerId,staffId,pageable);
//        Page<FeedBackDto> dtoPage = entityPage.map(FeedBackConverter::toDto);
//        return entityPage.hasContent() ? dtoPage : null;
//    }

    @Override
    public Page<FeedBackDto> findByCustomer(Integer id, Pageable pageable) {
        Page<FeedBackEntity> entityPage = feedBackRepository.getAllByCustomer(id,pageable);
        Page<FeedBackDto> dtoPage = entityPage.map(FeedBackConverter::toDto);
        return entityPage.hasContent() ? dtoPage : null;
    }

    @Override
    public Page<FeedBackDto> findBySlove(String slove, Pageable pageable) {
        Page<FeedBackEntity> entityPage = feedBackRepository.getAllBySlove(slove,pageable);
        Page<FeedBackDto> dtoPage = entityPage.map(FeedBackConverter::toDto);
        return entityPage.hasContent() ? dtoPage : null;
    }

    @Override
    public Page<FeedBackDto> findByCustomerName(String name, Pageable pageable) {
        Page<FeedBackEntity> entityPage = feedBackRepository.getAllByCustomerName(name,pageable);
        Page<FeedBackDto> dtoPage = entityPage.map(FeedBackConverter::toDto);
        return entityPage.hasContent() ? dtoPage : null;
    }

    @Override
    public Page<FeedBackDto> findByCustomerNameAndSlove(String name, String slove, Pageable pageable) {
        Page<FeedBackEntity> entityPage = feedBackRepository.getAllByCustomerNameAndSlove(name,slove,pageable);
        Page<FeedBackDto> dtoPage = entityPage.map(FeedBackConverter::toDto);
        return entityPage.hasContent() ? dtoPage : null;
    }

    @Override
    public List<FeedBackDto> getAll() {
        return null;
    }

    @Override
    public Page<FeedBackDto> getByDate(Date date, Pageable pageable) {
        Page<FeedBackEntity> entityPage = feedBackRepository.getAllByCreatedDate(date,pageable);
        Page<FeedBackDto> dtoPage = entityPage.map(FeedBackConverter::toDto);
        return entityPage.hasContent() ? dtoPage : null;
    }

    @Override
    public Page<FeedBackDto>getByRangeDate(Date dateBegin, Date dateEnd, Pageable pageable) {
        Page<FeedBackEntity> entityPage = feedBackRepository.getAllByRangeDate(dateBegin,dateEnd,pageable);
        Page<FeedBackDto> dtoPage = entityPage.map(FeedBackConverter::toDto);
        return entityPage.hasContent() ? dtoPage : null;
    }

    @Override
    public FeedBackDto save(FeedBackDto feedBackDto) {
        System.out.println(feedBackDto);
        FeedBackEntity feedBackEntity = FeedBackConverter.toEntity(feedBackDto);
        CustomerEntity customerEntity = customerRepository.findOneById(feedBackDto.getCustomerId());
        feedBackEntity.setCustomerEntity(customerEntity);
        System.out.println("customentity:  "+customerEntity);
        feedBackRepository.save(feedBackEntity);
        return feedBackDto;
    }

    @Override
    public void delete(Integer id) {
feedBackRepository.deleteById(id);
    }
}
