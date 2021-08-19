package com.sapo.quanlybanhang.security.jwt;

import com.sapo.quanlybanhang.constant.JwtConstant;
import com.sapo.quanlybanhang.dto.MyUser;
import io.jsonwebtoken.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.sql.Timestamp;

/**
 * generate token from user
 * get userName from token
 * validate token
 */

@Component
public class JwtProvider {
    private Logger logger = LoggerFactory.getLogger(JwtProvider.class);


    /** * Tạo ra token từ chuỗi authentication    */
    public String generateJwtToken(Authentication auth) {
        MyUser user = (MyUser) auth.getPrincipal();
        /**  Mã hóa token   */
        return Jwts.builder()
                .setSubject(user.getUsername())
                .setIssuedAt(new Timestamp(System.currentTimeMillis()))
                .setExpiration(new Timestamp(System.currentTimeMillis() + JwtConstant.EXPIRATON))
                .signWith(SignatureAlgorithm.HS256, JwtConstant.SECRET)
                .compact();
    }

    /**  Lấy Username từ token đã được mã hóa   */
    public String getUserNameFormJwtToken(String token) {

        try {
            Claims claims = Jwts.parser()
                    .setSigningKey(JwtConstant.SECRET)
                    .parseClaimsJws(token).getBody();
            String userName = claims.getSubject();
            return userName;
        } catch (Exception e) {
            logger.error(e.getMessage());
            return null;
        }

    }

    /**  Check token   */
    public boolean validateJwtToken(String authToken) {
        try {
            Jwts.parser().setSigningKey(JwtConstant.SECRET).parseClaimsJws(authToken);
            return true;
        } catch (SignatureException e) {
            logger.error("Invalid JWT signature -> Message: {} ", e);
        } catch (MalformedJwtException e) {
            logger.error("Invalid JWT token -> Message: {}", e);
        } catch (ExpiredJwtException e) {
            logger.error("Expired JWT token -> Message: {}", e);
        } catch (UnsupportedJwtException e) {
            logger.error("Unsupported JWT token -> Message: {}", e);
        } catch (IllegalArgumentException e) {
            logger.error("JWT claims string is empty -> Message: {}", e);
        }

        return false;
    }

}
