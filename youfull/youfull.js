function getUrlParameter(url, name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(url);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

function playFull(){
    browser.tabs.query({currentWindow: true, active: true})
    .then((tabs) => {
      console.log(tabs[0].url);
      var videoId = getUrlParameter(tabs[0].url, "v");
      var fullscreenURL = "https://www.youtube.com/embed/" + videoId;

      browser.tabs.create({url: fullscreenURL});
  })
}

browser.browserAction.onClicked.addListener(playFull);
browser.pageAction.onClicked.addListener(playFull);
