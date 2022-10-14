function getUrlParameter(url, name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(url);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

function play(){
    chrome.tabs.query({currentWindow: true, active: true})
    .then((tabs) => {
      console.log(tabs[0].url);
      var videoId = getUrlParameter(tabs[0].url, "v");
      var processedUrl = "https://www.youtube.com/watch?v=" + videoId;

      chrome.tabs.create({url: processedUrl});
  })
}

chrome.browserAction.onClicked.addListener(play);
chrome.pageAction.onClicked.addListener(play);

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    "id": "short2regular@rashy-team.com",
    "title": "Short2Regular",
    "contexts": ["selection"]
  });
});
