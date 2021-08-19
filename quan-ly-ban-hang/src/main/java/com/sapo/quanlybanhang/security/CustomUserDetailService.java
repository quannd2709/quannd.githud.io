package com.sapo.quanlybanhang.security;

import com.sapo.quanlybanhang.dto.MyUser;
import com.sapo.quanlybanhang.dto.RoleDto;
import com.sapo.quanlybanhang.dto.StaffDto;
import com.sapo.quanlybanhang.entity.PermissionEntity;
import com.sapo.quanlybanhang.entity.RoleEntity;
import com.sapo.quanlybanhang.entity.StaffEntity;
import com.sapo.quanlybanhang.repository.StaffRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Set;

@Service
public class CustomUserDetailService implements UserDetailsService {
    @Autowired
    private StaffRepository staffRepository;

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        StaffEntity staffEntity = staffRepository.findOneByPhone(s);
        if (staffEntity == null) {
            throw new UsernameNotFoundException("user not found");
        }

            List<GrantedAuthority> authorities = new ArrayList();
//        for(RoleEntity item : staffEntity.getRoles()){
//            authorities.add(new SimpleGrantedAuthority(item.getCode()));
//        }
        for(RoleEntity itemRole : staffEntity.getRoles()){
            for(PermissionEntity itemPermissons : itemRole.getPermissions()){
                authorities.add(new SimpleGrantedAuthority(itemPermissons.getCode()));
            }

        }

        MyUser myUser = new MyUser(staffEntity.getPhone(), staffEntity.getPassWord(),
                true, true, true, true, authorities);
        myUser.setFullName(staffEntity.getFullName());

        myUser.setCode(authorities);
        return myUser;

    }

//    private Collection<GrantedAuthority> getAuthorities (StaffDto staff){
//        List<RoleEntity> roles =  staff.getRoleEntity();
//        Collection<GrantedAuthority> authorities = new ArrayList<>(roles.size());
//        for(RoleEntity item : roles){
//            authorities.add(new SimpleGrantedAuthority(item.getName().toUpperCase()));
//        }
//        return  authorities;
//    }
}