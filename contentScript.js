// Wait until the DOM is fully loaded
window.addEventListener('load', () => {
  // Extract profile data from the LinkedIn profile page
  const profileData = {
      name: document.querySelector('.text-heading-xlarge')?.innerText || 'N/A',
      headline: document.querySelector('.text-body-medium')?.innerText || 'N/A',
      currentPosition: document.querySelector('.kVWqAQWpFFcLcfOUCckkurPvyjwNVeEIiU')?.innerText || 'N/A',
      contactInfo: document.querySelector('.dnZWeEFgcJyXLULNbHjoiYrKXVoRxqrMdo')?.innerText || 'N/A'
  };
  // Log the extracted data to the console for debugging
  console.log('Extracted profile data:', profileData);

  // Only send the message if data was found
  if (profileData.name !== 'N/A' || profileData.headline !== 'N/A' || profileData.currentPosition !== 'N/A') {
      chrome.runtime.sendMessage({ type: 'profileData', data: profileData });
  } else {
      console.error('Could not find the required profile data elements.');
  }
});
