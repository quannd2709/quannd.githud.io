package com.sapo.quanlybanhang.converter;

import com.sapo.quanlybanhang.dto.CustomerDto;
import com.sapo.quanlybanhang.dto.FeedBackDto;
import com.sapo.quanlybanhang.entity.CustomerEntity;
import com.sapo.quanlybanhang.entity.FeedBackEntity;
import com.sapo.quanlybanhang.repository.FeedBackRepository;

public class FeedBackConverter {


    public static FeedBackDto toDto(FeedBackEntity feedBackEntity) {
       FeedBackDto feedBackDto = new FeedBackDto();
       feedBackDto.setId(feedBackEntity.getId());
       feedBackDto.setCreatedDate(feedBackEntity.getCreatedDate());
       feedBackDto.setCreatedBy(feedBackEntity.getCreatedBy());
       feedBackDto.setContent(feedBackEntity.getContent());
       feedBackDto.setSlove(feedBackEntity.getSlove());
       feedBackDto.setTitle(feedBackEntity.getTitle());
       feedBackDto.setModifiedDate(feedBackEntity.getModifiedDate());
        feedBackDto.setModifiedBy(feedBackEntity.getModifiedBy());
       if(feedBackDto!=null){
           feedBackDto.setCustomerId(feedBackEntity.getCustomerEntity().getId());
           feedBackDto.setCustomerName(feedBackEntity.getCustomerEntity().getName());
       }
       return feedBackDto;
    }

    public static FeedBackEntity toEntity(FeedBackDto feedBackDto) {
        FeedBackEntity feedBackEntity = new FeedBackEntity();
        feedBackEntity.setId(feedBackDto.getId());
        feedBackEntity.setCreatedDate(feedBackDto.getCreatedDate());
        feedBackEntity.setCreatedBy(feedBackDto.getCreatedBy());
        feedBackEntity.setContent(feedBackDto.getContent());
        feedBackEntity.setSlove(feedBackDto.getSlove());
        feedBackEntity.setTitle(feedBackDto.getTitle());
        feedBackEntity.setModifiedDate(feedBackDto.getModifiedDate());
        feedBackEntity.setModifiedBy(feedBackDto.getModifiedBy());
//        feedBackEntity.setStaffEntity(feedBackDto.getStaffEntity());
//        feedBackEntity.setCustomerEntity(feedBackDto.getCustomerEntity());
        return feedBackEntity;
    }
}
