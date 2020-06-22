chrome.tabs.onActivated.addListener(function (activeInfo) {
    // Send a message to the active tab
    setTimeout(function () {
        chrome.tabs.sendMessage(activeInfo.tabId, {
            message: 'refresh_dashboard'
        });
    }, 10000);
});
