'use strict';
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
		// skip urls like "chrome://" to avoid extension error
	if (tab.url?.startsWith("chrome://")) return undefined;	

	if (tab.active && changeInfo.status === "complete") {	
		console.info('inject')	
		chrome.scripting.executeScript({
			target: { tabId: tabId, allFrames: true },
			files: ['in-page.js']
		});
	}
});


// chrome.runtime.onMessage.addListener((message, sender) => {
// 	if (message.method === 'getClipboard') {
// 		navigator.clipboard
// 			.readText()
// 			.then((clipText) => {
// 				let formatted = clipText.replace(/(\r\n|\n|\r)/gm, ";").replace(/\s/g, '');
// 			});
// 		openLocalFile(localFileUrl, tab);
// 	}
// });

// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
// 	// 2. A page requested user data, respond with a copy of `user`
// 	if (message === 'getClipboard') {
// 			// 	navigator.clipboard
// 			// .readText()
// 			// .then((clipText) => {
// 			// 	let formatted = clipText.replace(/(\r\n|\n|\r)/gm, ";").replace(/\s/g, '');
// 			// 	sendResponse(formatted);
// 			// });

// 		// add a DIV, contentEditable=true, to accept the paste action
// 		console.info(navigator.clipboard);
// 		sendResponse(clipboardContents);
		
// 	}
// });