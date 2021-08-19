package com.sapo.quanlybanhang.entity;

import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Collection;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "supplier")
@Data
public class SupplierEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "code")
    private String code;
    @Column(name = "name")
    private String name;
    @Column(name = "email")
    private String email;
    @Column(name = "address")
    private String address;
    @Column(name = "phone")
    private String phone;
    @Column(name = "state")
    private String state;
    @Column(name ="created_date")
    @CreationTimestamp
    private Date createdDate;
    @Column(name ="modified_date")
    private Date modifiedDate;
    @Column(name = "created_by")
    private String createdBy;
    @Column(name = "modified_by")
    private String modifiedBy;


    @OneToMany(mappedBy = "supplier", cascade = CascadeType.ALL)
    private List<ProductEntity> productEntities;

    public SupplierEntity() {
    }
}
