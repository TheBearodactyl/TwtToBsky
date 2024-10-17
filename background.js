chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    const url = details.url;
    if (url.startsWith('https://x.com') || url.startsWith('https://twitter.com')) {
      return { redirectUrl: 'https://bsky.app' };
    }
  },
  { urls: ["*://x.com/*", "*://twitter.com/*"] },
  ["blocking"]
);
