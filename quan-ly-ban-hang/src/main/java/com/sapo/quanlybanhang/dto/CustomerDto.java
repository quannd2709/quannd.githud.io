package com.sapo.quanlybanhang.dto;


import com.fasterxml.jackson.annotation.JsonFormat;
import jdk.jfr.Timestamp;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;
import org.springframework.format.annotation.NumberFormat;

import javax.validation.constraints.Max;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Past;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CustomerDto implements Serializable {
    private int id;
    @Size(min = 2, max = 250, message = "Độ dài của tên phải lớn hơn 2 và nhỏ hơn 250 kí tự")
    private String name;
    @NumberFormat
    @Length(min = 10, max = 11, message = "Số điện thoại không đúng")
// @UniqueElements(message = "So điện thoại phải là duy nhất")
    private String phone;
    @Size(min = 5, max = 250, message = "Độ dài của Email phải lớn hơn 2 và nhỏ hơn 250 kí tự")
    //@NotNull(message = "Email Khong duoc de trong")
    // @UniqueElements(message = "Email phai la duy nhat")
    private String email;
    private String gender;
    @Size(min = 5, max = 250, message = "Độ dài của Địa chỉ phải lớn hơn 2 và nhỏ hơn 250 kí tự")
    private String address;

    @Past(message = "Ngày sinh không được lớn hơn hiện tại")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private Date dateOfBirth;

    @Past(message = "Date Create must Before Present")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private Date createdDate;

    @Timestamp
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private Date modifiedDate = new Date();
  //  @NotNull(message = "Không được để trống Create By")
    private String createBy;
  //  @NotNull(message = "Không được để trống ModìieBy By")
    private String modifiedBy;
 //   @NotNull(message = "Status Khong duoc trong")
    private String status;
@Size(max = 250,message = "Nội dung ghi chú phải ít hơn 250 kí tự")
    private String note;

    public CustomerDto(String name, String phone, String email, Date dateOfBirth) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.dateOfBirth = dateOfBirth;
    }

    public CustomerDto(String name, String phone, String email, String gender, String address, Date dateOfBirth,
                       String note, Date createdDate, Date modifiedDate, String createBy, String modifiedBy, String status) {
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
}

