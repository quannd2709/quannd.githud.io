package com.sapo.quanlybanhang.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

/**
 * send data to client when validated
 */
@AllArgsConstructor
@Data
public class OrderResponse {
    String message;
}
