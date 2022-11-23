// window.addEventListener('click', evt => {
// 	// If event is fired by user's operation then isTrusted == true.
// 	// Chrome 46.0～
// 	// https://developer.mozilla.org/ja/docs/Web/API/Event/isTrusted
// 	console.info('were in');
// 	if (!evt.isTrusted) return;
// 	let target = evt.target;
// 	while (target && target.tagName.toLowerCase() !== 'a') {
// 		target = target.parentElement;
// 	}
// 	if (target) {
// 		if (target.id == 'SELECTOR_mainctrl_singleValue_selectorUpload_Clipboard_acButton') {
// 			evt.preventDefault();
// 			evt.stopPropagation()
// 			// navigator.clipboard
// 			// 	.readText()
// 			// 	.then((clipText) => {
// 			// 		let formatted = clipText.replace(/(\r\n|\n|\r)/gm, ";").replace(/\s/g, '');
// 			// 				
// 			// 	});
// 			// chrome.runtime.sendMessage('getClipboard', (response) => {
// 			// 	console.info(response);
// 			// 	document.getElementById('SELECTOR_mainctrl_singleValue_parseInput_inp').value = response	
// 			// });
// 			var iframe = document.createElement('iframe');
// 			var html = '<iframe allow = "clipboard-read" src = "chrome-extension/<id>/clip.html" >';
// 			document.body.appendChild(iframe);
// 			iframe.contentWindow.document.open();
// 			iframe.contentWindow.document.write(html);
// 			iframe.contentWindow.document.close();

// 			console.info('gotcha ya');

// 		}
// 	}
// }, {
// 	capture: true,
// });

window.addEventListener('paste', evt => {
	console.info(evt);
	var clipText = evt.clipboardData.getData('Text');
	evt.preventDefault();
	console.info(clipText);
	let formatted = clipText.replace(/(\r\n|\n|\r)/gm, ";").replace(/\s/g, '').replace(/\;$/, '');
	console.info(formatted);
	evt.target.value = formatted
}, {
	capture: true,
});

