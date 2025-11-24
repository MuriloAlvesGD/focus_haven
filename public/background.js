chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    checkBlocked(tabId, tab.url);
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "start") {
        startClock();
    } else if (request.action === "stop") {
        stopClock();
    }
});

const checkBlocked = (id, url) => {
    chrome.storage.local.get(["urlBlackList"], (result) => {
        if (chrome.runtime.lastError) {
            console.error("Erro ao acessar a lista de bloqueio:", chrome.runtime.lastError);
            return;
        }

        if (url.includes("https://muriloalvesgd.github.io/focus_info")){
            return;
        }
        const urlBlackList = result.urlBlackList || [];
        const isBlocked = urlBlackList.some((blacklistedUrl) => url.includes(blacklistedUrl));

        if (isBlocked) {
            const parsedUrl = new URL(url);
            chrome.tabs.update(id, { url: `https://muriloalvesgd.github.io/focus_info/?q=${parsedUrl.hostname}` });
        }
    });
};

const startClock = () => {
    chrome.storage.local.get(["workTime", "sleepTime", "cicles"], (result) => {
        if (chrome.runtime.lastError) {
            console.error("Erro ao acessar os tempos de trabalho e descanso:", chrome.runtime.lastError);
            return;
        }

        const workTime = result.workTime || 1; // Valor padrão em minutos
        const sleepTime = result.sleepTime || 1; // Valor padrão em minutos
        const cicles = result.cicles || 0; // Valor padrão de ciclos

        chrome.alarms.create("pomodoro", { periodInMinutes: 1 / 60 }); // cria um alarme a cada segundo
        let segs = 0;
        let limit = workTime;
        let cicleCount = 0;

        chrome.alarms.onAlarm.addListener((alarm) => {
            if (alarm.name === "pomodoro") {
                segs += 1;
                chrome.storage.local.set(
                    { seg: segs, limit: limit, active: true, working: cicleCount % 2 == 0 ? "Working" : "Rest" },
                    () => {
                        if (chrome.runtime.lastError) {
                            console.error("Erro ao atualizar o armazenamento local:", chrome.runtime.lastError);
                        }
                    }
                );

                if (segs / 60 >= limit) {
                    if (cicleCount < cicles * 2) {
                        segs = 0;
                        limit = cicleCount % 2 == 0 ? sleepTime : workTime;
                        cicleCount++;
                    } else {
                        resetClock();
                    }
                }
            }
        });
    });
};

const stopClock = () => {
    chrome.alarms.clearAll();
    resetClock();
};

const resetClock = () => {
    chrome.storage.local.set({ seg: 0, limit: 0, active: false, working: null }, () => {
        if (chrome.runtime.lastError) {
            console.error("Erro ao resetar o relógio:", chrome.runtime.lastError);
        } else {
            console.log("Relógio resetado com sucesso.");
        }
    });
};
