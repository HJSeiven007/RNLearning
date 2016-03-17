//
//  FileManager.m
//  RNLearning
//
//  Created by HJ on 16/3/14.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import "FileManager.h"

#import <RCTConvert.h>
#import <RCTBridge.h>
#import <RCTEventDispatcher.h>

NSString * const FileManagerReadFileOK = @"readFileOK";
NSString * const FileDoNotExist = @"fileDoNotExist";
NSString * const FileManagerError = @"fileManagerError";

@implementation FileManager

@synthesize bridge = _bridge;

#pragma mark - <RCTBridgeModule>

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(contentOfFile:(NSString *) path successCallback:(RCTResponseSenderBlock)responseSender)
{
  NSFileManager * manager = [NSFileManager defaultManager];
  if (![manager fileExistsAtPath:path])
  {
    responseSender(@[@"File do not exist!"]);
    return;
  }
  NSError * error;
  NSString * content = [NSString stringWithContentsOfFile:path encoding:NSUTF8StringEncoding error:&error];
  NSData * jsonData = [content dataUsingEncoding:NSUTF8StringEncoding];
  NSDictionary *dic = [NSJSONSerialization JSONObjectWithData:jsonData options:NSJSONReadingMutableContainers error:&error];

  if (!error)
  {
    responseSender(@[dic]);
  }
  else
  {
    responseSender(@[error.localizedDescription]);
  }
}

RCT_EXPORT_METHOD(contentOfFileURL:(NSString *) url successCallback:(RCTResponseSenderBlock)responseSender)
{
  NSError * error;
  NSString * content = [NSString stringWithContentsOfURL:[NSURL URLWithString:url] encoding:NSUTF8StringEncoding error:&error];
  NSData * jsonData = [content dataUsingEncoding:NSUTF8StringEncoding];
  NSDictionary *dic = [NSJSONSerialization JSONObjectWithData:jsonData options:NSJSONReadingMutableContainers error:&error];
  
  if (!error)
  {
    responseSender(@[dic]);
  }
  else
  {
    responseSender(@[@"error",error.localizedDescription]);
  }
}



@end
