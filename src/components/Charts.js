import React from 'react'
import { BarChart, CartesianGrid, Tooltip, Legend, Area, XAxis, YAxis, Bar, PieChart, Pie,AreaChart } from 'recharts';

function Charts() {

    const data = [
        { name: "facebook", value: 100000 },
        { name: "instagram", value: 1111111 },
        { name: "twitter", value: 122121 },
        { name: "telegram", value: 181818 },
    ]

    return (
        <div style={{backgroundColor:'pink'}} >

            <BarChart width={730} height={250} data={data}>
                <CartesianGrid strokeDasharray="0 0 " />
                <XAxis dataKey="name" />
                <YAxis dataKey="value" />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#0431B4" />
                <Bar dataKey="name" fill="#FF0000" />
            </BarChart>
            <BarChart width={730} height={250} data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }} >
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
            <PieChart width={730} height={250}>
                <Pie data={data} dataKey="value"  nameKey="name" cx={200} cy={200} outerRadius={80} 
         fill="#8884d8" />
                <Pie data={data} dataKey="value"  nameKey="name" cx={200} cy={200} innerRadius={50} 
         fill="#8884d8" />
                <Tooltip/>
            </PieChart>
            <AreaChart
  width={500}
  height={250}
  data={data}
  margin={{
    top: 50, right: 50, bottom: 50, left: 50,
  }}
  
>
  <XAxis dataKey="name" />
  <YAxis />
  <Area dataKey="value" stroke="#8884d8" fill="#8884d8" />
  <Tooltip />
  {/* <Legend/> */}
</AreaChart>
        </div>
    )
}

export default Charts


