// Wait until the DOM is fully loaded
window.addEventListener('load', () => {
    // Extract profile data from the LinkedIn profile page
    const profileData = {
        name: document.querySelector('.text-heading-xlarge')?.innerText || 'N/A',
        headline: document.querySelector('.text-body-medium')?.innerText || 'N/A',
        profilePicture: document.querySelector('.profile-photo-edit__preview, .pv-top-card-profile-picture__image--show')?.src || 'N/A',
        coverPhoto: document.querySelector('#profile-background-image-target-image')?.src || 'N/A',
    
    };
   console.log('console',profileData.profilePicture, profileData.coverPhoto)

    // // Log the extracted data to the console for debugging
   

    // Only send the message if data was found
    if (profileData.name !== 'N/A' || profileData.headline !== 'N/A' ||
        profileData.profilePicture !== 'N/A' || profileData.coverPhoto !== 'N/A') {
        chrome.runtime.sendMessage({ type: 'profileData', data: profileData });
    } else {
        console.error('Could not find the required profile data elements.');
    }
    
});
