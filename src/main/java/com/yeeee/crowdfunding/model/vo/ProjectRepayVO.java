package com.yeeee.crowdfunding.model.vo;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

/**
 * description......
 *
 * @author yeeee
 * @since 2022/4/30 20:17
 */
@Data
public class ProjectRepayVO {

    @ApiModelProperty("回报标题")
    private String payTitle;

    @ApiModelProperty("回报内容")
    private String payContent;

}
