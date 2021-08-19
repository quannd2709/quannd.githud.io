package com.sapo.quanlybanhang.controller;

import com.sapo.quanlybanhang.dto.JwtRespone;
import com.sapo.quanlybanhang.dto.LoginForm;
import com.sapo.quanlybanhang.dto.StaffDto;
import com.sapo.quanlybanhang.repository.StaffRepository;
import com.sapo.quanlybanhang.security.jwt.JwtProvider;
import com.sapo.quanlybanhang.service.StaffService;
import com.sapo.quanlybanhang.utils.SecurityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class LoginController {


    private final JwtProvider jwtProvider;
    private final AuthenticationManager authenticationManager;
    @Autowired
    StaffRepository staffRepository;
    @Autowired
    PasswordEncoder encoder;
    @Autowired
    StaffService staffService;

    public LoginController(JwtProvider jwtProvider, AuthenticationManager authenticationManager) {
        this.jwtProvider = jwtProvider;
        this.authenticationManager = authenticationManager;
    }

    @PostMapping("/login")
    public ResponseEntity authenticateUser(@Validated @RequestBody LoginForm loginForm) {
        Authentication authentication = authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(
                        loginForm.getPhone(),
                        loginForm.getPassWord())
                );
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtProvider.generateJwtToken(authentication);
        return ResponseEntity.ok(new JwtRespone(jwt, SecurityUtils.getPrincipal().getFullName(), SecurityUtils.getPrincipal().getCode()));

    }


}
