package com.sapo.quanlybanhang.service;

import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface UploadService {
  public void uploadFile(MultipartFile file) throws IOException;
}
