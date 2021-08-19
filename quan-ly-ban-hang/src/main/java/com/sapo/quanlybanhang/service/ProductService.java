package com.sapo.quanlybanhang.service;

import com.sapo.quanlybanhang.dto.InputProductDto;
import com.sapo.quanlybanhang.dto.ProductDto;
import com.sapo.quanlybanhang.dto.UpdateDto;
import com.sapo.quanlybanhang.entity.ProductEntity;
import org.springframework.data.domain.Pageable;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.List;


public interface ProductService <t>{
    List<t> getAll();
  List<t> getAll1();
  List<t> getAll3();
  ResponseEntity<t> create(InputProductDto inputProductDTO);
    ProductDto findById(int id);
    ProductEntity update(int id, ProductEntity productEntity);
    List<t> searchByNameAndCode(String keyword, int pageNo,int pageSize);
    List<t> filterAll(int keyword, int pageNo,int pageSize);
    List<t> searchByKey(String keyword);
    List<t> getAllByDay();
    List<Object[]> statistical(Date start, Date to);
  List<Object[]>statisticalPagination(Date start, Date to,int pageNo,int pageSize);
    List<t> getAllByMonth();
    List<t> sortByName();
    List<t> sortByPrice();
    List<t> sortByNumber();
    List<t> searchByCategory(int keyword);
    List<t> searchByCate(String keyword);
    List<t> searchByCatePagination(String keyword, int pageNo,int pageSize);
    List<t> searchByCategories(int keyword,int pageNo,int pageSize);
    List<t> findPaginated(int pageNo, int pageSize);
    ProductEntity deleteByID(int id);
    ProductEntity RevertByID(int id);
    List<t> searchByNameAndCodeByCategoryPagination(String filter,String keyword,int pageNo, int PageSize);
    List<t> searchByNameAndCodeByCategory(String keyword, String filter);


  ResponseEntity<t> updateProduct(int id, UpdateDto productDto);
    List<ProductDto> findAll(Pageable pageable);



}
