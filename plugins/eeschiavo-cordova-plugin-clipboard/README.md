Clipboard
=========

Clipboard management plugin for Cordova/PhoneGap that supports iOS, Android, Windows, and Windows Phone 8.

## Usage

Install the plugin using the CLI, for instance with PhoneGap:

	cordova plugin add eeschiavo-cordova-plugin-clipboard

The plugin creates the object `cordova.plugins.clipboard` with the methods `copy(text, onSuccess, onError)` and `paste(onSuccess, onError)`.

Example:

	var text = "Hello World!";

	cordova.plugins.clipboard.copy(text);

	cordova.plugins.clipboard.paste(function (text) { alert(text); });

## Notes

### All platforms

- The plugin only works with text content.

### Windows Phone

- The Windows Phone platform doesn't allow applications to read the content of the clipboard. Using the `paste` method will return an error.

### Android

- The minimum supported API Level is 11. Make sure that `minSdkVersion` is larger or equal to 11 in `AndroidManifest.xml`.

## Acknowledgements

This plugin is a fork of [VersoSolutions/CordovaClipboard](https://github.com/VersoSolutions/CordovaClipboard)
