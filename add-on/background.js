/*
// uncomment to debug the connection to native app (app.js)

function failedConnect(reason) {
	console.error('failed to connect port to native!, error:', reason.error);
}

let port = browser.runtime.connectNative("open.in.default");

port.onDisconnect.addListener(failedConnect);
console.log(port.error);
console.log(browser.runtime.lastError);
*/

browser.runtime.onMessage.addListener((request, sender) => {
  if (request.cmd === 'open.in.default') {
    // console.log("SEND", request.url);
    browser.runtime.sendNativeMessage("open.in.default", {
      url: request.url
    });
  }
});
