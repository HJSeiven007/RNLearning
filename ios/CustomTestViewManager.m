//
//  CustomTestViewManager.m
//  RNLearning
//
//  Created by HJ on 16/3/10.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import "CustomTestViewManager.h"

#import "CustomTestView.h"

@implementation CustomTestViewManager

RCT_EXPORT_MODULE();

RCT_EXPORT_VIEW_PROPERTY(isRed, BOOL);

- (UIView *) view
{
    CustomTestView * view = [[CustomTestView alloc] initWithFrame:CGRectMake(0, 0, 10, 10)];
    return view;
}

@end
