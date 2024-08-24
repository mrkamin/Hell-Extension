document.addEventListener('DOMContentLoaded', function () {
    // Request the profile data from the background script
    chrome.runtime.sendMessage({ type: 'getProfileData' }, function(response) {
        if (response) {
            // Populate the profile information
            document.getElementById('name').innerText = response.name;
            document.getElementById('headline').innerText = response.headline;

            // Populate the profile picture and cover photo
            const profilePicture = document.getElementById('profilePicture');
            const coverPhoto = document.getElementById('coverPhoto');

            // Set the profile picture if available, otherwise set a default or placeholder image
            if (response.profilePicture && response.profilePicture !== 'N/A') {
                profilePicture.src = response.profilePicture;
            } else {
                profilePicture.src = 'images/default_profile_picture.png'; // Placeholder image
            }

            // Set the cover photo if available, otherwise set a default or placeholder image
            if (response.coverPhoto && response.coverPhoto !== 'N/A') {
                coverPhoto.src = response.coverPhoto;
            } else {
                coverPhoto.src = 'images/default_cover_photo.png'; // Placeholder image
            }
        } else {
            // Handle the case where no profile data is available
            document.getElementById('profile-info').innerText = 'No profile data available.';
        }
    });
});
