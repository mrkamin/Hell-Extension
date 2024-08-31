// Wait until the DOM is fully loaded
window.addEventListener('load', () => {
    // Extract profile data from the LinkedIn profile page
    const profileData = {
        name: document.querySelector('.text-heading-xlarge')?.innerText || 'N/A',
        headline: document.querySelector('.text-body-medium')?.innerText || 'N/A',
        profilePicture: document.querySelector('.profile-photo-edit__preview, .pv-top-card-profile-picture__image--show')?.src || 'N/A',
        coverPhoto: document.querySelector('#profile-background-image-target-image')?.src || 'N/A',
        about: document.querySelector('div.display-flex.ph5.pv3 > div > div > div > span:nth-child(1)')?.innerText || 'N/A',
        topSkills: document.querySelector('div:nth-child(4) > div > ul > li > div > div > div.display-flex.flex-column.full-width.align-self-center > div > div.display-flex.flex-column.full-width > div:nth-child(2) > div > div > span:nth-child(1)')?.innerText || 'N/A',
        experienceTitle: document.querySelector('div.LDoSQiCJWinZRtzJNuiBVttBEmEsiuoLuAQhtg > ul > li:nth-child(1) > div > div.display-flex.flex-column.full-width.align-self-center > div.display-flex.flex-row.justify-space-between > div > div > div > div > div > span:nth-child(1)')?.innerText || 'N/A',
        experienceCompany: document.querySelector('div.LDoSQiCJWinZRtzJNuiBVttBEmEsiuoLuAQhtg > ul > li:nth-child(1) > div > div.display-flex.flex-column.full-width.align-self-center > div.display-flex.flex-row.justify-space-between > div > span:nth-child(2) > span:nth-child(1)')?.innerText || 'N/A',
        experienceDescription: document.querySelector('div.LDoSQiCJWinZRtzJNuiBVttBEmEsiuoLuAQhtg > ul > li:nth-child(1) > div > div.display-flex.flex-column.full-width.align-self-center > div.LDoSQiCJWinZRtzJNuiBVttBEmEsiuoLuAQhtg.pvs-entity__sub-components > ul > li:nth-child(1) > div > ul > li > div > div > div > div > span:nth-child(1)')?.innerText || 'N/A',
    };
    console.log('3',profileData.experience)
    
    // Log the extracted data to the console for debugging
  

    // Only send the message if data was found
    if (profileData.name !== 'N/A' || profileData.headline !== 'N/A' ||
        profileData.about !== 'N/A' || profileData.experience !== 'N/A' ||
        profileData.profilePicture !== 'N/A' || profileData.coverPhoto !== 'N/A') {
        chrome.runtime.sendMessage({ type: 'profileData', data: profileData });
    } else {
        console.error('Could not find the required profile data elements.');
    }
});
