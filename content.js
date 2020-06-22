chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.message === 'refresh_dashboard') {
        var dashboardFrame = document.querySelector("div.dashboardContainer > iframe");
        dashboardFrame.contentWindow.document.body.querySelector('.slds-button.slds-button_neutral.refresh').click();
    }
});
