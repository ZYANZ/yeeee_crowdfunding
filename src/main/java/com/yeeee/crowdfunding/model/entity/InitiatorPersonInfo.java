package com.yeeee.crowdfunding.model.entity;

import lombok.Data;

@Data
public class InitiatorPersonInfo {

    private Integer id;

    private Integer projectId;

    private String name;

    private String idNumber;

    private String phone;

    private String address;

    private String idPicFace;

    private String idPicInverse;
}