import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Chartpage from './Chartpage'
import Chartpagesecond from './Chartpagesecond'
import Footer from './Footer'
import { useNavigate } from 'react-router'

const Home = (props) => {
    const [arrdata,setarrdata]=useState([]);
    const [subarrdata,setsubarrdata]=useState([]);
    const [emissionrankingdata,setemissionrankingdata]=useState([]);
    const [rankingData, setRankingData] = useState(null);
    
    const user = props.user;
    const navigate = useNavigate();
    //const mappedArray = {};

    const isValidUrl = urlString=> {
        try { 
            return Boolean(new URL(urlString)); 
        }
        catch(e){ 
            return false; 
        }
    }


    const getUserRanking = async()=>{
      let data = await fetch('https://tri-nit-backend.vercel.app/api/carbonemission/getUserRanking?user='+user)
      data = await data.json()
      setRankingData(data)
    }
    useEffect(()=>{
        const handlesubmit=async()=>{
          // event.preventDefault();
            let data=await fetch('https://tri-nit-backend.vercel.app/api/carbonemission/getdata/'+user);
            let maindata=await data.json();
            console.log(maindata);
            let alldata=maindata.results;
            // let tempdata=alldata;
            // tempdata.sort(function(a, b) {
            //   if (parseInt(a.count) < parseInt(b.count)) {
            //     return -1;
            //   }
            //   if (parseInt(a.count) > parseInt(b.count)) {
            //     return 1;
            //   }
            //   return 0;
            // });
            // setsubarrdata(tempdata);       
    let processedElements=new Set();
    let mainalldata=[];
           for(let i=0;i<alldata.length;i++){
              if(processedElements.has(alldata[i].webpage) || !isValidUrl(alldata[i].webpage)){
                 continue;
              }
              alldata[i].totaldata=(parseFloat(alldata[i].totaldata)).toFixed(5);
              alldata[i].totalcarbonemission=(alldata[i].totaldata*11).toFixed(5);
              processedElements.add(alldata[i].webpage);
              mainalldata.push(alldata[i]);
           }
           setarrdata(mainalldata);
      }
      const handlefunction=async()=>{
           let data=await fetch('https://tri-nit-backend.vercel.app/api/carbonemission/lastThreeDays?userid=naman@gmail.com');
           let maindata=await data.json();
           let aujdata=[maindata.data]
           console.log(aujdata);
           let tempobj={};
           let temparr=[];
            // for(let i=0;i<aujdata.length;i++){
            //     tempobj.day=i+1;
            //     tempobj.emission=aujdata[i].emission;
            //     temparr.push(tempobj);
            // }
            temparr.push({
              day:"1",
               emission:aujdata[0].emission1.toFixed(5)
            })
            temparr.push({
              day:"2",
               emission:aujdata[0].emission2.toFixed(5)
            })
            temparr.push({
              day:"3",
               emission:aujdata[0].emission3.toFixed(5)
            })
           setemissionrankingdata(temparr);
      }
      handlesubmit();
      getUserRanking();
      handlefunction();
    },[]);
    // const handlenewapi=async(webpagename)=>{
    //   let data = await fetch(`https://tri-nit-backend.vercel.app/api/carbonemission/getWebpageDetail?user=naman@gmail.com&webpage=${webpagename}`);
    //   let maindata = await data.json();
    //   let arrdata=maindata.results;
    // //  console.log("maindata.results", maindata);
    //   if(Array.isArray(arrdata) && arrdata.length>0){
    //     // subarrdata[webpagename] = maindata.results
    //     setsubarrdata(arrdata)
    //     console.log("subarrdata",arrdata)
    //   }
    //   fetch(`https://tri-nit-backend.vercel.app/api/carbonemission/getWebpageDetail?user=naman@gmail.com&webpage=${webpagename}`).then(response=>response.json()).then(json=>{setsubarrdata(json.results)});
    // }
    const handledescription=(date)=>{
        console.log("sujal sahu");
            // document.getElementById(`lower_arrow_${date}`).style.display="none"
            // document.getElementById(`upper_arrow_${date}`).style.display="block"
            // document.getElementById(`sub_content_${date}`).style.display="block";
    }
    const handledescriptionreverse=(date)=>{
        console.log("umang jain");
            // document.getElementById(`lower_arrow_${date}`).style.display="block"
            // document.getElementById(`upper_arrow_${date}`).style.display="none"
            // document.getElementById(`sub_content_${date}`).style.display="none";
    }
    let mappedArray={};
    mappedArray["https://www.google.com"]=[
      "https://www.bing.com/",
      "https://www.duckduckgo.com/",
      "https://www.yahoo.com/"
     ]
    mappedArray["https://rapidapi.com"]=[
      "https://www.programmableweb.com/",
"https://www.getpostman.com/",
"https://www.npmjs.com/"
     ]
     mappedArray["https://stackoverflow.com"]=[
      "https://www.geeksforgeeks.org/",
"https://www.quora.com/",
"https://www.dev.to/"

     ]
     mappedArray["https://web.whatsapp.com"]=[
      ";https://www.whatsapp-web.net",
"https://www.whatsapp-online.ru/",
"https://www.wasapweb.com.mx"

     ]
     mappedArray["https://demos.creative-tim.com"]=[
      "https://www.creative-tim.com/",
      "https://www.iradesign.io/"
     ]
     mappedArray["https://github.com"]=[
      "https://www.stackoverflow.com/",
      "https://www.medium.com/",
      "https://www.w3schools.com/"
     ]
     mappedArray["https://leetcode.com"]=[
      "https://www.hackerrank.com/",
      "https://www.interviewbit.com/",
      "https://www.hackerearth.com/"
     ]
     mappedArray["https://www.kaggle.com"]=[
      "https://www.analyticsvidhya.com/",
      "https://www.towardsdatascience.com/",
      "https://www.scikit-learn.org/"
     ]
     mappedArray["https://classroom.google.com"]=[
      "https://www.bjorng.com",
      "https://www.clanitra.com/",
      "https://www.equipofutucam.org/"
     ]
     mappedArray["https://imagecolorpicker.com"]=[
      "https://www.colorcodepicker.com",
      "https://www.html-color-codes.info/",
      "https://www.htmlcolorcodes.com/"
     ]
  return (
    <>
       <Navbar/>
       <Chartpage arrdata={arrdata} text={"Carbon Footprint"}/><br/><br/><br/>
      {rankingData?<><div className='subcardtop'><h3 className="font-semibold text-base text-blueGray-700" style={{fontSize: "22px"}}>Your Total Carbon Emission is {parseFloat(rankingData.UserEmission).toFixed(5)} grams.</h3><br/>
       <h3 className="font-semibold text-base text-blueGray-700">Your are in the top {(100 - (rankingData.UserEmission/(rankingData.otherUserEmission+rankingData.UserEmission))*100).toFixed(3) }% in causing less carbon emission.</h3>
       </div></>:
      null} 
       <Chartpage arrdata={arrdata} text={"Data Consumption"}/>
       <Chartpagesecond arrdata={emissionrankingdata} text={"Day"}/><br/><br/><br/>
       {/* <Chartpage/> */}
       <section className="bg-blueGray-50">
<div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded sujalsahu">
    <div className="rounded-t mb-0 px-4 py-3 border-0">
      <div className="flex flex-wrap items-center">
        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3 className="font-semibold text-base text-blueGray-700">Page Visits</h3>
        </div>
        {/* <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
          <button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">See all</button>
        </div> */}
      </div>
    </div>

    <div className="block w-full overflow-x-auto">
      <table className="items-center bg-transparent w-full border-collapse">
      <thead>
        <tr>
          <th className="border-t-0 px-6 bg-gray-100 text-xs font-medium text-left text-blueGray-600 uppercase tracking-wider py-3 naman">
            Web Page
          </th>
          <th className="border-t-0 px-6 bg-gray-100 text-xs font-medium text-left text-blueGray-600 uppercase tracking-wider py-3 naman">
             Total Visits
          </th>
          <th className="border-t-0 px-6 bg-gray-100 text-xs font-medium text-center text-blueGray-600 uppercase tracking-wider py-3 naman">
            Data Consumption(MB)
          </th>
          <th className="border-t-0 px-6 bg-gray-100 text-xs font-medium text-left text-blueGray-600 uppercase tracking-wider py-3 naman">
             Carbon Emission(mg)
          </th>
          <th className="border-t-0 px-6 bg-gray-100 text-xs font-medium text-left text-blueGray-600 uppercase tracking-wider py-3 naman">
             Status
          </th>
        </tr>
      </thead>
      <tbody>
        {arrdata.map(element => (
           <tr key={element.date}>
            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
              {element.webpage}
            </th>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
              {element.count}
            </td>
            <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
            {/* {(element.totaldata*1024).toFixed(5)} */}
            {(parseFloat(element.totaldata)*1024)}
            </td>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
            {(parseFloat(element.totalcarbonemission)*1000).toFixed(5)}
            </td>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              {(parseFloat(element.totalcarbonemission)*1000).toFixed(5)<5.0?<div className='sujal' style={{backgroundColor:"green"}}></div>:((parseFloat(element.totalcarbonemission)*1000).toFixed(5)<10.0?<div className='sujal' style={{backgroundColor:"yellow"}}></div>:<div className='sujal' style={{backgroundColor:"red"}}></div>)}
            </td>
          </tr>

        ))}
      </tbody>
    </table>
    </div>
  </div>
</div>
{/* <footer className="relative pt-8 pb-6 mt-16">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap items-center md:justify-between justify-center">
      <div className="w-full md:w-6/12 px-4 mx-auto text-center">
        <div className="text-sm text-blueGray-500 font-semibold py-1">
          Made with <a href="https://www.creative-tim.com/product/notus-js" className="text-blueGray-500 hover:text-gray-800" target="_blank">Notus JS</a> by <a href="https://www.creative-tim.com" className="text-blueGray-500 hover:text-blueGray-800" target="_blank"> Creative Tim</a>.
        </div>
      </div>
    </div>
  </div>
</footer> */}
</section>
<div className="mainheader">
    <h1>Detailed Analysis</h1>
</div> 
       {Array.isArray(arrdata) && arrdata.map((element)=>{
       return (<div className="card card_sujal" key={element.date}>
  <h5 className="card-header">{element.webpage}</h5>
  <div className="card-body card_body_sujal">
      <div className="card_body_content">
           <h4 style={{ color: "#d3d3b6"}}>Total Data Consumption(MB)</h4>
           <p>{element.totaldata*1024}</p>
      </div>
      <div className="card_body_content">
           <h4 style={{ color: "#d3d3b6"}}>Total Carbon Emission(in gms)</h4>
           <p>{element.totalcarbonemission}</p>
      </div>
      <div className="card_body_content">
           <h4 style={{ color: "#d3d3b6"}}>No. of visits</h4>
           <p>{element.count}</p>
      </div>
  </div>
   
  <div className="card_body_arrow_icon_lower" id={`lower_arrow_${element.date}`} style={{display:"block"}}>
   <button onClick={(event)=>{event.preventDefault();handledescription(element.date)}}><i className="fa-solid fa-angle-down"></i></button>
  </div>
  <div className="card_body_arrow_icon_upper" id={`upper_arrow_${element.date}`} style={{display:"none"}}>
   <button onClick={(event)=>{event.preventDefault();handledescriptionreverse(element.date)}}><i className="fa-solid fa-angle-up"></i></button>
  </div>
  {/* {handlenewapi(element.webpage)} */}
  <div className="card_body_description">
  <div className="card card_subsujal" id={`sub_content_${element.date}`} style={{display:"block"}}>
  <h5 className="card-header" style={{color:"#d3d3b6"}}>{`Visit Here`}</h5>
    {/* {console.log(mappedArray[element.webpage])} */}
    {mappedArray[element.webpage] && mappedArray[element.webpage].map((subelement)=>{
      // console.log("sujal sahu");
  return <div key={subelement} className="card-body card_body_sujal">
      <div className="card_body_content">
           <li style={{fontSize: "17px"}}><a href={subelement} target="_blank">{subelement}</a></li>
      </div>       
  </div>
})}
</div>
</div>
</div>)
})}
<Footer/>
    </>
  )
}

export default Home