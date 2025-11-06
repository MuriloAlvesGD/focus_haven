chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
    checkBlocked(tabId, changeInfo.url);
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "start") {
        startClock();
    } else if (request.action === "stop") {
        stopClock();
    }
});

const checkBlocked = (id, url) => {
    if (url) {
        chrome.storage.local.get(["urlBlackList"], (result) => {
            if (result.urlBlackList) {
                const urlBlackList = result.urlBlackList;

                // Verifica se a URL está na lista de bloqueio
                const isBlocked = urlBlackList.some((blacklistedUrl) => url.includes(blacklistedUrl));

                if (isBlocked) {
                    chrome.tabs.update(id, { url: "https://muriloalvesgd.github.io/focus_info/" });
                }
            }
        });
    }
};

const startClock = () => {
    chrome.storage.local.get(["workTime", "sleepTime", "cicles"], (result) => {
        chrome.alarms.create("pomodoro", { periodInMinutes: 1 / 60 }); //create tick of 1 second
        console.log("result:");
        console.log(result);
        const workTime = result.workTime;
        const sleepTime = result.sleepTime;
        const cicles = result.cicles;
        let segs = 0;
        let limit = workTime;
        let cicleCount = 0;

        chrome.alarms.onAlarm.addListener((alarm) => {
            if (alarm.name === "pomodoro") {
                console.log(`segs: ${segs}`);
                segs += 1;
                chrome.storage.local.set(
                    { seg: segs, limit: limit, active: true, working: limit == workTime ? "Working" : "Rest" },
                    () => {}
                );
                if (segs / 60 >= limit) {
                    //Check every 1 second/tick
                    if (cicleCount < cicles) {
                        segs = 0;
                        limit == workTime ? sleepTime : workTime;
                        cicleCount++;
                    } else {
                        cicleCount = 0;
                        segs = 0;
                        chrome.alarms.clear("pomodoro");
                        chrome.storage.local.set({ seg: segs, limit: limit, active: false, working: null }, () => {});
                    }
                }
            }
        });
    });
};

const stopClock = () => {
    chrome.alarms.clear("pomodoro");
    chrome.storage.local.remove(['seg', 'limit', 'active', 'working'], () => {
    if (chrome.runtime.lastError) {
        console.error("Erro ao remover as chaves:", chrome.runtime.lastError);
    } else {
        console.log("Chaves removidas com sucesso.");
    }
});

}
