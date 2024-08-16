package com.zulqar.meapay.entity;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Provider {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer providerId;
    @Column(length = 50)
    private String providerName;
    @Column(length = 2000)
    private String providerDescription;
    private String providerAPIURL;
    private String providerAPILogin;
    private String providerAPIPass;
    private String providerAPIMethod;
    private String providerAPIFormat;
    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(name = "provider_images",
            joinColumns = {
                    @JoinColumn(name = "provider_id")
            },
            inverseJoinColumns = {
                    @JoinColumn(name = "image_id")
            }
    )
    private Set<ImageModel> providerImages;

    public Set<ImageModel> getProviderImages() {
        return providerImages;
    }

    public void setProviderImages(Set<ImageModel> providerImages) {
        this.providerImages = providerImages;
    }

    public Integer getProviderId() {
        return providerId;
    }

    public void setProviderId(Integer providerId) {
        this.providerId = providerId;
    }

    public String getProviderName() {
        return providerName;
    }

    public void setProviderName(String providerName) {
        this.providerName = providerName;
    }

    public String getProviderDescription() {
        return providerDescription;
    }

    public void setProviderDescription(String providerDescription) {
        this.providerDescription = providerDescription;
    }

    public String getProviderAPIURL() {
        return providerAPIURL;
    }

    public void setProviderAPIURL(String providerAPIURL) {
        this.providerAPIURL = providerAPIURL;
    }

    public String getProviderAPILogin() {
        return providerAPILogin;
    }

    public void setProviderAPILogin(String providerAPILogin) {
        this.providerAPILogin = providerAPILogin;
    }

    public String getProviderAPIPass() {
        return providerAPIPass;
    }

    public void setProviderAPIPass(String providerAPIPass) {
        this.providerAPIPass = providerAPIPass;
    }

    public String getProviderAPIMethod() {
        return providerAPIMethod;
    }

    public void setProviderAPIMethod(String providerAPIMethod) {
        this.providerAPIMethod = providerAPIMethod;
    }

    public String getProviderAPIFormat() {
        return providerAPIFormat;
    }

    public void setProviderAPIFormat(String providerAPIFormat) {
        this.providerAPIFormat = providerAPIFormat;
    }
}