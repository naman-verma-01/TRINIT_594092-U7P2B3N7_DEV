import React, { useEffect, useState } from 'react'
import Ping from 'ping.js';

/*global chrome*/
function Home(props) {
    const [data, setData] = useState(null)
    const [ems, setEms] = useState(null)
    const [currentTab, setCurrentTab] = useState(null)

    const userid = localStorage.getItem('userid')
    const status = localStorage.getItem('statusExt')



    var p = new Ping();

    p.ping("https://github.com", function (err, data) {
        // Also display error if err is returned.
        if (err) {
            console.log("error loading resource")
            data = data + " " + err;
        }
       // document.getElementById("ping-github").innerHTML = data;
        console.log("DATA ==>",data)
    });



    //window.alert(`userid ${userid}`)
    useEffect(() => {
        if (data === null) {

            getData()
        }
    }, [])

    setInterval(()=>{
        getData()
    },5000)

    // if(userid){
    //     chrome.tabs.sendMessage(tab.id, {greeting: "hello"});
    // }

    const getData = async () => {

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', "https://tri-nit-backend.vercel.app");
        headers.append('Access-Control-Allow-Credentials', 'true');
        headers.append('GET', 'POST', 'OPTIONS');


        let response = await fetch("https://tri-nit-backend.vercel.app/api/carbonemission/getCurrentTab/" + userid,
            {
                method: 'GET',
                headers,
                // body: JSON.stringify({ userid:"naman@gmail.com" })
            })

        response = await response.json()


        let totalEms = response.results[0].carbonemission
        let currentTabName = response.results[0].status
        let totalSize = response.results[0].datatransferredingb

        setCurrentTab(currentTabName)
        setEms(totalEms)
        setData(totalSize)

    }

    const logout = ()=>{
        localStorage.setItem("statusExt","false")
        props.toggler()
    }
    return (
        <div className='popup'>
            {data ?
                <>
                    <div><h2>{currentTab}</h2></div>
                    <div><h3>Page Size :&nbsp;{(data * 1024).toFixed(5)} MB</h3></div>
                    <div><h3>This consumption of data is equavalent to...</h3></div>
                    <div><img style={{ height: '75px', width: 'auto' }} src='https://cdn-icons-png.flaticon.com/512/550/550250.png' /></div>
                    <div><h3> <b></b>{(data * 11 * 1000).toFixed(5)} mili gms</h3></div>

                    <div><h2>of CO2 emission...!!</h2></div>
                    <div><h5 style={{textAlign:"center"}}>Click on the button given below to copy URL of Indepth analytics tab.</h5></div>
                    <div ><button onClick={() => {navigator.clipboard.writeText("https://nit-trichy-hackathon.vercel.app/")} }  style={{ paddingLeft: "5px", paddingRight: "5px", color: 'white', padding: '5px', backgroundColor: '#8860D0', border: 'none', borderRadius: '4px',width:"90vw" }}>LINK</button></div>
                    <br/>
                    <div><button onClick={logout} style={{ paddingLeft: "5px", paddingRight: "5px", color: 'white', padding: '5px', backgroundColor: '#8860D0', border: 'none', borderRadius: '4px',width:"90vw" }}>Log Out</button></div>
                </>
                : null}
        </div>
    );
}

export default Home