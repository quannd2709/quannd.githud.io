package com.sapo.quanlybanhang.dto;


public class OrderItem {
    private Long countOrder;
    private Long priceOrder;
    private Long discount;

    public OrderItem(Long countOrder, Long priceOrder, Long discount) {
        this.countOrder = countOrder;
        this.priceOrder = priceOrder;
        this.discount = discount;
    }
    public OrderItem(Long countOrder, Long priceOrder) {
        this.countOrder = countOrder;
        this.priceOrder = priceOrder;

    }

    public Long getCountOrder() {
        return countOrder;
    }

    public Long getPriceOrder() {
        return priceOrder;
    }

    public Long getDiscount() {
        return discount;
    }

    public void setCountOrder(Long countOrder) {
        this.countOrder = countOrder;
    }

    public void setPriceOrder(Long priceOrder) {
        this.priceOrder = priceOrder;
    }

    public void setDiscount(Long discount) {
        this.discount = discount;
    }
}
