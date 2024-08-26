// Wait until the DOM is fully loaded
window.addEventListener('load', () => {
    // Extract profile data from the LinkedIn profile page
    const profileData = {
        name: document.querySelector('.text-heading-xlarge')?.innerText || 'N/A',
        headline: document.querySelector('.text-body-medium')?.innerText || 'N/A',
        profilePicture: document.querySelector('.profile-photo-edit__preview, .pv-top-card-profile-picture__image--show')?.src || 'N/A',
        coverPhoto: document.querySelector('#profile-background-image-target-image')?.src || 'N/A',
        about: document.querySelector('#profile-content > div > div.scaffold-layout.scaffold-layout--breakpoint-xl.scaffold-layout--main-aside.scaffold-layout--reflow.pv-profile.pvs-loader-wrapper__shimmer--animate > div > div > main > section:nth-child(5) > div.display-flex.ph5.pv3 > div > div > div > span.visually-hidden')?.innerText || 'N/A',
        experience: document.querySelector('#profile-content > div > div.scaffold-layout.scaffold-layout--breakpoint-xl.scaffold-layout--main-aside.scaffold-layout--reflow.pv-profile.pvs-loader-wrapper__shimmer--animate > div > div > main > section:nth-child(8) > div.yvEFPdwDiKnTbJSIrgbbbxROfRuFXGFnts > ul > li:nth-child(1) > div > div.display-flex.flex-column.full-width.align-self-center > div.yvEFPdwDiKnTbJSIrgbbbxROfRuFXGFnts.pvs-entity__sub-components > ul > li:nth-child(1) > div > ul > li > div > div > div > div > span.visually-hidden')?.innerText || 'N/A',
    };

    // // Log the extracted data to the console for debugging
   

    // Only send the message if data was found
    if (profileData.name !== 'N/A' || profileData.headline !== 'N/A' ||
        profileData.about !== 'N/A' || profileData.experience !== 'N/A' ||
        profileData.profilePicture !== 'N/A' || profileData.coverPhoto !== 'N/A') {
        chrome.runtime.sendMessage({ type: 'profileData', data: profileData });
    } else {
        console.error('Could not find the required profile data elements.');
    }
    
});
