package com.sapo.quanlybanhang.security.jwt;

import com.sapo.quanlybanhang.dto.MyUser;
import com.sapo.quanlybanhang.security.CustomUserDetailService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class JwtAuthTokenFilter extends OncePerRequestFilter {
    private final static Logger logger = LoggerFactory.getLogger(JwtAuthTokenFilter.class);
    @Autowired
    private CustomUserDetailService customUserDetailService;
    @Autowired
    private JwtProvider jwtProvider;

    /**
     * filter request then forward to servlet
     * take token from header of request
     * validate token
     */
    @Override
    protected void doFilterInternal(HttpServletRequest httpServletRequest,
                                    HttpServletResponse httpServletResponse, FilterChain filterChain) throws ServletException, IOException {
        try {
            String jwt = getJwt(httpServletRequest);
            String phone = jwtProvider.getUserNameFormJwtToken(jwt);
            if (jwt != null && jwtProvider.validateJwtToken(jwt)) {
                MyUser user = (MyUser) customUserDetailService.loadUserByUsername(phone);
                UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(
                        user, null, user.getAuthorities());
                usernamePasswordAuthenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(httpServletRequest));
                SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
            }

        } catch (Exception e) {
            logger.error("can not set authentication error ->", e.getMessage());
        }
        filterChain.doFilter(httpServletRequest, httpServletResponse);
    }

    String getJwt(HttpServletRequest request) {
        String token = request.getHeader("Authorization");
        if (token != null && token.startsWith("Bearer ")) {
            return token.replace("Bearer ", "");
        }
        return null;
    }
}
