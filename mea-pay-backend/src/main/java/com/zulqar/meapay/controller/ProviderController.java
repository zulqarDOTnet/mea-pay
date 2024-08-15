package com.zulqar.meapay.controller;

import com.zulqar.meapay.entity.ImageModel;
import com.zulqar.meapay.entity.Provider;
import com.zulqar.meapay.service.ProviderService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@RestController
public class ProviderController {

    @Autowired
    private ProviderService providerService;

    @PreAuthorize("hasRole('Admin')")
    @PostMapping(value = {"/addNewProvider"}, consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
    public Provider addNewProvider(@RequestPart("provider") Provider provider,
                                   @RequestPart("imageFile") MultipartFile[] file) {
        try {
            Set<ImageModel> images = uploadImage(file);
            provider.setProviderImages(images);
            return providerService.addNewProvider(provider);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }

    }

    public Set<ImageModel> uploadImage(MultipartFile[] multipartFiles) throws IOException {
        Set<ImageModel> imageModels = new HashSet<>();

        for (MultipartFile file: multipartFiles) {
            ImageModel imageModel = new ImageModel(
                    file.getOriginalFilename(),
                    file.getContentType(),
                    file.getBytes()
            );
            imageModels.add(imageModel);
        }

        return imageModels;
    }

    @GetMapping({"/getAllProviders"})
    public List<Provider> getAllProviders(@RequestParam(defaultValue = "0") int pageNumber,
                                        @RequestParam(defaultValue = "") String searchKey) {
        List<Provider> result = providerService.getAllProviders(pageNumber, searchKey);
        System.out.println("Result size is "+ result.size());
        return result;
    }

    @GetMapping({"/getProviderDetailsById/{providerId}"})
    public Provider getProviderDetailsById(@PathVariable("providerId") Integer providerId) {
        return providerService.getProviderDetailsById(providerId);
    }

    @PreAuthorize("hasRole('Admin')")
    @DeleteMapping({"/deleteProviderDetails/{providerId}"})
    public void deleteProviderDetails(@PathVariable("providerId") Integer providerId) {
        providerService.deleteProviderDetails(providerId);
    }
}
