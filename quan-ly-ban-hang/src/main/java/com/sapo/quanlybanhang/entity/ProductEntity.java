package com.sapo.quanlybanhang.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.util.Collection;
import java.util.Date;

@Entity
@Table(name = "products")
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class ProductEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "code")
    private String code;
    @Column(name = "name")
    private String name;

    @Column(name = "number_product")
    private int numberProduct;

    @Column(name = "sell_product")
    private int sellProduct;

    @Column(name = "image")
    private String image;

    @Column(name = "color")
    private String color;

    @Column(name = "size")
    private String size;

    @Column(name = "price")
    private Long price;

    @Column(name = "decription")
    private String description;
    @Column(name = "created_date")
    @CreationTimestamp
    private Date createdDate;


    @Column(name = "modified_date")
    @UpdateTimestamp
    private Date modifiedDate;

    @Column(name = "modified_by")
    private String modifiedBy;

    @Column(name = "created_by")
    private String createdBy;
    @Column(name = "state")
    private String state;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id")
    private CategoryEntity category;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "brand_id")
    private BrandEntity brand;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "supplier_id")
    private SupplierEntity supplier;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
    private Collection<OrderDetailEntity> orderDetailEntities;

    @OneToMany(mappedBy = "productBill", cascade = CascadeType.ALL)
    private Collection<BillDetailEntity> billDetailEntities;


}
