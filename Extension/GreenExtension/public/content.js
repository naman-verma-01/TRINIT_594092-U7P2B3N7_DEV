// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     console.log(window.document.documentElement.innerHTML)
//     if (request.type === "currentTabPerformanceData") {
//       // Send the performance data to the popup
//       chrome.runtime.sendMessage({ type: "currentTabPerformanceDataFromContent", data: request.data });
//     }
//     if (request.type === "currentTabURL") {
//         // Send the performance data to the popup
        
//         chrome.runtime.sendMessage({ type: "currentTabURLfromContent", data: window.document.documentElement.innerHTML });
//       }
//   });


const getSize = () => {

    let resources = performance.getEntries();
    let totalSize = 0;
    for (let i = 0; i < resources.length; i++) {
        if (!isNaN(resources[i].transferSize)) {
            totalSize += resources[i].transferSize;
        }

    }
    console.log((totalSize / 1024).toFixed(2) + " KB")
   // let x = document.getElementsByTagName('p')
   // for(let i of x){
   //     i.style.opacity = 0
   // }
    //document.getElementsByTagName('p')[0].style.opacity = 0
    //setSize((totalSize / 1024).toFixed(2))
}

getSize()