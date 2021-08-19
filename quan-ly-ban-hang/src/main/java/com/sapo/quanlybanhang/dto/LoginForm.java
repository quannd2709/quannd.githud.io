package com.sapo.quanlybanhang.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class LoginForm {
    @NotBlank(message = "userName is mandatory")
    private String phone;

    @NotBlank(message = "passWord is mandatory")
    private String passWord;
}
