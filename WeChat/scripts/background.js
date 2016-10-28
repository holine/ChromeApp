chrome.app.runtime.onLaunched.addListener(function() {
	chrome.app.window.create('html/WeChat.html', {
		'bounds' : {
			'width' : 1000,
			'height' : 700
		},
		'frame' : 'none',
		'resizable' : false
	});
});