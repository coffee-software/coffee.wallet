*<p style="font-size: small;text-align:right;" align="right"><a style="color:#232323" color="#232323" href="http://appfeel.com">Made in Barcelona with <span style="color:#FCB" color="#FCB">&lt;3</span> and <span style="color:#BBCCFF" color="#BBCCFF">Code</span></a></p>*

Cordova Google Play Services / Firebase versions adapter
================================================

Many plugins use Google Play Services or Firebase and some of them are stick to a concrete version:

- [Cordova plugin Admob](https://github.com/appfeel/admob-google-cordova) latest
- [Google analytics plugin](https://github.com/appfeel/analytics-google) latest
- [Phonegap plugin push](https://github.com/phonegap/phonegap-plugin-push) 11.6.2
- [Google maps](https://github.com/mapsplugin/cordova-plugin-googlemaps) 15.0.1

When some or all of these plugins are used together, this may cause incompatibilities and the application will fail to build (see issues in https://github.com/appfeel/admob-google-cordova/issues/97, https://github.com/phonegap/phonegap-plugin-push/issues/2511, https://github.com/phonegap/phonegap-plugin-push/issues/2360).

This is because all plugins that use Google Play Services in an application must be using the same version. It's also not possible to decrease the version of Google Play Services because there may be unnimplemented features in lower versions that are required by the plugin.

This plugin will analyze all libraries being used by the application, see which is the version that most of them are compatible with and align the versions. All of this is done transparently, so the developer doesn't need to take care on which is the Google Play Services version that will compatibilize the different plugins. So it allows to add many different plugins using different Google Play Services without worrying anymore about the different Google Play Services library versions mess.

Simply install this plugin and it will take care of optimizing the versions of Google Play Services at prepare, compile or run time.

- [Quick start](#quick-start)
- [How it works](#how-it-works)
        - [Success example:](#success-example)
        - [Error example:](#error-example)
- [Common problems that this plugin can fix](#common-problems-that-this-plugin-can-fix)
- [Other plugins you may be interested on](#other-plugins-you-may-be-interested-on)
- [Credits](#credits)
- [License](#license)

## Quick start ##

To install this plugin, read the [Command-line Interface Guide](http://cordova.apache.org/docs/en/edge/guide_cli_index.md.html#The%20Command-line%20Interface) and use one of the following command lines:

* `cordova plugin add cordova-play-services-version-adapter`
* `ionic cordova plugin add cordova-play-services-version-adapter`

---
## How it works ##

As soon as the application compiles, all versions of Google Play Services plugins are automatically aligned, showing up a final report about compatibilization changes carried out.


#### Success example:
```
'Cordova Play Services Version Adapter' has successfully applied the following changes:
    - 'com.google.android.gms:play-services-analytics:+' => 15.0.0
    - 'com.google.android.gms:play-services-maps:15.0.1' => 15.0.0
    - 'com.google.android.gms:play-services-location:15.0.1' => 15.0.0
    - 'com.google.firebase:firebase-messaging:11.6.2' => 15.0.0
```

#### Error example:
```
'Cordova Play Services Version Adapter' has detected an error. The following dependencies of 'Google Play Services' are not compatible:
    - 'com.google.android.gms:play-services-ads:17.0.0'
    - 'com.google.android.gms:play-services-analytics:+'
    - 'com.google.android.gms:play-services-maps:15.0.1'
    - 'com.google.android.gms:play-services-location:15.0.1'
    - 'com.google.firebase:firebase-messaging:11.6.2'

It doesn't exists a version of 'Google Play Services' that includes all these dependencies.
All dependencies of 'Google Play Services' must have the same version.
The application may not compile.
```

## Common problems that this plugin can fix

com.android.build.api.transform.TransformException: com.android.dex.DexException: Multiple dex files define Lcom/google/android/gms/internal/zzez;

```
Dex: Error converting bytecode to dex:
Cause: com.android.dex.DexException: Multiple dex files define Lcom/google/android/gms/internal/zzez;
    UNEXPECTED TOP-LEVEL EXCEPTION:
    com.android.dex.DexException: Multiple dex files define Lcom/google/android/gms/internal/zzez;

com.android.dex.DexException: Multiple dex files define Lcom/google/android/gms/internal/zzez;
     at com.android.dx.merge.DexMerger.readSortableTypes(DexMerger.java:661)
     at com.android.dx.merge.DexMerger.getSortedTypes(DexMerger.java:616)
     at com.android.dx.merge.DexMerger.mergeClassDefs(DexMerger.java:598)
     at com.android.dx.merge.DexMerger.mergeDexes(DexMerger.java:171)
     at com.android.dx.merge.DexMerger.merge(DexMerger.java:198)
     at com.android.builder.dexing.DexArchiveMergerCallable.call(DexArchiveMergerCallable.java:61)
     at com.android.builder.dexing.DexArchiveMergerCallable.call(DexArchiveMergerCallable.java:36)
     at java.util.concurrent.ForkJoinTask$AdaptedCallable.exec(ForkJoinTask.java:1424)
     at java.util.concurrent.ForkJoinTask.doExec(ForkJoinTask.java:289)
     at java.util.concurrent.ForkJoinPool$WorkQueue.runTask(ForkJoinPool.java:1056)
     at java.util.concurrent.ForkJoinPool.runWorker(ForkJoinPool.java:1692)
     at java.util.concurrent.ForkJoinWorkerThread.run(ForkJoinWorkerThread.java:157)

FAILURE: Build failed with an exception.

* What went wrong:
Execution failed for task ':app:transformDexArchiveWithDexMergerForDebug'.
> com.android.build.api.transform.TransformException: com.android.dex.DexException: Multiple dex files define Lcom/google/android/gms/internal/zzez;

* Try:
Run with --stacktrace option to get the stack trace. Run with --info or --debug option to get more log output.

* Get more help at https://help.gradle.org

BUILD FAILED in 43s
:app:transformDexArchiveWithDexMergerForDebug FAILED
39 actionable tasks: 29 executed, 10 up-to-date
(node:15297) UnhandledPromiseRejectionWarning: Error: .../platforms/android/gradlew: Command failed with exit code 1Error output:
Note: Some input files use or override a deprecated API.
Note: Recompile with -Xlint:deprecation for details.
Note: Some input files use or override a deprecated API.
Note: Recompile with -Xlint:deprecation for details.
Note: .../platforms/android/app/src/main/java/com/adobe/phonegap/push/PushPlugin.java uses unchecked or unsafe operations.
Note: Recompile with -Xlint:unchecked for details.
Dex: Error converting bytecode to dex:
Cause: com.android.dex.DexException: Multiple dex files define Lcom/google/android/gms/internal/zzez;
    UNEXPECTED TOP-LEVEL EXCEPTION:
    com.android.dex.DexException: Multiple dex files define Lcom/google/android/gms/internal/zzez;

com.android.dex.DexException: Multiple dex files define Lcom/google/android/gms/internal/zzez;
     at com.android.dx.merge.DexMerger.readSortableTypes(DexMerger.java:661)
     at com.android.dx.merge.DexMerger.getSortedTypes(DexMerger.java:616)
     at com.android.dx.merge.DexMerger.mergeClassDefs(DexMerger.java:598)
     at com.android.dx.merge.DexMerger.mergeDexes(DexMerger.java:171)
     at com.android.dx.merge.DexMerger.merge(DexMerger.java:198)
     at com.android.builder.dexing.DexArchiveMergerCallable.call(DexArchiveMergerCallable.java:61)
     at com.android.builder.dexing.DexArchiveMergerCallable.call(DexArchiveMergerCallable.java:36)
     at java.util.concurrent.ForkJoinTask$AdaptedCallable.exec(ForkJoinTask.java:1424)
     at java.util.concurrent.ForkJoinTask.doExec(ForkJoinTask.java:289)
     at java.util.concurrent.ForkJoinPool$WorkQueue.runTask(ForkJoinPool.java:1056)
     at java.util.concurrent.ForkJoinPool.runWorker(ForkJoinPool.java:1692)
     at java.util.concurrent.ForkJoinWorkerThread.run(ForkJoinWorkerThread.java:157)
```

All firebase libraries must be either above or below 14.0.0

```
(node:14071) UnhandledPromiseRejectionWarning: Error: .../platforms/android/gradlew: Command failed with exit code 1Error output:
FAILURE: Build failed with an exception.

* Where:
Script '.../platforms/android/cordova-support-google-services/dev-build.gradle' line: 16

* What went wrong:
A problem occurred evaluating project ':app'.
> Failed to apply plugin [class 'com.google.gms.googleservices.GoogleServicesPlugin']
   > All firebase libraries must be either above or below 14.0.0

* Try:
Run with --stacktrace option to get the stack trace. Run with --info or --debug option to get more log output.

* Get more help at https://help.gradle.org

BUILD FAILED in 1s
    at ChildProcess.whenDone (.../platforms/android/cordova/node_modules/cordova-common/src/superspawn.js:169:23)
    at emitTwo (events.js:126:13)
    at ChildProcess.emit (events.js:214:7)
    at maybeClose (internal/child_process.js:925:16)
    at Process.ChildProcess._handle.onexit (internal/child_process.js:209:5)
(node:14071) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 1)
(node:14071) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
```


Failed to apply plugin [class 'com.google.gms.googleservices.GoogleServicesPlugin']

```
(node:15968) UnhandledPromiseRejectionWarning: Error: .../platforms/android/gradlew: Command failed with exit code 1Error output:
FAILURE: Build failed with an exception.

* Where:
Script '.../platforms/android/cordova-support-google-services/dev-build.gradle' line: 16

* What went wrong:
A problem occurred evaluating project ':app'.
> Failed to apply plugin [class 'com.google.gms.googleservices.GoogleServicesPlugin']
   > For input string: "+"

* Try:
Run with --stacktrace option to get the stack trace. Run with --info or --debug option to get more log output.

* Get more help at https://help.gradle.org

BUILD FAILED in 1s
    at ChildProcess.whenDone (.../platforms/android/cordova/node_modules/cordova-common/src/superspawn.js:169:23)
    at emitTwo (events.js:126:13)
    at ChildProcess.emit (events.js:214:7)
    at maybeClose (internal/child_process.js:925:16)
    at Process.ChildProcess._handle.onexit (internal/child_process.js:209:5)
(node:15968) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 1)
(node:15968) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
```


Version: x.y.z is lower than the minimum version (9.0.0) required for google-services plugin.

```
(node:14939) UnhandledPromiseRejectionWarning: Error: .../platforms/android/gradlew: Command failed with exit code 1Error output:
FAILURE: Build failed with an exception.

* Where:
Script '.../platforms/android/cordova-support-google-services/dev-build.gradle' line: 16

* What went wrong:
A problem occurred evaluating project ':app'.
> Failed to apply plugin [class 'com.google.gms.googleservices.GoogleServicesPlugin']
   > Version: 6.8.0 is lower than the minimum version (9.0.0) required for google-services plugin.

* Try:
Run with --stacktrace option to get the stack trace. Run with --info or --debug option to get more log output.

* Get more help at https://help.gradle.org

BUILD FAILED in 2s
    at ChildProcess.whenDone (.../platforms/android/cordova/node_modules/cordova-common/src/superspawn.js:169:23)
    at emitTwo (events.js:126:13)
    at ChildProcess.emit (events.js:214:7)
    at maybeClose (internal/child_process.js:925:16)
    at Process.ChildProcess._handle.onexit (internal/child_process.js:209:5)
(node:14939) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 1)
(node:14939) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
```

---
## Other plugins you may be interested on

- [Ionic/Cordova Admob monetization](https://github.com/appfeel/admob-google-cordova)
- [Ionic/Cordova In app purchase]()
- [Ionic/Cordova Google Analytics](https://github.com/appfeel/analytics-google)

---
## Credits ##

* [appFeel](http://www.appfeel.com)

---
## License ##
```
The MIT License

Copyright (c) 2018 AppFeel

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
