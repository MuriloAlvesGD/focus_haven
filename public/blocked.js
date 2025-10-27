const url = window.location.href;

chrome.storage.local.get(["urlBlackList"], (result) => {
    if (result.urlBlackList) {
        const urlBlackList = result.urlBlackList;

        for (let i = 0; i < Math.ceil(urlBlackList.length / 2); i++) {
            if (url == urlBlackList[i] || url == urlBlackList[urlBlackList.length - 1 - i]) {
                window.location.replace("https://muriloalvesgd.github.io/focus_info/")
            }
            if (url.includes(urlBlackList[i]) || url.includes(urlBlackList[urlBlackList.length - 1 - i])) {
                window.location.replace("https://muriloalvesgd.github.io/focus_info/")
            } else {
                console.log("URL not found in BlackList");
            }
        }
    }
});
