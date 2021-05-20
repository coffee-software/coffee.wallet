/*
 CDVAppFeelReachability.m
 Copyright 2014 AppFeel. All rights reserved.
 http://www.appfeel.com
 
 Connectivity Monitor Cordova Plugin (com.connectivity.monitor)
 
 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to
 deal in the Software without restriction, including without limitation the
 rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:
 
 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.
 
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
 
#import "CDVAppFeelReachability.h"

@interface CDVAppFeelReachability()

@property (nonatomic) AppFeelReachability *hostReachability;
@property (nonatomic) AppFeelReachability *internetReachability;
@property (nonatomic) AppFeelReachability *localWifiReachability;

- (void)onReachabilityChanged:(NSNotification*)note;
- (void)stopAllObservers;

@end



@implementation CDVAppFeelReachability

@synthesize hostReachability;
@synthesize internetReachability;
@synthesize localWifiReachability;

#define EVENT_REACHABILITY_CHANGE       @"connectivity.EVENTS.onReachabilityChanged"
#define DEFAULT_HOST_NAME               @"www.google.com"
#define OPT_HOST_NAME                   @"hostName"
#define OPT_IPV4                        @"ipv4"
#define OPT_IPV6                        @"ipv6"
#define OPT_STOP_ALL_OBSERVERS          @"stopAllObservers"


#pragma mark Cordova JS bridge

- (CDVPlugin *)initWithWebView:(UIWebView *)theWebView {
    // Check for network state changes
    [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(onReachabilityChanged:) name:kReachabilityChangedNotification object:nil];
    return self;
}

- (void)observeRemoteHostName:(CDVInvokedUrlCommand *)command {
    CDVPluginResult *pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
    NSString *callbackId = command.callbackId;
    NSArray* args = command.arguments;
    NSUInteger argc = [args count];
    NSString *hostName = DEFAULT_HOST_NAME;
    
    if (argc >= 1) {
        NSDictionary* options = [command argumentAtIndex:0 withDefault:[NSNull null]];
        if ((NSNull *)options == [NSNull null]) {
            hostName = DEFAULT_HOST_NAME;
        } else {
            NSString* str = nil;
            
            str = [options objectForKey:OPT_HOST_NAME];
            if (str && [str length] > 0) {
                hostName = str;
            }
            
            str = [options objectForKey:OPT_STOP_ALL_OBSERVERS];
            if (str && [str boolValue]) {
                [self stopAllObservers];
            }
        }
    } else {
        hostName = DEFAULT_HOST_NAME;
    }
    
    // if we have an actual observer, stop it
    if (hostReachability) {
        [hostReachability stopNotifier];
        hostReachability = nil;
    }
    
    hostReachability = [AppFeelReachability reachabilityWithHostName:hostName];
    [hostReachability startNotifier];
    [self.commandDelegate sendPluginResult:pluginResult callbackId:callbackId];
}

- (void)observeRemoteIP:(CDVInvokedUrlCommand *)command {
    CDVPluginResult *pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
    NSString *callbackId = command.callbackId;
    NSArray* args = command.arguments;
    NSUInteger argc = [args count];
    struct sockaddr *sa;
    BOOL isParamsOk = false;
    
    if (argc >= 1) {
        NSDictionary* options = [command argumentAtIndex:0 withDefault:[NSNull null]];
        if ((NSNull *)options == [NSNull null]) {
            pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString:@"Bad argument options."];

        } else if ([options objectForKey:OPT_IPV4] && [options objectForKey:OPT_IPV6]) {
            pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString:@"Bad argument options."];
        
        } else {
            NSString* str = nil;
            
            str = [options objectForKey:OPT_IPV4];
            if (str && [str length] > 0) {
                struct sockaddr_in sa4;
                inet_pton(AF_INET, [str cStringUsingEncoding:NSUTF8StringEncoding], &(sa4.sin_addr));
                sa = (struct sockaddr *)&sa4;
                isParamsOk = true;
            }
            
            str = [options objectForKey:OPT_IPV6];
            if (str && [str length] > 0) {
                struct sockaddr_in6 sa6;
                inet_pton(AF_INET6, [str cStringUsingEncoding:NSUTF8StringEncoding], &(sa6.sin6_addr));
                sa = (struct sockaddr *)&sa6;
                isParamsOk = true;
            }
            
            str = [options objectForKey:OPT_STOP_ALL_OBSERVERS];
            if (str && [str boolValue]) {
                [self stopAllObservers];
            }
        }
    } else {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString:@"Bad argument options."];
    }
    
    if (isParamsOk) {
        // if we have an actual observer, stop it
        if (hostReachability) {
            [hostReachability stopNotifier];
            hostReachability = nil;
        }
        
        hostReachability = [AppFeelReachability reachabilityWithAddress:sa];
        [hostReachability startNotifier];
    }
    [self.commandDelegate sendPluginResult:pluginResult callbackId:callbackId];
}

- (void)observeLocalWifi:(CDVInvokedUrlCommand *)command {
    CDVPluginResult *pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
    NSString *callbackId = command.callbackId;
    NSArray* args = command.arguments;
    NSUInteger argc = [args count];
    
    if (argc >= 1) {
        NSDictionary* options = [command argumentAtIndex:0 withDefault:[NSNull null]];
        if ((NSNull *)options == [NSNull null]) {
            // Do nothing
        } else {
            NSString* str = nil;

            str = [options objectForKey:OPT_STOP_ALL_OBSERVERS];
            if (str && [str boolValue]) {
                [self stopAllObservers];
            }
        }
    } else {
        // Do nothing
    }
    
    if (localWifiReachability) {
        [localWifiReachability stopNotifier];
        localWifiReachability = nil;
    }
    
    localWifiReachability = [AppFeelReachability reachabilityForLocalWiFi];
    [localWifiReachability startNotifier];
    [self.commandDelegate sendPluginResult:pluginResult callbackId:callbackId];
}

- (void)observeInternetConnection:(CDVInvokedUrlCommand *)command {
    CDVPluginResult *pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
    NSString *callbackId = command.callbackId;
    NSArray* args = command.arguments;
    NSUInteger argc = [args count];
    
    if (argc >= 1) {
        NSDictionary* options = [command argumentAtIndex:0 withDefault:[NSNull null]];
        if ((NSNull *)options == [NSNull null]) {
            // Do nothing
        } else {
            NSString* str = nil;
            
            str = [options objectForKey:OPT_STOP_ALL_OBSERVERS];
            if (str && [str boolValue]) {
                [self stopAllObservers];
            }
        }
    } else {
        // Do nothing
    }
    
    if (internetReachability) {
        [internetReachability stopNotifier];
        internetReachability = nil;
    }
    
    internetReachability = [AppFeelReachability reachabilityForInternetConnection];
    [internetReachability startNotifier];
    [self.commandDelegate sendPluginResult:pluginResult callbackId:callbackId];
}

- (void)stopAllObservers:(CDVInvokedUrlCommand *)command {
    CDVPluginResult *pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
    NSString *callbackId = command.callbackId;
    
    [self stopAllObservers];
    [self.commandDelegate sendPluginResult:pluginResult callbackId:callbackId];
}

#pragma mark -
#pragma mark Internal functionality

- (void)stopAllObservers {
    if (hostReachability) {
        [hostReachability stopNotifier];
        hostReachability = nil;
    }
    
    if (internetReachability) {
        [internetReachability stopNotifier];
        internetReachability = nil;
    }
    
    if (localWifiReachability) {
        [localWifiReachability stopNotifier];
        localWifiReachability = nil;
    }
}


#pragma mark Notification observer

- (void)onReachabilityChanged:(NSNotification*)note {
    AppFeelReachability *reachability = [note object];
    NSString *interface;
    NSString *event = EVENT_REACHABILITY_CHANGE;
    NSString *observer = @"";
    NSString *connected = @"true";
    
    if (reachability == hostReachability) {
        observer = @"connectivity.OBSERVER.HOST";
    } else if (reachability == internetReachability) {
        observer = @"connectivity.OBSERVER.INTERNET";
    } else if (reachability == localWifiReachability) {
        observer = @"connectivity.OBSERVER.LOCALWIFI";
    }
    
    if ([reachability connectionRequired]) {
        connected = @"false";
    }
    
    switch ([reachability currentReachabilityStatus]) {
        case NotReachable:
            interface = @"connectivity.INTERFACE.DISCONNECTED";
            break;
            
        case ReachableViaWiFi:
            interface = @"connectivity.INTERFACE.WIFI";
            break;
            
        case ReachableViaWWAN:
            interface = @"connectivity.INTERFACE.MOBILE";
            break;
            
        default:
            interface = @"connectivity.INTERFACE.UNDEFINED";
            break;
    }
    
    
    [self.commandDelegate evalJs:
     [NSString stringWithFormat:@"setTimeout(function (){ cordova.fireDocumentEvent(%@, { 'interface' : %@, 'connected' : %@, 'observer': %@ }); }, 1);",
      event, interface, connected, observer]];
}


#pragma mark -
#pragma mark Cleanup

- (void)dealloc {
    [[NSNotificationCenter defaultCenter] removeObserver:self name:kReachabilityChangedNotification object:nil];
}

@end
