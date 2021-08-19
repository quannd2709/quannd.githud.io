package com.sapo.quanlybanhang.dto;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;

import java.util.Collection;

import java.util.List;

public class MyUser extends User {

    String fullName;

    public MyUser(String username, String password, boolean enabled,
                  boolean accountNonExpired, boolean credentialsNonExpired,
                  boolean accountNonLocked, Collection<? extends GrantedAuthority> authorities) {
        super(username, password, enabled, accountNonExpired, credentialsNonExpired, accountNonLocked, authorities);
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    List<GrantedAuthority> code;

    public List<GrantedAuthority> getCode() {
        return code;
    }

    public void setCode(List<GrantedAuthority> code) {
        this.code = code;
    }

}
