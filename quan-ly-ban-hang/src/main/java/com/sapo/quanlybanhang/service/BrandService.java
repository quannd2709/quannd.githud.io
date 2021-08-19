package com.sapo.quanlybanhang.service;

import com.sapo.quanlybanhang.dto.BrandDto;
import com.sapo.quanlybanhang.dto.SupplierDto;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface BrandService<t> {
    List<t> getAll();
    ResponseEntity<t> create(BrandDto brandDto);
}
