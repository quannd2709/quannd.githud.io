package com.sapo.quanlybanhang.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

import java.net.BindException;
import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class ApiRequestException {
    @ExceptionHandler(BindException.class)
    public ResponseEntity<Object> handleValidatorException(org.springframework.validation.BindException ex, WebRequest request) {
        Map<String, String> erorrs = new HashMap<>();
        ex.getBindingResult().getAllErrors().forEach((error) -> {
            String filed = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            erorrs.put(filed, errorMessage);
        });
        return new ResponseEntity(erorrs, HttpStatus.CONFLICT);
    }
}
