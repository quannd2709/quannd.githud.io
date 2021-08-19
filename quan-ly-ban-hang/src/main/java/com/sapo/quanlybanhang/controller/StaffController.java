package com.sapo.quanlybanhang.controller;

import com.sapo.quanlybanhang.dto.StaffDto;
import com.sapo.quanlybanhang.service.StaffService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping("/admin")
public class StaffController {

    private final StaffService staffService;
    @Autowired
    PasswordEncoder encoder;

    public StaffController(StaffService staffService) {
        this.staffService = staffService;
    }

    //Lấy danh sách staffs
//    @GetMapping("/staffs")
//    public ResponseEntity getAllStaffs(){
//     List<StaffDto> list = staffService.findAll();
//     ResponseEntity responseEntity = new ResponseEntity<>(list , HttpStatus.OK);
//        return responseEntity;
//    }

    //Phân trang danh sách staffs
    @PreAuthorize("hasAuthority('VIEW_STAFF')")
    @GetMapping("/staffs")
    Page<StaffDto> getStaff(
            @RequestParam(name = "page", defaultValue = "0") Integer page,
            @RequestParam(name = "limit", defaultValue = "7") Integer limit,
            @RequestParam(name = "sortBy", defaultValue = "id") String sortBy
    ) {
        PageRequest pageResult = PageRequest.of(page, limit, Sort.by(sortBy).descending());
        Page<StaffDto> staffDtoPage = staffService.getAllStaff(pageResult);
        return staffDtoPage;
    }

    //Lấy 1 staff theo id
    @PreAuthorize("hasAuthority('VIEW_STAFF')")
    @GetMapping("/staffs/{id}")
    public ResponseEntity getStaffById(@PathVariable("id") int id) {
        StaffDto staffDto = staffService.findStaffById(id);
        return new ResponseEntity(staffDto, HttpStatus.OK);
    }

    //Thêm mới 1 Staff
//    @PostMapping("/staffs")
//    public ResponseEntity createStaff(@Valid @RequestBody StaffDto staffDto){
//        StaffDto dto = staffService.createStaff(staffDto);
//        return new ResponseEntity(dto, HttpStatus.OK);
//    }

    @PreAuthorize("hasAuthority('CREATE_STAFF')")
    @PostMapping("/staffs")
    public ResponseEntity createStaff(@Valid @RequestBody StaffDto staffDto) {
        if (staffService.existsByPhone(staffDto.getPhone())) {
            return ResponseEntity
                    .badRequest()
                    .body("Error: Số điện thoại đã được sử dụng");
        }
        staffDto.setPassWord(encoder.encode(staffDto.getPassWord()));
        StaffDto dto = staffService.createStaff(staffDto);
        return new ResponseEntity(dto, HttpStatus.OK);

    }

    //Cập nhật 1 Staff
    @PreAuthorize("hasAuthority('UPDATE_STAFF')")
    @PutMapping("/staffs/{id}")
    public ResponseEntity updateStaff(@PathVariable("id") int id, @Valid @RequestBody StaffDto staffDto) {
        StaffDto dto = staffService.updateStaff(id, staffDto);
        return new ResponseEntity(dto, HttpStatus.OK);
    }


    //Tìm kiếm staff theo tên
    @PreAuthorize("hasAuthority('SEARCH_STAFF')")
    @GetMapping("/staffs/search")
    public Page<StaffDto>  getAllStaffsByName(
            @RequestParam(name = "name",required = true) String name,
            @RequestParam(name = "page", defaultValue = "0") Integer page,
            @RequestParam(name = "limit", defaultValue = "5") Integer limit,
            @RequestParam(name = "sortBy", defaultValue = "id") String sortBy
    ){
        PageRequest pageResult = PageRequest.of(page, limit, Sort.by(sortBy).descending());
        Page<StaffDto> staffDtoPage = staffService.getAllStaffByName(name,pageResult);
        return staffDtoPage;

    }

    //Tìm kiếm staff theo tên
//    @GetMapping("/staffs/search")
//    public ResponseEntity getAllStaffsByName(
//            @RequestParam(name = "name",required = true) String name,
//            @RequestParam(name = "page", defaultValue = "0") Integer page,
//            @RequestParam(name = "limit", defaultValue = "5") Integer limit,
//            @RequestParam(name = "sortBy", defaultValue = "id") String sortBy
//    ){
//        PageRequest pageResult = PageRequest.of(page, limit, Sort.by(sortBy).descending());
//     Page<StaffDto> list = staffService.getAllStaffByName(name,pageResult);
//     ResponseEntity responseEntity = new ResponseEntity<>(list , HttpStatus.OK);
//        return responseEntity;
//    }

    //Thông báo lỗi trả về cho validate
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
