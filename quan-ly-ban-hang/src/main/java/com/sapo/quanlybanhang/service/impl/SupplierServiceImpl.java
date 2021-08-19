package com.sapo.quanlybanhang.service.impl;

import com.sapo.quanlybanhang.converter.Converter;
import com.sapo.quanlybanhang.dto.SupplierDto;
import com.sapo.quanlybanhang.entity.SupplierEntity;
import com.sapo.quanlybanhang.repository.SupplierRepository;
import com.sapo.quanlybanhang.service.SupplierService;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SupplierServiceImpl implements SupplierService {
    @Autowired
    private SupplierRepository supplierRepository;

    @Override
    public List<SupplierDto> getAll() {
        List<SupplierEntity> supplierEntities = supplierRepository.getAll();
        List<SupplierDto> supplierDtos = new ArrayList<>();
        Converter converter = new Converter();
        for (SupplierEntity item : supplierEntities) {
            supplierDtos.add(converter.ConverterToDtoSupplier(item));
        }
        return supplierDtos;
    }

    @Override
    public SupplierDto findById(int id) {
        SupplierEntity supplierEntity = supplierRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Not found."));
        SupplierDto supplierDto = new SupplierDto();
        supplierDto.setId(supplierEntity.getId());
        supplierDto.setCode(supplierEntity.getCode());
        supplierDto.setName(supplierEntity.getName());
        supplierDto.setEmail(supplierEntity.getEmail());
        supplierDto.setAddress(supplierEntity.getAddress());
        supplierDto.setPhone(supplierEntity.getPhone());
        supplierDto.setCreatedDate((supplierEntity.getCreatedDate()));
        supplierDto.setModifiedDate(supplierEntity.getModifiedDate());
        supplierDto.setCreatedBy(supplierEntity.getCreatedBy());
        supplierDto.setModifiedBy(supplierEntity.getModifiedBy());
        return supplierDto;
    }
    @Override
    public List<SupplierDto> findAll(String keyword) {
        if (keyword != null) {
            List<SupplierEntity> supplierEntities = supplierRepository.findAll(keyword);
            List<SupplierDto> supplierDtos = new ArrayList<>();
            Converter converter = new Converter();
            for (SupplierEntity item : supplierEntities) {
                supplierDtos.add(converter.ConverterToDtoSupplier(item));
            }
            return supplierDtos;
        }
        return null;
    }

    @Override
    public SupplierDto create(SupplierDto supplierDto) {
        ModelMapper modelMapper = new ModelMapper();
        modelMapper.getConfiguration()
                .setMatchingStrategy(MatchingStrategies.STRICT);
        SupplierEntity supplierEntity = modelMapper.map(supplierDto, SupplierEntity.class);
        supplierRepository.save(supplierEntity);
        Converter converter = new Converter();
        return converter.ConverterToDtoSupplier(supplierEntity);
    }

    @Override
    public SupplierDto deleteByID(int id) {

        SupplierEntity supplierEntity = supplierRepository.findByIdAndStateIsNull(id);
        if (supplierEntity != null) {
            supplierEntity.setState("Deleted");
            supplierRepository.save(supplierEntity);
        }
        return null;
    }

    @Override
    public SupplierDto update(int id, SupplierDto supplierDto) {
        SupplierEntity supplierEntity = supplierRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Not found."));
        supplierEntity.setCode(supplierDto.getCode());
        supplierEntity.setName(supplierDto.getName());
        supplierEntity.setEmail(supplierDto.getEmail());
        supplierEntity.setPhone(supplierDto.getPhone());
        supplierEntity.setAddress(supplierDto.getAddress());
        supplierEntity.setCreatedDate((supplierDto.getCreatedDate()));
        supplierEntity.setModifiedDate(supplierDto.getModifiedDate());
        supplierEntity.setCreatedBy(supplierDto.getCreatedBy());
        supplierEntity.setModifiedBy(supplierDto.getModifiedBy());
        supplierRepository.save(supplierEntity);
        Converter converter = new Converter();
        return converter.ConverterToDtoSupplier(supplierEntity);
    }

    @Override
    public List getAllByDay() {
        List<SupplierEntity> supplierEntities = supplierRepository.getALLByDay();
        List<SupplierDto> supplierDtos = new ArrayList<>();
        Converter converter = new Converter();
        for (SupplierEntity item : supplierEntities) {
            supplierDtos.add(converter.ConverterToDtoSupplier(item));
        }
        return supplierDtos;
    }

    @Override
    public List getByModified(String keyword) {
        List<SupplierEntity> supplierEntities = supplierRepository.getALLByModified(keyword);
        List<SupplierDto> supplierDtos = new ArrayList<>();
        Converter converter = new Converter();
        for (SupplierEntity item : supplierEntities) {
            supplierDtos.add(converter.ConverterToDtoSupplier(item));
        }
        return supplierDtos;
    }

    @Override
    public List<SupplierDto> findPaginated(int pageNo, int pageSize) {
        Pageable pageable = PageRequest.of(pageNo - 1, pageSize);
        List<SupplierEntity> supplierEntities = supplierRepository.getAllPagination(pageable);
        List<SupplierDto> supplierDtos = new ArrayList<>();
        Converter converter = new Converter();
        for (SupplierEntity item : supplierEntities) {
            supplierDtos.add(converter.ConverterToDtoSupplier(item));
        }
        return supplierDtos;
    }

    @Override
    public List<SupplierDto> findAllPagination(String keyword, int pageNo, int pageSize) {
        if (keyword != null) {
            Pageable pageable = PageRequest.of(pageNo - 1, pageSize);
            List<SupplierEntity> supplierEntities = supplierRepository.findAllPagination(keyword, pageable);
            List<SupplierDto> supplierDtos = new ArrayList<>();
            Converter converter = new Converter();
            for (SupplierEntity item : supplierEntities) {
                supplierDtos.add(converter.ConverterToDtoSupplier(item));
            }
            return supplierDtos;
        }
        return null;
    }
}
