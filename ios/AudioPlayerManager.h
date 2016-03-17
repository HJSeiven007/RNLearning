//
//  AudioPlayerManager.h
//  RNLearning
//
//  Created by HJ on 16/3/10.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>

#import <RCTBridgeModule.h>
#import <RCTLog.h>
#import <AVFoundation/AVFoundation.h>

@interface AudioPlayerManager : NSObject <RCTBridgeModule, AVAudioPlayerDelegate>

@end
