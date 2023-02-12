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


chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message) {
      console.log(request.message);
    }
  });

const getSize =async () => {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', "https://tri-nit-backend.vercel.app");
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('GET', 'POST', 'OPTIONS');


    let resources = performance.getEntries();
    let totalSize = 0;
    for (let i = 0; i < resources.length; i++) {
        if (!isNaN(resources[i].transferSize)) {
            totalSize += resources[i].transferSize;
        }

    }
    let response = await fetch("https://tri-nit-backend.vercel.app/api/carbonemission/postdata",
      {
        method: 'POST',
        headers,
        body: JSON.stringify({ userid:"naman@gmail.com",webpage:window.location.origin,datatransferredingb:(totalSize/ 1024 / 1024 /1024) })
      })
      console.log(localStorage.getItem('statusExt'),localStorage.getItem('userid'))
    //console.log((totalSize / 1024).toFixed(2) + " KB")
    console.log(11   * (totalSize / 1024 / 1024 /1024 ) + " gms")
    //console.log(11  *1000 * (totalSize / 1024 / 1024 /1024 ) + " milli gms")
    //console.log(window.location.origin)

    
  
}

getSize()
