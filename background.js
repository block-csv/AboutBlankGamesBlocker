chrome.tabs.onActivated.addListener(({ tabId }) => {
  chrome.tabs.get(tabId, (tab) => {
    if (tab.url.startsWith("about:blank")) {
      chrome.tabs.update(tabId, { url: "about:blank" });
    }
  });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url && changeInfo.url.startsWith("about:blank")) {
    chrome.tabs.update(tabId, { url: "about:blank" });
  }
});