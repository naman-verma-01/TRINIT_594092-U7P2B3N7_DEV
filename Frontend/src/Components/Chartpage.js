import React from 'react'
import styled from "styled-components";
// import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const [data,setdata]=useState([]);
// const data = [
//     { name: 'Jan', sales: 200 },
//     { name: 'Feb', sales: 120 },
//     { name: 'Mar', sales: 150 },
//     { name: 'Apr', sales: 180 },
//     { name: 'May', sales: 220 }
//   ];
  
function Chartpage(props) {
    let data=props.arrdata;
    
    return (
        <Section>
            <div className="analytics">
                <div className="analytics__details sujalsahumain">
                    <div style={{margin: "auto"}}>
                        <h4 className='text-center'>{props.text} per page analytics</h4>
                    </div>
                </div>
                <div className="analytics__graph">
                <ResponsiveContainer width="100%" height="100%">
                <LineChart
      width={500}
      height={300}
      data={data}
      margin={{ top:50, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="webpage" tick={{ fontSize: 12, fill: "white" }} />
      <YAxis  tick={{ fontSize: 12, fill: "white" }} />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey={props.text==="Data Consumption"?"totaldata":"totalcarbonemission"} stroke="white" strokeWidth="2" activeDot={{ r: 8 }} />
    </LineChart>
        </ResponsiveContainer>
                </div>
            </div>
        </Section>
    )
}

export default Chartpage
const Section = styled.section`
.analytics {
color: black;
width: 100%;
.analytics__details {
    display: flex;
    justify-content: space-between;
    margin: 1rem 0;
    div {
        display: flex;
        gap: 1rem;
        button {
            border-radius: 0.5rem;
            padding: 0.4rem 1rem;
            border: none;
            cursor: pointer;
            background-color: #EEF4FF;
            color: black;
        }
    }
}
.analytics__graph {
    height: 25rem;
    width: 90%;
    margin: auto;
      .recharts-default-tooltip {
      background-color: black !important;
      border-color: black !important;
      color : white !important;
    }
}
.recharts-wrapper{
    background: #1e293b;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
}
.sujalsahumain{
    padding: 10px;
    background: #1e293b;
    color: white;
    font-size: 21px;
    margin: 5% 4.9% 0% 4.9%;
    border: 2px solid white;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
}
}
`;
