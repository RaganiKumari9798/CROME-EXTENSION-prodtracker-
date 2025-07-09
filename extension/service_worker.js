let activeTabId = null;
let startTime = Date.now();
let timeData = {};               // { url: millis }

chrome.runtime.onInstalled.addListener(() => {
  chrome.alarms.create('dailyReport', { periodInMinutes: 1440 }); // 24 h
});

function updateActive(tab) {
  if (!tab || !tab.url || tab.url.startsWith('chrome://')) return;
  const now = Date.now();
  if (activeTabId !== null && timeData[tab.url]) {
    timeData[tab.url] += now - startTime;
  }
  activeTabId = tab.id;
  startTime = now;
  timeData[tab.url] = timeData[tab.url] || 0;
}

/* 1  Track focus */
chrome.tabs.onActivated.addListener(({ tabId }) =>
  chrome.tabs.get(tabId, updateActive)
);
chrome.tabs.onUpdated.addListener((tabId, info, tab) => {
  if (info.status === 'complete') updateActive(tab);
});

/* 2  Daily push */
chrome.alarms.onAlarm.addListener(async (alarm) => {
  if (alarm.name !== 'dailyReport') return;
  const date = new Date().toISOString().split('T')[0];
  const payload = { date, timeData };

  try {
    const { token } = await chrome.storage.local.get('token');
    await fetch('https://your-backend.com/api/time', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify(payload)
    });
    timeData = {};              // clear after push
  } catch (e) {
    console.error('Report upload failed', e);
  }
});

/* 3  Pull block‑list + rebuild rules */
chrome.storage.onChanged.addListener(async (changes, area) => {
  if (area !== 'sync' || !changes.blockList) return;
  const list = changes.blockList.newValue;
  const rules = list.map((domain, idx) => ({
    id: idx + 1,
    priority: 1,
    action: { type: 'block' },
    condition: { urlFilter: `*://*.${domain}/*`, resourceTypes: ["main_frame"] }
  }));
  await chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: rules.map(r => r.id),
    addRules: rules
  });
});