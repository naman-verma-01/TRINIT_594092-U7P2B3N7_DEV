// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     if (request.type === "getCurrentTabPerformanceData") {
//       chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//         // Attach to the performance entries of the current tab
//         chrome.tabs.executeScript({ code: "performance.getEntries()" }, (performanceEntries) => {
//           // Send the performance data to the content script
//           chrome.tabs.sendMessage(tabs[0].id, { type: "currentTabPerformanceData", data: performanceEntries });
//         });
//       });
//     }
//   });

