package com.sapo.quanlybanhang.service.impl;

import com.sapo.quanlybanhang.service.UploadService;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;

@Service
public class UploadFileImpl implements UploadService {
    @Override
    public void uploadFile(MultipartFile file) throws IOException {
        file.transferTo(new File("./"+file.getOriginalFilename()));
    }
}
