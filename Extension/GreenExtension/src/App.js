import { useEffect, useState } from 'react';
import './App.css';
/*global chrome*/
function App() {
  const [size, setSize] = useState(null)
  const [data, setData] = useState(localStorage.getItem('size'))

  useEffect(()=>{
    console.log("LOCAL ====>",localStorage.getItem('size'))
  },[])
  const getSize = () => {

    let x = document.documentElement.innerHTML
    console.log(x)
    let resources = performance.getEntries();
    let totalSize = 0;
    for (let i = 0; i < resources.length; i++) {
      if (!isNaN(resources[i].transferSize)) {
        totalSize += resources[i].transferSize;
      }

    }
    console.log((totalSize / 1024).toFixed(2) + " KB")
    setSize((totalSize / 1024).toFixed(2))
  }
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === "currentTabPerformanceDataFromContent") {
      // Update the state with the performance data
      setData(request.data);
    }
    if (request.type === "currentTabURLfromContent") {
      // Update the state with the performance data
      setData(request.data);
    }
  });
  const getCurrentTab = ()=>{
    
    chrome.runtime.sendMessage({ type: "currentTabURL" });
    //chrome.runtime.sendMessage({ type: "getCurrentTabPerformanceData" });
  }
  return (
    <div className='popup'>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default App;
