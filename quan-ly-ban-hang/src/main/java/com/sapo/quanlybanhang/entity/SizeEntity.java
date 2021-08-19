package com.sapo.quanlybanhang.entity;


import lombok.Data;

import javax.persistence.*;
import java.util.List;


@Entity
@Table(name = "size")
@Data
public class SizeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "size")
    private String size;

    @OneToMany(mappedBy = "size", cascade = CascadeType.ALL)
    private List<ProductEntity> productEntities;

    public SizeEntity(int id, String size) {
        this.id = id;
        this.size = size;
    }

    public SizeEntity() {
    }
}
