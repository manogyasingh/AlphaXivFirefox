(function() {
  // Function to inject the AlphaXiv link
  function injectAlphaXivLink() {
    const accessPaperSection = document.querySelector('.full-text ul');
    if (accessPaperSection) {
      const currentUrl = window.location.href;
      const alphaXivUrl = currentUrl.replace('arxiv.org', 'alphaxiv.org');
      
      // Check if the link already exists to prevent duplicates
      if (!document.querySelector('a[href="' + alphaXivUrl + '"]')) {
        const newListItem = document.createElement('li');
        const newLink = document.createElement('a');
        newLink.href = alphaXivUrl;
        newLink.className = 'abs-button';
        newLink.textContent = 'View on AlphaXiv';
        newLink.target = '_blank';  // Opens in a new tab
        
        newListItem.appendChild(newLink);
        accessPaperSection.appendChild(newListItem);
      }
    }
  }

  // Initial injection
  injectAlphaXivLink();

  // Optional: Observe DOM changes in case the content is loaded dynamically
  const observer = new MutationObserver((mutations) => {
    for (let mutation of mutations) {
      if (mutation.type === 'childList') {
        injectAlphaXivLink();
      }
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
})();
