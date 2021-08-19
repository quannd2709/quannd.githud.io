package com.sapo.quanlybanhang.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "customers")
@Data
public class CustomerEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "name")
    private String name;

    @Column(name = "phone")
    private String phone;

    @Column(name = "email")
    private String email;

    @Column(name = "gender")
    private String gender;
    @Column(name = "address")
    private String address;
    @Column(name = "date_of_birth")
    private Date dateOfBirth;

    @Column(name = "note")
    private String note;

    @Column(name = "created_date")
    private Date createdDate;

    @Column(name = "modified_date")
    private Date modifiedDate;

    @Column(name = "created_by")
    private String createBy;

    @Column(name = "modified_by")
    private String modifiedBy;

    @Column(name = "status")
    private String status;

    public CustomerEntity(String name, String phone, String email, String gender, String address, Date dateOfBirth, String note, Date createdDate, Date modifiedDate, String createBy, String modifiedBy, String status) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.gender = gender;
        this.address = address;
        this.dateOfBirth = dateOfBirth;
        this.note = note;
        this.createdDate = createdDate;
        this.modifiedDate = modifiedDate;
        this.createBy = createBy;
        this.modifiedBy = modifiedBy;
        this.status = status;
    }

    public CustomerEntity(int id, String name, String phone, String email, String gender, String address, Date dateOfBirth, String note, Date createdDate, Date modifiedDate, String createBy, String modifiedBy, String status) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.gender = gender;
        this.address = address;
        this.dateOfBirth = dateOfBirth;
        this.note = note;
        this.createdDate = createdDate;
        this.modifiedDate = modifiedDate;
        this.createBy = createBy;
        this.modifiedBy = modifiedBy;
        this.status = status;
    }

    public CustomerEntity(String name, String phone, String email, Date dateOfBirth) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.dateOfBirth = dateOfBirth;
    }

    @OneToMany(mappedBy = "customer")
    private List<OrderEntity> orderEntities = new ArrayList();

    @OneToMany(mappedBy = "customerBill")
    private List<BillEntity> billEntities = new ArrayList();

//    @OneToMany(mappedBy = "customerEntity",fetch = FetchType.LAZY)
//    private List<FeedBackEntity> feedBackEntities = new ArrayList();

    public CustomerEntity() {

    }
}
