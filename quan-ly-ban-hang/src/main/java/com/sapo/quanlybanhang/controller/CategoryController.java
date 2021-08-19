package com.sapo.quanlybanhang.controller;

import com.sapo.quanlybanhang.dto.BrandDto;
import com.sapo.quanlybanhang.dto.CategoryDto;
import com.sapo.quanlybanhang.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value = "api/v1")
public class CategoryController {
    @Autowired
    private CategoryService categoryService;

    @GetMapping(value = "/categories")
    public List<CategoryDto> getAll() {
        return categoryService.getAll();
    }

    @GetMapping(value = "/categories/{id}")
    public CategoryDto getById(@PathVariable int id) {

        return categoryService.findById(id);
    }
    @PostMapping(value = "/categories")
    public CategoryDto create(@RequestBody CategoryDto categoryDto) {
        categoryService.create(categoryDto);
        return categoryDto;
    }
}
