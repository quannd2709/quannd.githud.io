package com.sapo.quanlybanhang.controller;

import com.sapo.quanlybanhang.converter.CustomerConvert;
import com.sapo.quanlybanhang.converter.FeedBackConverter;
import com.sapo.quanlybanhang.converter.StaffConverter;
import com.sapo.quanlybanhang.dto.CustomerDto;
import com.sapo.quanlybanhang.dto.FeedBackDto;
import com.sapo.quanlybanhang.entity.CustomerEntity;
import com.sapo.quanlybanhang.entity.FeedBackEntity;
import com.sapo.quanlybanhang.repository.FeedBackRepository;
import com.sapo.quanlybanhang.service.CustomerService;
import com.sapo.quanlybanhang.service.FeedBackService;
import com.sapo.quanlybanhang.service.StaffService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@CrossOrigin()
@RestController
@RequestMapping("/")
public class FeedBackController {
    private final FeedBackService feedBackService;
    private final FeedBackRepository feedBackRepository;
    private final CustomerService customerService;
    private final StaffService staffService;
    Logger logger = LoggerFactory.getLogger(CustomerController.class);

    public FeedBackController(FeedBackService feedBackService, FeedBackRepository feedBackRepository, CustomerService customerService, StaffService staffService) {
        this.feedBackService = feedBackService;
        this.feedBackRepository = feedBackRepository;
        this.customerService = customerService;
        this.staffService = staffService;
    }


    @GetMapping("feedbacks/desc/{id}")
    ResponseEntity<?> getByCustomerIdDesc(
            @PathVariable("id") Integer id,
            @RequestParam(name = "pageNo", defaultValue = "0") String pageNo,
            @RequestParam(name = "limit", defaultValue = "5") String limit
    ) {
        try {
            PageRequest pageRequest = PageRequest.of(Integer.parseInt(pageNo), Integer.parseInt(limit));
            Page<FeedBackDto> dtoPage = feedBackService.findByCustomer(id,pageRequest);
            if (dtoPage.hasContent()) {
                return new ResponseEntity<>(dtoPage, new HttpHeaders(), HttpStatus.OK);
            }
        } catch (Exception e) {
            logger.error("Error: : " + e.getMessage());
            return ResponseEntity.badRequest().body("Page Empty");
        }
        return null;
    }
    @GetMapping("feedbacks/asc/{id}")
    ResponseEntity<?> getByCustomerIdAsc(
            @PathVariable("id") Integer id,
            @RequestParam(name = "pageNo", defaultValue = "0") String pageNo,
            @RequestParam(name = "limit", defaultValue = "5") String limit
    ) {
        try {
            PageRequest pageRequest = PageRequest.of(Integer.parseInt(pageNo), Integer.parseInt(limit), Sort.by("createdDate").ascending());
            Page<FeedBackDto> dtoPage = feedBackService.findByCustomer(id,pageRequest);
            if (dtoPage.hasContent()) {
                return new ResponseEntity<>(dtoPage, new HttpHeaders(), HttpStatus.OK);
            }
        } catch (Exception e) {
            logger.error("Error: : " + e.getMessage());
            return ResponseEntity.badRequest().body("Page Empty");
        }
        return null;
    }
//    @GetMapping("feedbacks/desc/{customerId}/{staffId}")
//    ResponseEntity<?> getByCustomerAndStaffDesc(
//            @PathVariable("customerId") Integer customerId,
//            @PathVariable("staffId") Integer staffId,
//            @RequestParam(name = "pageNo", defaultValue = "0") String pageNo,
//            @RequestParam(name = "limit", defaultValue = "5") String limit
//    ) {
//        try {
//            PageRequest pageRequest = PageRequest.of(Integer.parseInt(pageNo), Integer.parseInt(limit), Sort.by("createdDate").descending());
//            Page<FeedBackDto> dtoPage = feedBackService.findByCustomerAndStaff(customerId,staffId,pageRequest);
//            if (dtoPage.hasContent()) {
//                return new ResponseEntity<>(dtoPage, new HttpHeaders(), HttpStatus.OK);
//            }
//        } catch (Exception e) {
//            logger.error("Error: : " + e.getMessage());
//            return ResponseEntity.badRequest().body("Page Empty");
//        }
//        return null;
//    }
//    @GetMapping("feedbacks/asc/{customerId}/{staffId}")
//    ResponseEntity<?> getByCustomerAndStaffAsc(
//            @PathVariable("customerId") Integer customerId,
//            @PathVariable("staffId") Integer staffId,
//            @RequestParam(name = "pageNo", defaultValue = "0") String pageNo,
//            @RequestParam(name = "limit", defaultValue = "5") String limit
//    ) {
//        try {
//            PageRequest pageRequest = PageRequest.of(Integer.parseInt(pageNo), Integer.parseInt(limit), Sort.by("createdDate").ascending());
//            Page<FeedBackDto> dtoPage = feedBackService.findByCustomerAndStaff(customerId,staffId,pageRequest);
//            if (dtoPage.hasContent()) {
//                return new ResponseEntity<>(dtoPage, new HttpHeaders(), HttpStatus.OK);
//            }
//        } catch (Exception e) {
//            logger.error("Error: : " + e.getMessage());
//            return ResponseEntity.badRequest().body("Page Empty");
//        }
//        return null;
//    }
    @GetMapping("feedbacks")
    ResponseEntity<?> getByCustomerAndStaffAsc(
            @RequestParam("slove") String slove,
            @RequestParam(name = "pageNo", defaultValue = "0") String pageNo,
            @RequestParam(name = "limit", defaultValue = "5") String limit
    ) {
        try {
            PageRequest pageRequest = PageRequest.of(Integer.parseInt(pageNo), Integer.parseInt(limit), Sort.by("createdDate").descending());
            Page<FeedBackDto> dtoPage = feedBackService.findBySlove(slove,pageRequest);
            if (dtoPage.hasContent()) {
                return new ResponseEntity<>(dtoPage, new HttpHeaders(), HttpStatus.OK);
            }
        } catch (Exception e) {
            logger.error("Error: : " + e.getMessage());
            return ResponseEntity.badRequest().body("Page Empty");
        }
        return null;
    }
    @GetMapping("feedbacks/search")
    ResponseEntity<?> getByCustomerName(
            @RequestParam("customerName") String customerName,
            @RequestParam(value = "slove",required = false) String slove,
            @RequestParam(name = "pageNo", defaultValue = "0") String pageNo,
            @RequestParam(name = "limit", defaultValue = "5") String limit
    ) {
        try {
            PageRequest pageRequest = PageRequest.of(Integer.parseInt(pageNo), Integer.parseInt(limit));
            Page<FeedBackDto> dtoPage=null;
            if(slove!=null){
                dtoPage = feedBackService.findByCustomerNameAndSlove(customerName,slove,pageRequest);
            }else {
                dtoPage = feedBackService.findByCustomerName(customerName,pageRequest);
            }
            if (dtoPage.hasContent()) {
                return new ResponseEntity<>(dtoPage, new HttpHeaders(), HttpStatus.OK);
           }
        } catch (Exception e) {
            logger.error("Error: : " + e.getMessage());
            return ResponseEntity.badRequest().body("Page Empty");
        }
       return null;
    }
    @GetMapping("feedbacks/range")
    ResponseEntity<?> getByCustomerAndStaffAsc(
            @RequestParam("dayBegin") Date begin,
            @RequestParam("dayEnd") Date end,
            @RequestParam(name = "pageNo", defaultValue = "0") String pageNo,
            @RequestParam(name = "limit", defaultValue = "5") String limit
    ) {
        try {
            PageRequest pageRequest = PageRequest.of(Integer.parseInt(pageNo), Integer.parseInt(limit), Sort.by("createdDate").descending());
            Page<FeedBackDto> dtoPage = feedBackService.getByRangeDate(begin,end,pageRequest);
            if (dtoPage.hasContent()) {
                return new ResponseEntity<>(dtoPage, new HttpHeaders(), HttpStatus.OK);
            }
        } catch (Exception e) {
            logger.error("Error: : " + e.getMessage());
            return ResponseEntity.badRequest().body("Page Empty");
        }
        return null;
    }
    @PostMapping("feedbacks")
    ResponseEntity<?> save(@Valid
@RequestBody FeedBackDto feedBackDto
    ) {
        try {
            FeedBackDto response = null;
            if(feedBackDto!=null){
               response = feedBackService.save(feedBackDto);
            }
                return new ResponseEntity<>(response,HttpStatus.OK);
        } catch (Exception e) {
            logger.error("Error: : " + e.getMessage());
            return ResponseEntity.badRequest().body("Thêm mới thất bại");
        }

    }
    @PutMapping("feedback/{id}")
    ResponseEntity<?> update(@Valid @RequestBody FeedBackDto feedBackDto, @PathVariable("id") Integer id) {

        try {
            FeedBackEntity root = FeedBackConverter.toEntity(feedBackService.findById(id));
            if (root != null) {
                root.setId(feedBackDto.getId());
                root.setCreatedDate(feedBackDto.getCreatedDate());
                root.setCreatedBy(feedBackDto.getCreatedBy());
                root.setContent(feedBackDto.getContent());
                root.setSlove(feedBackDto.getSlove());
                root.setTitle(feedBackDto.getTitle());
                root.setCustomerEntity(CustomerConvert.toEntity(customerService.findById(feedBackDto.getCustomerId())));
                root.setModifiedBy(feedBackDto.getModifiedBy());
                root.setModifiedDate(feedBackDto.getModifiedDate());
                feedBackService.save(FeedBackConverter.toDto(root));
                return new ResponseEntity<>("Update thành công", HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Không có dữ liệu", HttpStatus.NO_CONTENT);
            }

        } catch (Exception e) {
            logger.error("Error: " + e);
            return new ResponseEntity<>("Lỗi:  " + e, HttpStatus.BAD_REQUEST);
        }
    }
    // @DeleteMapping("feedbacks/{id}")
    @GetMapping("feedbacks/page")
    ResponseEntity<?> allPage(
            @RequestParam(name = "pageNo", defaultValue = "0") String pageNo,
            @RequestParam(name = "limit", defaultValue = "5") String limit
    ) {
        try {
            PageRequest pageRequest = PageRequest.of(Integer.parseInt(pageNo), Integer.parseInt(limit), Sort.by("id").descending());
            Page<FeedBackDto> dtoPage = feedBackService.getPage(pageRequest);
            if (dtoPage.hasContent()) {
                return new ResponseEntity<>(dtoPage, new HttpHeaders(), HttpStatus.OK);
            }
        } catch (Exception e) {
            logger.error("Error: : " + e.getMessage());
            return ResponseEntity.badRequest().body("Page Empty");
        }
        return null;
    }
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public Map<String, String> handleValidationExceptions(
            MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getAllErrors().forEach((error) -> {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        });
        return errors;
    }
}
