//
//  CustomTestView.m
//  RNLearning
//
//  Created by HJ on 16/3/10.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import "CustomTestView.h"

@interface CustomTestView ()

@property (nonatomic, strong) UIColor * squareColor;

@end

@implementation CustomTestView

- (void) setIsRed:(BOOL) isRed
{
  _squareColor = (isRed)?[UIColor redColor]:[UIColor greenColor];
  [self setNeedsDisplay];
}

- (void) drawRect:(CGRect)rect
{
  [_squareColor setFill];
  CGContextFillRect(UIGraphicsGetCurrentContext(), rect);
}


@end
