let profileData = {};

// Listen for messages from the content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === 'profileData') {
        profileData = request.data;
    }
});

// Make the profile data available to the popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === 'getProfileData') {
        sendResponse(profileData);
    }
});
