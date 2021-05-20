#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const dependencies = require(path.resolve(process.cwd(), 'plugins/cordova-play-services-version-adapter/scripts/dependencies.json'));
const properties = path.resolve(process.cwd(), 'platforms/android/project.properties');
const cordovaLybrary = 'cordova.system.library';
const googleAndroid = 'com.google.android.gms';
const googleFirebase = 'com.google.firebase';
const playServicesAds = 'play-services-ads';
const libraries = [];

let deferral;
let isCompatLib = false;
let isUsingGPSA = false;
let minVersion;
let newVersion;

function isGPSLib(libPackage, dependency) {
    let isTarget = libPackage.indexOf(googleAndroid) > -1 || libPackage.indexOf(googleFirebase) > -1;
    if (isTarget && libPackage === googleAndroid && dependency === playServicesAds) {
        isUsingGPSA = true;
        if (!isCompatLib) {
            return false;
        }
    }
    return isTarget;
}

function getBiggerVersion(v1, v2, idx = 0) {
    const v1Params = v1.split('.');
    const v2Params = v2.split('.');
    if (!isNaN(v1Params[idx]) && !isNaN(v2Params[idx])) {
        if (parseInt(v1Params[idx]) < parseInt(v2Params[idx])) {
            return v2;
        } else if (parseInt(v1Params[idx]) === parseInt(v2Params[idx])) {
            if (idx === v1Params.length - 1) {
                return v1;
            }
            return getBiggerVersion(v1, v2, idx + 1);
        }
        return v1;
    } else if (isNaN(v1Params[idx]) && !isNaN(v2Params[idx])) {
        return v2;
    }
    return v1;
}

function prepareLibraries(lines) {
    const newLines = [];
    for (let i = 0, n = lines.length; i < n; i += 1) {
        const line = lines[i];
        if (line.indexOf(cordovaLybrary) > -1) {
            const params = line.split('=');
            const libraryParams = params[1].split(':');
            const libPackage = libraryParams[0];
            const dependency = libraryParams[1];
            const version = libraryParams[2];
            if (isGPSLib(libPackage, dependency)) {
                libraries.push({ library: params[0], libPackage, dependency, version, isGPS: true });
                if (!minVersion) {
                    minVersion = { libPackage, dependency, version };
                } else {
                    const bigger = getBiggerVersion(minVersion.version, version);
                    if (bigger === version) {
                        minVersion = { libPackage, dependency, version: bigger };
                    }
                }
            } else {
                libraries.push({ library: params[0], libPackage, dependency, version, isGPS: false });
            }
        } else {
            newLines.push(line);
        }
    }
    return newLines;
}

function setNewVersion(version, libraries) {
    if (version.dependencies.filter(d => libraries.indexOf(d) > -1).length === libraries.length) {
        newVersion = version.version;
        return true;
    }
    return false;
}

function prepareNewVersion() {
    let possibleVersions = dependencies.filter(l => getBiggerVersion(l.version, minVersion.version) === l.version);
    const parsedLibraries = libraries.filter(l => l.isGPS).map(l => `${l.libPackage}:${l.dependency}`);
    if (isNaN(minVersion.version.split('.')[0])) {
        for (let i = possibleVersions.length - 1, n = 0; i >= n; i -= 1) {
            const setted = setNewVersion(possibleVersions[i], parsedLibraries);
            if (setted) {
                break;
            }
        }
    } else {
        for (let i = 0, n = possibleVersions.length; i < n; i += 1) {
            const setted = setNewVersion(possibleVersions[i], parsedLibraries);
            if (setted) {
                break;
            }
        }
    }
    if (!newVersion) {
        const parentVersion = `${minVersion.version.split('.')[0]}.0.0`;
        possibleVersions = dependencies.filter(l => l.version >= parentVersion && l.version < minVersion.version);
        for (let i = possibleVersions.length - 1, n = 0; i >= n; i -= 1) {
            const setted = setNewVersion(possibleVersions[i], parsedLibraries);
            if (setted) {
                break;
            }
        }
    }
}

function prepareSuccess(libraries, version) {
    let success = `\'Cordova Play Services Version Adapter\' has successfully applied the following changes:\n    - '`;
    success += `${libraries.join(`' => ${version}\n    - '`)}' => ${version}`;
    process.env.adapterSuccess = success;
}

function prepareWarning() {
    if (!isCompatLib) {
        let warning = '';
        if (isUsingGPSA) {
            warning += 'WARNING: some plugins are using \'com.google.android.gms:play-services-ads\''
            warning += '\nIt is not possible to find the required version of \'Google Play Services\' Ads library.';
            warning += `\n\nUse 'cordova-admob' to monetize with AdMob`;
        } else if (!isUsingGPSA) {
            warning += 'Monetize your app with AdMob ads. Now available with this cordova / phonegap plugin:';
        }
        warning += '\ncordova plugin add cordova-admob';
        warning += '\nDocs: https://github.com/appfeel/admob-google-cordova';
        process.env.adapterWarning = warning;
    }
}

function prepareError(libraries) {
    let error;
    error = '\'Cordova Play Services Version Adapter\' has detected an error. The following dependencies of \'Google Play Services\' are not compatible:\n';
    error += 'You have an incompatibility of versions with the following dependencies of \'Google Play Services\':\n    - \'';
    error += `${libraries.join('\'\n    - \'')}'\n`;
    error += '\nIt doesn\'t exists a version of \'Google Play Services\' that includes all these dependencies.';
    error += `\nAll dependencies of 'Google Play Services' must have the same version.`;
    error += `\nThe application may not compile.`;
    process.env.adapterError = error;
}

function run() {
    const data = fs.readFileSync(properties, 'utf8');
    if (data) {
        const newLines = prepareLibraries(data.split('\n'));
        if (libraries.filter(l => l.isGPS).length > 1) {
            prepareNewVersion();
            if (newVersion) {
                for (let i = 0, n = libraries.length; i < n; i += 1) {
                    const library = libraries[i];
                    const libraryVersion = library.isGPS ? newVersion : library.version;
                    newLines.push(`${library.library}=${library.libPackage}:${library.dependency}:${libraryVersion}`);
                }
                const parsedLibrariesVersion = libraries.filter(l => l.isGPS && l.version !== newVersion).map(l => `${l.libPackage}:${l.dependency}:${l.version}`);
                if (parsedLibrariesVersion.length > 0) {
                    prepareSuccess(parsedLibrariesVersion, newVersion);
                }
            } else {
                const parsedLibrariesVersion = libraries.filter(l => l.isGPS).map(l => `${l.libPackage}:${l.dependency}:${l.version}`);
                prepareError(parsedLibrariesVersion);
            }
        }
        prepareWarning();
        if (newVersion) {
            fs.writeFileSync(properties, newLines.join('\n'));
        }
    }
    deferral.resolve();
}

function attempt(fn) {
    return function () {
        try {
            fn.apply(this, arguments);
        } catch (e) {
            console.log("EXCEPTION: " + e.toString());
        }
    }
}

module.exports = function (ctx) {
    try {
        deferral = ctx.requireCordovaModule('q').defer();
    } catch (e) {
        deferral = require('q').defer();
    }
    if (ctx.opts.cordova.platforms && ctx.opts.cordova.platforms.indexOf('android') > -1) {
        if (ctx.cmdLine.indexOf('platform add') === -1) {
            isCompatLib = ctx.opts.cordova.plugins.find(p => ['com.admob.google', 'tappx-phonegap', 'tappx-phonegap-wiki', 'admob.ads.google', 'admob.google.plugin', 'com.admob.admobads', 'admob-google-demo', 'admob-google-public_html', 'admob-google-wiki', 'cordova-admob', 'admob-google-xdk', 'admob-phonegap-build-demo'].indexOf(p) > -1);
            attempt(run)();
        } else {
            deferral.resolve();
        }
    } else {
        deferral.resolve();
    }
    return deferral.promise;
};
