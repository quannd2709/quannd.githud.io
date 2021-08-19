package com.sapo.quanlybanhang.controller;

import com.sapo.quanlybanhang.dto.*;
import com.sapo.quanlybanhang.entity.ProductEntity;
import com.sapo.quanlybanhang.service.ProductService;
import com.sapo.quanlybanhang.service.UploadService;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

import java.sql.Date;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value = "api/v1")
public class ProductController {
    @Autowired
    private ProductService productService;
    @Autowired
    private UploadService uploadService;

    @PreAuthorize("hasAuthority('VIEW_PRODUCT')")
    @GetMapping(value = "/products")
    public List<ProductDto> getAll() {
        return productService.getAll();
    }

    @PreAuthorize("hasAuthority('VIEW_PRODUCT')")
    @GetMapping(value = "/products1")
    public List<ProductDto> getAll1() {
        return productService.getAll1();
    }

    @GetMapping(value = "/statistical")
    public List<Object[]> statistical(@RequestParam Date start, @RequestParam Date to) {
        return productService.statistical(start,to);
    }
    @GetMapping(value = "/statisticals")
    public List<Object[]> statisticalPagination(@RequestParam Date start, @RequestParam Date to,@RequestParam int pageNo,@RequestParam int pageSize) {
        return productService.statisticalPagination(start,to,pageNo,pageSize);
    }


    @PreAuthorize("hasAuthority('VIEW_PRODUCT')")
    @GetMapping(value = "/day")
    public List<ProductDto> filterByDay() {
        return productService.getAllByDay();
    }

    @PreAuthorize("hasAuthority('VIEW_PRODUCT')")
    @GetMapping(value = "/month")
    public List<ProductDto> filterByMonth() {
        return productService.getAllByMonth();
    }

    @PreAuthorize("hasAuthority('VIEW_PRODUCT')")
    @GetMapping(value = "/products/name")
    public List<ProductDto> sortByName() {
        return productService.sortByName();
    }

    @PreAuthorize("hasAuthority('VIEW_PRODUCT')")
    @GetMapping(value = "/products/price")
    public List<ProductDto> sortByPrice() {
        return productService.sortByPrice();
    }

    @PreAuthorize("hasAuthority('VIEW_PRODUCT')")
    @GetMapping(value = "/products/number")
    public List<ProductDto> sortByNumber() {
        return productService.sortByNumber();
    }

    @PreAuthorize("hasAuthority('CREATE_PRODUCT')")
    @PostMapping(value = "/products")
    public ResponseEntity<?> create(@RequestBody InputProductDto productDto) {
        return productService.create(productDto);

    }

    @PreAuthorize("hasAuthority('VIEW_PRODUCT')")
    @GetMapping(value = "/products/{id}")
    public ProductDto getById(@PathVariable int id) {

        return productService.findById(id);
    }

//    @PutMapping(value = "/products/{id}")
//    public ResponseEntity<ProductDto> updateProduct(@PathVariable int id, @RequestBody ProductDto productDto) {
//        ModelMapper modelMapper = new ModelMapper();
//        modelMapper.getConfiguration()
//                .setMatchingStrategy(MatchingStrategies.STRICT);
//
//        ProductEntity productRequest = modelMapper.map(productDto, ProductEntity.class);
//
//        // convert DTO to Entity
//        ProductEntity product = productService.update(id, productRequest);
//        // entity to DTO
//        ProductDto productResponse = modelMapper.map(product, ProductDto.class);
//        return ResponseEntity.ok().body(productResponse);
//
//    }

    @GetMapping(value = "/productSearch")
    public List<ProductDto> search(@RequestParam String keyword,@RequestParam String filter,@RequestParam int pageNo,@RequestParam int pageSize) {
       if( keyword =="" && filter=="") {
           return productService.findPaginated(pageNo, pageSize);
       }
       else if(keyword !="" && filter==""){
           return productService.searchByNameAndCode(keyword,pageNo,pageSize);
       }
       else if(keyword =="" && filter !=""){
           return productService.searchByCatePagination(filter,pageNo,pageSize);
       }
       else if (keyword !="" && filter!=""){
           return productService.searchByNameAndCodeByCategoryPagination(filter,keyword,pageNo,pageSize);
       }
       else
           return  null;
    }
    @GetMapping(value = "/productSearchByKeys")
    public List<ProductDto> searchAll(@RequestParam String keyword) {
        if( keyword == "" ){
            return productService.getAll();
        }
        else {
            return productService.searchByKey(keyword);
        }
    }
@GetMapping(value = "/productSearchByKey")

public List<ProductDto> searchAll(@RequestParam String keyword,@RequestParam String filter) {
    if( keyword == "" && filter==""){
        return productService.getAll();
    }
    else if (keyword !="" && filter=="") {
        return productService.searchByKey(keyword);
    }
    else if(keyword == "" && filter != ""){
        return productService.searchByCate(filter);
    }
    else if(keyword != "" && filter != ""){
        return productService.searchByNameAndCodeByCategory(filter,keyword);
    }
    else return null;

}

//    @GetMapping(value = "/productss")
//    public List<ProductDto> searchByName(@RequestParam String keyword) {
//
//        return productService.searchAllName(keyword);
//    }

    @GetMapping(value = "/product_searchByCategory/{keyword}")
    public List<ProductDto> filterByCategory(@PathVariable int keyword)
    {
        return productService.searchByCategory(keyword);
    }
    @GetMapping(value = "/productsearchByCategory")
    public List<ProductDto> filterByCategory(@RequestParam String keyword)
    {
        return productService.searchByCate(keyword);
    }

    @GetMapping(value = "/product_searchByCategories")
    public List<ProductDto> searchCatePagination(@RequestParam String keyword,@RequestParam int pageNo,@RequestParam int pageSize)
    {

        return productService.searchByCatePagination(keyword,pageNo,pageSize);
    }
    @GetMapping(value = "/productsearchByCategories")
    public List<ProductDto> filterByCategory(@RequestParam int keyword,@RequestParam int pageNo,@RequestParam int pageSize)
    {

        return productService.searchByCategories(keyword,pageNo,pageSize);
    }

    @GetMapping(value = "/product")
    public List<ProductDto> findPaginated(@RequestParam int pageNo,@RequestParam int pageSize) {
        return productService.findPaginated(pageNo, pageSize);

    }

    @GetMapping(value = "/productByCategory")
    public List<ProductDto> searchByNameAndCodeByCategoryPagination(@RequestParam String filter, @RequestParam String keyword, @RequestParam int pageNo,@RequestParam int pageSize) {
        return productService.searchByNameAndCodeByCategoryPagination(filter,keyword,pageNo,pageSize);

    }
    @GetMapping(value = "/productByCategorys")
    public List<ProductDto> searchByNameAndCodeByCategory(@RequestParam String filter,@RequestParam String keyword) {
        return productService.searchByNameAndCodeByCategory(filter,keyword);

    }

    @DeleteMapping(value = "/products/{id}")
    public void deleteProductById(@PathVariable int id) {
        productService.deleteByID(id);
    }

    @PutMapping(value = "/products/{id}")
    public ResponseEntity<?> updateProduct(@PathVariable int id, @RequestBody UpdateDto updateDto) {

      return  productService.updateProduct(id, updateDto);

//        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping ("/find-all")
    public List<ProductDto> findAll(@RequestBody OrderPageable orderPageable){

            Sort sort = Sort.by("createdDate").descending();
            Pageable pageable = PageRequest.of(orderPageable.getPage()-1,orderPageable.getLimit(),sort);
            return  productService.findAll(pageable);
        }

        @PostMapping(value = "/image")
    public void uploadFile(@RequestParam("file") MultipartFile file) throws IOException {
            uploadService.uploadFile(file);

        }
}
