package com.sapo.quanlybanhang.service;

import com.sapo.quanlybanhang.dto.BrandDto;
import com.sapo.quanlybanhang.dto.CategoryDto;

import java.util.List;

public interface CategoryService<t> {
    List<t> getAll();

    CategoryDto findById(int id);
    CategoryDto create(CategoryDto categoryDto);
}
