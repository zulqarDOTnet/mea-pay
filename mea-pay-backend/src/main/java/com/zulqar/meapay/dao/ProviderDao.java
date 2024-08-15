package com.zulqar.meapay.dao;

import com.zulqar.meapay.entity.Provider;

import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProviderDao extends CrudRepository<Provider, Integer> {
    public List<Provider> findAll(Pageable pageable);

    public List<Provider> findByProviderNameContainingIgnoreCaseOrProviderDescriptionContainingIgnoreCase(
            String key1, String key2, Pageable pageable
    );
}
