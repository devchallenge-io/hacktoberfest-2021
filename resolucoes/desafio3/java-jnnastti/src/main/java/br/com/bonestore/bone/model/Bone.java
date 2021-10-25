package br.com.bonestore.bone.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Bone {
    @Id
    private Long skuId;
    private String name;
    private String seller;
    private String thumbnailHd;
    private Double price;
    private Boolean inStock;

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }


    public Long getSkuId() {
        return skuId;
    }

    public void setSkuId(Long skuId) {
        this.skuId = skuId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSeller() {
        return seller;
    }

    public void setSeller(String seller) {
        this.seller = seller;
    }

    public String getThumbnailHd() {
        return thumbnailHd;
    }

    public void setThumbnailHd(String thumbnailHd) {
        this.thumbnailHd = thumbnailHd;
    }

    public Boolean getInStock() {
        return inStock;
    }

    public void setInStock(Boolean inStock) {
        this.inStock = inStock;
    }
}
