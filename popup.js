
document.addEventListener('DOMContentLoaded', function () {
    // Request the profile data from the background script
    chrome.runtime.sendMessage({ type: 'getProfileData' }, function(response) {
        if (response) {
            // Populate the profile information
            document.getElementById('name').innerText = response.name;
            document.getElementById('headline').innerText = response.headline;
            document.getElementById('about').innerText = response.about;
            document.getElementById('topSkills').innerText = response.topSkills;
            document.getElementById('f-e-t').innerText = response.experienceTitle;
            document.getElementById('f-e-c').innerText = response.experienceCompany;
            document.getElementById('f-e-d').innerText = response.experienceDescription;
            document.getElementById('b-f-e-t').innerText = response.bexperienceTitle;
            document.getElementById('b-f-e-c').innerText = response.bexperienceCompany;
            document.getElementById('b-f-e-d').innerText = response.bexperienceDescription;
            document.getElementById('o-f-e-t').innerText = response.oexperienceTitle;
            document.getElementById('o-f-e-c').innerText = response.oexperienceCompany;
            document.getElementById('o-f-e-d').innerText = response.oexperienceDescription;

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

