//
//  ViewController.m
//  Helloworld
//
//  Created by fragno on 16/4/13.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import "ViewController.h"
#import "RCTRootView.h"
#import "RCTAssert.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
    self.view.backgroundColor = [UIColor redColor];
  
  NSURL *jsCodeLocation;
  
  jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.ios.bundle?platform=ios&dev=true"];
  
  RCTSetFatalHandler(^(NSError *error){
    NSLog(@"%@", [error localizedDescription]);
  });
  
  RCTBridge *bridge = [[RCTBridge alloc] initWithBundleURL:jsCodeLocation
                                            moduleProvider:nil
                                             launchOptions:nil];
  
  
//  RCTRootView *rootView1 = [[RCTRootView alloc] initWithBridge:bridge moduleName:@"NavigatorIOSExample1" initialProperties:nil];
//  RCTRootView *rootView2 = [[RCTRootView alloc] initWithBridge:bridge moduleName:@"NavigatorIOSExample2" initialProperties:nil];
//  
//  
//  [self.view addSubview:rootView1];
//  [self.view addSubview:rootView2];
//  rootView1.frame = CGRectMake(0, 0, self.view.frame.size.width, self.view.frame.size.height/2);
//  rootView2.frame = CGRectMake(0, self.view.frame.size.height/2, self.view.frame.size.width, self.view.frame.size.height/2);
  
  RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge moduleName:@"222" initialProperties:nil];
  [self.view addSubview:rootView];
  rootView.frame = CGRectMake(0, 0, self.view.frame.size.width, self.view.frame.size.height);
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
