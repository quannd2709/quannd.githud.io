package com.sapo.quanlybanhang.utils;

import com.sapo.quanlybanhang.dto.MyUser;
import org.springframework.security.core.context.SecurityContextHolder;

public class SecurityUtils {
    public static MyUser getPrincipal() {
        MyUser myUser = (MyUser) (SecurityContextHolder.getContext()).getAuthentication().getPrincipal();
        return myUser;
    }
}
