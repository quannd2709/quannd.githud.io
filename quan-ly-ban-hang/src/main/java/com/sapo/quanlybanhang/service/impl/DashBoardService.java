package com.sapo.quanlybanhang.service.impl;

import com.sapo.quanlybanhang.dao.IOrderDao;
import com.sapo.quanlybanhang.dto.DashBoarDto;
import com.sapo.quanlybanhang.dto.DashBoardItem;
import com.sapo.quanlybanhang.dto.OrderItem;
import com.sapo.quanlybanhang.dto.enums.OptionTime;
import com.sapo.quanlybanhang.repository.BillRepository;
import com.sapo.quanlybanhang.repository.OrderRepository;
import com.sapo.quanlybanhang.service.IDashBoardService;
import org.hibernate.criterion.Order;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.YearMonth;
import java.time.temporal.ChronoField;
import java.util.ArrayList;
import java.util.List;

@Service
public class DashBoardService implements IDashBoardService {
    Logger logger = LoggerFactory.getLogger(DashBoardService.class);
    Integer getDay = null;
    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private BillRepository billRepository;

    @Autowired
    private IOrderDao orderDao;

    @Override
    public DashBoarDto collectOrder(DashBoarDto dto) {
        LocalDate thisDay = LocalDate.now();
        Long count = 0L;
        OrderItem OrderItem = orderRepository.findPrice(LocalDate.now());
        OrderItem BillItem = billRepository.findPrice(LocalDate.now());
        List<DashBoardItem> dashBoardItems = new ArrayList();
        if (OrderItem.getPriceOrder() == null) {
            OrderItem.setPriceOrder(0L);
        }
        if (OrderItem.getCountOrder() == null) {
            OrderItem.setCountOrder(0L);
        }

        if (BillItem.getPriceOrder() == null) {
            BillItem.setPriceOrder(0L);
        }
        if (BillItem.getCountOrder() == null) {
            BillItem.setCountOrder(0L);
        }
        if( OrderItem.getDiscount()==null){
            OrderItem.setDiscount(0L);
        }
        OptionTime option = dto.getOptionTime();
        logger.info("price order:" + OrderItem);
        logger.info("price bill:" + BillItem);
        Long price = OrderItem.getPriceOrder() - BillItem.getPriceOrder()- OrderItem.getDiscount();
        dto.setPrice(price);
        dto.setBillNumber(BillItem.getCountOrder().intValue());
        dto.setOrderNumber(OrderItem.getCountOrder().intValue());

        switch (option) {

            case TODAY:
                dashBoardItems = orderDao.findAllByTime(thisDay, thisDay);
                count = 0L;
                for (DashBoardItem item : dashBoardItems) {
                    count += item.getPrice();
                }
                dto.setTotalPrice(count);
                dto.setDashBoardItems(dashBoardItems);
                logger.info("hôm nay:" + thisDay);
                break;
            case THIS_WEEK:
                getDay = thisDay.get(ChronoField.DAY_OF_WEEK);
                logger.info("ngày trong tuần:" + getDay);
                dashBoardItems = orderDao.findAllByTime(thisDay.minusDays(getDay - 1), thisDay);
                count = 0L;
                for (DashBoardItem item : dashBoardItems) {
                    count += item.getPrice();
                }
                dto.setTotalPrice(count);
                logger.info("ngày đầu tuần :" + thisDay.minusDays(getDay - 1));
                dto.setDashBoardItems(dashBoardItems);
                break;
            case YESTERDAY:
                dashBoardItems = orderDao.findAllByTime(thisDay.minusDays(1), thisDay.minusDays(1));
                dto.setDashBoardItems(dashBoardItems);
                count = 0L;
                for (DashBoardItem item : dashBoardItems) {
                    count += item.getPrice();
                }
                dto.setTotalPrice(count);
                logger.info("hôm qua:" + thisDay.minusDays(1));
                break;
            case LAST_MONTH:
                thisDay = thisDay.minusMonths(1);
                YearMonth month = YearMonth.from(thisDay);
                logger.info("tháng trước :" + month + "/" + month.atDay(1) + "/" + month.atEndOfMonth());
                dashBoardItems = orderDao.findAllByTime(month.atDay(1), month.atEndOfMonth());
                count = 0L;
                for (DashBoardItem item : dashBoardItems) {
                    count += item.getPrice();
                }
                dto.setTotalPrice(count);
                dto.setDashBoardItems(dashBoardItems);
                break;
            case THIS_MONTH:
                getDay = thisDay.get(ChronoField.DAY_OF_MONTH);
                dashBoardItems = orderDao.findAllByTime(thisDay.minusDays(getDay - 1), thisDay);
                count = 0L;
                for (DashBoardItem item : dashBoardItems) {
                    count += item.getPrice();
                }
                dto.setTotalPrice(count);
                logger.info("tháng nay :" + "/" + thisDay.minusDays(getDay - 1) + "-" + thisDay);
                dto.setDashBoardItems(dashBoardItems);
                break;
            default:
                break;
        }
        logger.info("dashboard:" + dto);
        return dto;
    }
}
