//
//  AudioPlayerManager.m
//  RNLearning
//
//  Created by HJ on 16/3/10.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import "AudioPlayerManager.h"

#import <RCTConvert.h>
#import <RCTBridge.h>
#import <RCTEventDispatcher.h>

NSString * const AudioPlayerEventProgress = @"playerProgress";
NSString * const AudioPlayerEventFinished = @"playerFinished";

@interface AudioPlayerManager ()

@property (nonatomic, strong) AVAudioPlayer * audioPlayer;

@property (nonatomic) NSTimeInterval currentTime;
@property (nonatomic) id progressUpdateTimer;
@property (nonatomic) int progressUpdateInterval;
@property (nonatomic, strong) NSDate * prevProgressUpdateTime;
@property (nonatomic, strong) NSURL * audioFileURL;

@end

@implementation AudioPlayerManager

@synthesize bridge = _bridge;

- (void) sendProgressUpdate
{
  if (_audioPlayer && _audioPlayer.playing)
  {
    _currentTime = _audioPlayer.currentTime;
  }
  if (!_prevProgressUpdateTime || (([_prevProgressUpdateTime timeIntervalSinceNow] * -1000.0) >= _progressUpdateInterval))
  {
    [_bridge.eventDispatcher sendDeviceEventWithName:AudioPlayerEventProgress body:@{@"currentTime" : [NSNumber numberWithFloat:_currentTime]}];
    _prevProgressUpdateTime = [NSDate date];
  }
}

- (void) stopProgressTimer
{
  [_progressUpdateTimer invalidate];
}

- (void) startProgressTimer
{
  _progressUpdateInterval = 250;
  _progressUpdateTimer = nil;
  
  [self stopProgressTimer];
  _progressUpdateTimer = [CADisplayLink displayLinkWithTarget:self selector:@selector(sendProgressUpdate)];
  [_progressUpdateTimer addToRunLoop:[NSRunLoop mainRunLoop] forMode:NSDefaultRunLoopMode];
}

#pragma mark - <RCTBridgeModule>

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(play:(NSString *) path)
{
  NSError * error;
  NSString * resourcePath = [[NSBundle mainBundle] resourcePath];
  NSString * audioFilePath = [resourcePath stringByAppendingPathComponent:path];
  
  _audioFileURL = [NSURL fileURLWithPath:audioFilePath];
  _audioPlayer = [[AVAudioPlayer alloc] initWithContentsOfURL:_audioFileURL error:&error];
  
  if (error)
  {
    [self stopProgressTimer];
  }
  else
  {
    [self startProgressTimer];
    [_audioPlayer play];
  }
}

RCT_EXPORT_METHOD(playWithURL:(NSURL *) url)
{
  NSError * error;
  NSData * data = [NSData dataWithContentsOfURL:url];
  
  _audioPlayer = [[AVAudioPlayer alloc] initWithData:data error:&error];
  if (error)
  {
    [self stopProgressTimer];
  }
  else
  {
    [self startProgressTimer];
    [_audioPlayer play];
  }
}

RCT_EXPORT_METHOD(pause)
{
  if (_audioPlayer.playing)
  {
    [_audioPlayer pause];
  }
}

RCT_EXPORT_METHOD(stop)
{
  if (_audioPlayer.playing)
  {
    [_audioPlayer stop];
  }
}


#pragma mark - <AVAudioPlayerDelegate>
- (void)audioPlayerDidFinishPlaying:(AVAudioPlayer *)player successfully:(BOOL)flag
{
  [_bridge.eventDispatcher sendDeviceEventWithName:AudioPlayerEventFinished body:@{@"finished":@TRUE}];
}


@end
