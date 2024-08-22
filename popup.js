document.addEventListener('DOMContentLoaded', function () {
    // Request the profile data from the background script
    chrome.runtime.sendMessage({ type: 'getProfileData' }, function(response) {
        if (response) {
            document.getElementById('name').innerText = response.name;
            document.getElementById('headline').innerText = response.headline;
            document.getElementById('currentPosition').innerText = response.currentPosition;
            document.getElementById('contactInfo').innerText = response.contactInfo;
        } else {
            document.getElementById('profile-info').innerText = 'No profile data available.';
        }
        console.log(response)
    });
});
