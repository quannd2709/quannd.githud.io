package com.sapo.quanlybanhang.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "feedbacks")
@Data@NoArgsConstructor@AllArgsConstructor
public class FeedBackEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "created_date")
    private Date createdDate= new Date();
@Column(name = "created_by")
private String createdBy;

    @Column(name = "content")
    private String content;

    @Column(name = "slove")
    private String slove;
    @Column(name = "title")
    private String title;
    @Column(name = "modified_date")
    private Date modifiedDate = new Date();
    @Column(name = "modified_by")
    private String modifiedBy;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "customer_id")
    private CustomerEntity customerEntity;
}
