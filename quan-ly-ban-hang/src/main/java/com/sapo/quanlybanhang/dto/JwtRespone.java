package com.sapo.quanlybanhang.dto;

import lombok.Data;
import org.springframework.security.core.GrantedAuthority;

import java.util.List;

@Data
public class JwtRespone {
    private String token;
    private String type = "Bearer";
    private String fullName;

    private List<GrantedAuthority> code;
    public JwtRespone (String token, String fullName, List<GrantedAuthority> code){

        this.token = token;
        this.fullName = fullName;
        this.code = code;
    }
}
