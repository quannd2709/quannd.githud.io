package com.sapo.quanlybanhang.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.sapo.quanlybanhang.entity.FeedBackEntity;
import com.sapo.quanlybanhang.entity.RoleEntity;
import lombok.Data;

import javax.validation.constraints.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Data
public class StaffDto {

    private int id;

    @NotBlank(message = "FullName is mandatory")
    private String fullName;

    //    @NotBlank(message = "PassWord is mandatory")
//    @Size(min = 6, max = 30, message = "Password must be 6-20 characters ")
    private String passWord;

    @NotBlank(message = "Address is mandatory")
    private String address;

    @NotBlank(message = "Email is mandatory")
    @Email(message = "Invalid email ")
    private String mail;

    @NotBlank(message = "Phone is mandatory")
    @Pattern(
            regexp = "^[0-9]{10}$",
            message = "Only Number Phone are accepted."
    )
    private String phone;

    @NotNull(message = "DateOfBirth is mandatory")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    @Past(message = "Date input is invalid for a birth date.")
    private Date dateOfBirth;

    private String status;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private Date createdDate;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private Date modifiedDate;

    //    @NotBlank(message = "CreateBy is mandatory")
    private String createBy;

    private String modifiedBy;

    private List<Integer> roleId;

    private List<String> roleName = new ArrayList();

    private List<RoleEntity> roleEntity = new ArrayList<>();

    private List<FeedBackEntity> feedBackEntities = new ArrayList<>();

}
