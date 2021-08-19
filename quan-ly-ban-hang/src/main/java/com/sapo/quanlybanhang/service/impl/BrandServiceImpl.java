package com.sapo.quanlybanhang.service.impl;

import com.sapo.quanlybanhang.converter.Converter;
import com.sapo.quanlybanhang.dto.BrandDto;
import com.sapo.quanlybanhang.entity.BrandEntity;
import com.sapo.quanlybanhang.entity.Message;
import com.sapo.quanlybanhang.entity.SupplierEntity;
import com.sapo.quanlybanhang.repository.BrandRepository;
import com.sapo.quanlybanhang.service.BrandService;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BrandServiceImpl implements BrandService {
    @Autowired
    private BrandRepository brandRepository;

    @Override
    public List<BrandDto> getAll() {
        List<BrandEntity> brandEntities = brandRepository.findAll();
        List<BrandDto> colorDtos = new ArrayList<>();
        Converter converter = new Converter();
        for (BrandEntity item : brandEntities) {
            colorDtos.add(converter.ConverterToDtoBrand(item));
        }
        return colorDtos;
    }

    @Override
    public ResponseEntity<?> create(BrandDto brandDto) {
        ModelMapper modelMapper = new ModelMapper();
        modelMapper.getConfiguration()
                .setMatchingStrategy(MatchingStrategies.STRICT);
        BrandEntity brandEntity = modelMapper.map(brandDto, BrandEntity.class);
        if(brandDto.getName()==""){
            return ResponseEntity.badRequest().body(new Message("error : name not null"));
        }
        brandRepository.save(brandEntity);
        Converter converter = new Converter();
        return ResponseEntity.ok(converter.ConverterToDtoBrand(brandEntity));
    }
}
