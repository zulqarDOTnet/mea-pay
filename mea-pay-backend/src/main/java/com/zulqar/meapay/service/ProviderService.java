package com.zulqar.meapay.service;

import com.zulqar.meapay.configuration.JwtRequestFilter;
import com.zulqar.meapay.dao.ProviderDao;
import com.zulqar.meapay.dao.UserDao;

import com.zulqar.meapay.entity.Provider;
import com.zulqar.meapay.entity.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProviderService {

    @Autowired
    private ProviderDao providerDao;

    @Autowired
    private UserDao userDao;

    public Provider addNewProvider(Provider provider) {
        return providerDao.save(provider);
    }

    public List<Provider> getAllProviders(int pageNumber, String searchKey) {
        Pageable pageable = PageRequest.of(pageNumber,12);

        if(searchKey.equals("")) {
            return (List<Provider>) providerDao.findAll(pageable);
        } else {
            return (List<Provider>) providerDao.findByProviderNameContainingIgnoreCaseOrProviderDescriptionContainingIgnoreCase(
                    searchKey, searchKey, pageable
            );
        }

    }

    public Provider getProviderDetailsById(Integer providerId) {
        return providerDao.findById(providerId).get();
    }

    public void deleteProviderDetails(Integer providerId) {
        providerDao.deleteById(providerId);
    }
}
