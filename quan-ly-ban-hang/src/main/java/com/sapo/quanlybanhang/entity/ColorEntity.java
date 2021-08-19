package com.sapo.quanlybanhang.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "colors")
@Data
public class ColorEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "code")
    private String code;
    @Column(name = "name")
    private String name;

    @OneToMany(mappedBy = "color", cascade = CascadeType.ALL)

    private List<ProductEntity> productEntities;

    public ColorEntity(int id, String code, String name) {
        this.id = id;
        this.code = code;
        this.name = name;
    }

    public ColorEntity() {
    }
}
