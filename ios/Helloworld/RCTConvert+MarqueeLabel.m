//
//  RCTConvert+MarqueeLabel.m
//  AFWealth
//
//  Created by fragno on 16/4/14.
//  Copyright © 2016年 Alipay. All rights reserved.
//

#import "RCTConvert+MarqueeLabel.h"

@implementation RCTConvert (MarqueeLabel)

RCT_ENUM_CONVERTER(MarqueeType, (@{
    @"left-right":@(MLLeftRight),
    @"right-left":@(MLRightLeft),
    @"continues":@(MLContinuous),
    @"continuous-reverse":@(MLContinuousReverse),
}), MLLeftRight, integerValue)

@end
