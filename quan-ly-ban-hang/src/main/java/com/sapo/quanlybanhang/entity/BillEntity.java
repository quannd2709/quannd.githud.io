package com.sapo.quanlybanhang.entity;

import lombok.Data;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "return_orders")
@Data
public class BillEntity {
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

   @Column(name = "code")
    private String code;

    @PostPersist
    public void generateCode(){
        code = ("RSAPO000"+id);
    }

   @Column(name = "modified_date")
    private Timestamp modifiedDate;

   @Column(name = "modified_by")
    private String modifiedBy;

   @Column(name = "created_date")
    private Timestamp createdDate;

   @Column(name = "created_by")
    private String createdBy;

   @Column( name = "price")
     private  Long price;

    @ManyToOne
    @JoinColumn(name = "order_id")
    private OrderEntity orderEntity;

    @ManyToOne
    @JoinColumn(name = "staff_id")
    private StaffEntity staffBill;

    @ManyToOne
    @JoinColumn(name = "customer_id")
    private CustomerEntity customerBill;

    @OneToMany(mappedBy = "bill",cascade = CascadeType.ALL)
    private List<BillDetailEntity> billDetailEntities = new ArrayList();
}
