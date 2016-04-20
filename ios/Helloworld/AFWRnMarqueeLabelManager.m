//
//  AFWRnMarqueeLabelManager.m
//  AFWealth
//
//  Created by fragno on 16/4/14.
//  Copyright © 2016年 Alipay. All rights reserved.
//

#import "AFWRnMarqueeLabelManager.h"
#import "RCTViewManager.h"
#import "RCTBridgeModule.h"
#import "UIView+React.h"
#import "RCTConvert+MarqueeLabel.h"
#import "AFWMarqueeLabel.h"

@implementation AFWRnMarqueeLabelManager

RCT_EXPORT_MODULE(MarqueeLabel)

- (UIView *)view
{
    return [[AFWMarqueeLabel alloc] init];
}

RCT_EXPORT_VIEW_PROPERTY(type, MarqueeType);

@end
