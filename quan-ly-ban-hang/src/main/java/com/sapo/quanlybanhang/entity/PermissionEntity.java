package com.sapo.quanlybanhang.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Collection;


@Entity
@Table(name = "permissions")
@Data
@AllArgsConstructor
@NoArgsConstructor

public class PermissionEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "name")
    private String name;

    @Column( name = "code")
    private String code;

    @ManyToMany(mappedBy = "permissions", fetch = FetchType.LAZY)
    private Collection<RoleEntity> roleEntities;



}
