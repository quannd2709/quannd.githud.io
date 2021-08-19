package com.sapo.quanlybanhang.controller;

import com.sapo.quanlybanhang.dto.ProductDto;
import com.sapo.quanlybanhang.dto.SupplierDto;
import com.sapo.quanlybanhang.service.SupplierService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value = "api/v1")
public class SupplierController {
    @Autowired
    private SupplierService supplierService;

    @GetMapping(value = "/suppliers")
    public List<SupplierDto> getAll() {
        return supplierService.getAll();
    }

    @GetMapping(value = "/suppliers/{id}")
    public SupplierDto getById(@PathVariable int id) {
        return supplierService.findById(id);
    }


    @GetMapping(value = "/supplierss")
    public List<SupplierDto> search(@RequestParam String keyword) {
        if (keyword == "") {
            return supplierService.getAll();
        } else {
            return supplierService.findAll(keyword);
        }
    }

    @PostMapping(value = "/suppliers")
    public SupplierDto create(@RequestBody SupplierDto supplierDto) {
        supplierService.create(supplierDto);
        return supplierDto;
    }

    @PutMapping(value = "/suppliers/{id}")
    public ResponseEntity<SupplierDto> update(@PathVariable int id, @RequestBody SupplierDto supplierDto) {
        supplierService.update(id, supplierDto);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping(value = "/supplier")
    public List<SupplierDto> findPaginated(@RequestParam int pageNo, @RequestParam int pageSize) {
        return supplierService.findPaginated(pageNo, pageSize);

    }

    @DeleteMapping(value = "/suppliers/{id}")
    public void deleteProductById(@PathVariable int id) {
        supplierService.deleteByID(id);
    }

    @GetMapping(value = "/supplier_search")
    public List<ProductDto> search(@RequestParam String keyword, @RequestParam int pageNo, @RequestParam int pageSize) {
        if (keyword == "") {
            return supplierService.findPaginated(pageNo, pageSize);
        } else
            return supplierService.findAllPagination(keyword, pageNo, pageSize);
    }

}
