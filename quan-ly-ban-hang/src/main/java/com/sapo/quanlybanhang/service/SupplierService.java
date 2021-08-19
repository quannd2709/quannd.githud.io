package com.sapo.quanlybanhang.service;

import com.sapo.quanlybanhang.dto.SupplierDto;

import java.util.List;

public interface SupplierService<t> {
    List<t> getAll();

    SupplierDto findById(int id);

    List<t> findAll(String keyword);

    SupplierDto create(SupplierDto supplierDto);

    SupplierDto deleteByID(int id);

    SupplierDto update(int id, SupplierDto supplierDto);

    List<t> getAllByDay();

    List<t> getByModified(String keyword);

    List<t> findPaginated(int pageNo, int pageSize);

    List<t> findAllPagination(String keyword, int pageNo, int pageSize);


}
