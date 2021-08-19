package com.sapo.quanlybanhang;

import com.sapo.quanlybanhang.service.impl.FileStorageProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties({
		FileStorageProperties.class
})
public class QuanLyBanHangApplication {

    public static void main(String[] args) {
        SpringApplication.run(QuanLyBanHangApplication.class, args);
    }

}
