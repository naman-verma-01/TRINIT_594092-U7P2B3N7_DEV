import {React,useState} from 'react'
import styled from "styled-components";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer } from 'recharts';

function Chartpagesecond(props) {
    let data=props.arrdata;
    const [barSize, setBarSize] = useState(200);

    const handleMouseEnter = () => {
        setBarSize(200);
    }

    const handleMouseLeave = () => {
        setBarSize(150);
    }
    return (
        <Section>
        <div className="analytics">
            <div className="analytics__details sujalsahumain">
                <div style={{margin: "auto"}}>
                    <h4 className='text-center'>Per {props.text} page analytics</h4>
                </div>
            </div>
            <div className="analytics__graph">
            <ResponsiveContainer width="100%" height="100%">
      <BarChart width={500} height={300} data={data}>
        <XAxis dataKey="day" tick={{ fontSize: 12, fill: "white" }}/>
        <YAxis tick={{ fontSize: 12, fill: "white" }}/>
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Bar
                                dataKey="emission"
                                fill="#8884d8"
                                barSize={barSize}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            />
      </BarChart>
      </ResponsiveContainer>
                </div>
            </div>
        </Section>
    );
  }

  export default Chartpagesecond;

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
