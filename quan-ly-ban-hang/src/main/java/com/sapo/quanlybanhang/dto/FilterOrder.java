package com.sapo.quanlybanhang.dto;


import lombok.Data;

import java.time.LocalDate;

@Data
public class FilterOrder {
    private Integer enumTime;   // check with Enum OptionTime
    private LocalDate orderTime;
    private LocalDate startTime;
    private LocalDate endTime;
    private String CreateStaff;

}
