
1. Edit `apps/open.in.default.json`, put your own path to `apps/app.js` instead of `/js/open-in-default/app/app.js`.
2. Copy `apps/open.in.default.json` to `/Library/Application Support/Mozilla/NativeMessagingHosts` or another OS-dependent path as listed [here](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Native_manifests#Native_messaging_manifests). Please note: dots in the file name, not dashes!
3. Install the XPI.

Tested on MacOS.

The current version is in the `build` folder.
