package com.sapo.quanlybanhang.service.impl;

import com.sapo.quanlybanhang.converter.BillConverter;
import com.sapo.quanlybanhang.dao.IBillDao;
import com.sapo.quanlybanhang.dto.BillDto;
import com.sapo.quanlybanhang.dto.BillListDto;
import com.sapo.quanlybanhang.dto.OrderDetailDto;
import com.sapo.quanlybanhang.dto.OrderPageable;
import com.sapo.quanlybanhang.entity.*;
import com.sapo.quanlybanhang.repository.*;
import com.sapo.quanlybanhang.service.IBillService;
import com.sapo.quanlybanhang.utils.SecurityUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class BillService implements IBillService {
    public static final String PREFIX = "HOA";
    public  static final Logger logger = LoggerFactory.getLogger(BillService.class);
    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private OrderDetailRepository orderDetailRepository;

    @Autowired
    private BillRepository billRepository;

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private StaffRepository staffRepository;

    @Autowired
    private IBillDao billDao;
    @Override
    public BillDto save(BillDto billDto) {
        Long price = 0L;
        Long discount = 0L;
        Integer index =0;
        Integer amount = 0;
        List<BillDetailEntity> billDetailEntities = new ArrayList();

        OrderEntity orderEntity = orderRepository.findOneById(billDto.getOrderId());
        BillEntity billEntity = BillConverter.toEntity(billDto);
        List<OrderDetailDto> orderDetailDtos = billDto.getOrderDetailDtos();
        if(System.currentTimeMillis()>(orderEntity.getCreatedDate().getTime()+2592000000L)){
            return null;
        }
        List<Integer> odi = orderDetailDtos.stream()
                .map(item -> item.getId()).collect(Collectors.toList());
        List<OrderDetailEntity> orderDetailEntities = orderDetailRepository.findAllById(odi);
        for(OrderDetailEntity item : orderDetailEntities ){
            OrderDetailDto orderDetailDto = orderDetailDtos.get(index);
            if(item.getRemainAmount()<orderDetailDto.getAmountPay()){
                orderDetailDto.setAmountPay(item.getQuanlity());
            }
            if(item.getRemainAmount()<=0){
                return null;
            }
            item.setRemainAmount(item.getRemainAmount()-orderDetailDto.getAmountPay());
            item.getProduct().setNumberProduct(item.getProduct().getNumberProduct()+orderDetailDto.getAmountPay());
            BillDetailEntity billDetailEntity = new BillDetailEntity();
            billDetailEntity.setBill(billEntity);
            billDetailEntity.setPrice(orderDetailDto.getPrice());
            billDetailEntity.setQuanlity(orderDetailDto.getAmountPay());
            billDetailEntity.setProductBill(item.getProduct());
            billDetailEntities.add(billDetailEntity);
            index +=1;
        }
        StaffEntity staffEntity =  staffRepository.findOneByPhone(SecurityUtils.getPrincipal().getUsername());
        billEntity.setPrice(billDto.getPrice());
        billEntity.setCreatedBy(SecurityUtils.getPrincipal().getFullName());
        billEntity.setStaffBill(staffEntity);
        billEntity.setCustomerBill(orderEntity.getCustomer());
        billEntity.setOrderEntity(orderEntity);
        billEntity.setBillDetailEntities(billDetailEntities);
        billEntity.setCreatedDate(new Timestamp(System.currentTimeMillis()));
        billEntity = billRepository.save(billEntity);

        return BillConverter.toDto(billEntity);
    }

    @Override
    public Long checkPrice(OrderDetailDto dto, OrderDetailEntity entity, OrderEntity orderEntity) {
        Long discount = 0L;
        if(System.currentTimeMillis()<(orderEntity.getCreatedDate().getTime()+604800000L)){
            discount = dto.getDiscount();
        }else if(System.currentTimeMillis()<(orderEntity.getCreatedDate().getTime()+ 2592000000L)){
            discount = dto.getDiscount()*70/100;
        }

        return discount;
    }

    @Override
    public List<BillDto> findAll(Pageable pageable) {
        List<BillEntity> list = billRepository.findAll(pageable).getContent();
        return list.stream().map(item-> BillConverter.toDto(item)).collect(Collectors.toList());
    }

    @Override
    public BillListDto findByCodeAndCustomer(OrderPageable orderPageable) {
        return billDao.findByCodeAndCustomer(orderPageable);

    }

    @Override
    public BillEntity findById(Integer id) {
        return billRepository.findOneById(id);
    }

    @Override
    public Integer getTotalItem() {
        return (int)billRepository.count();
    }
}
