"use client"
import Image from 'next/image';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    Name: 'Monday',
    Present: 60,
    Absent: 40,
  },
  {
    Name: 'Tuesday',
    Present: 50,
    Absent: 50,
  },
  {
    Name: 'Wednesday',
    Present: 90,
    Absent: 10,
  },
  {
    Name: 'Thursday',
    Present: 96,
    Absent: 4,
  },
  {
    Name: 'Friday',
    Present: 40,
    Absent: 60,
  },
];


const AttendanceChart = () => {
  return (
    <div className='bg-white rounded-lg p-4 h-full'>
        <div className='flex justify-between items-center'>
            <h1 className = "text-lg font-semibold">Attendance</h1>
            <Image src ="/moreDark.png" alt = "" width = {20} height = {20}></Image>   
        </div>
        <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={data}
          barSize ={20}
        >
          <CartesianGrid strokeDasharray="3 3" vertical = {false} />
          <XAxis dataKey="Name" axisLine ={false} tick = {{fill: "#d1d5db"}} tickLine = {false}/>
          <YAxis  axisLine ={false} tick = {{fill:"#d1d5db"}} tickLine = {false}/>
          <Tooltip />
          <Legend align = "left" verticalAlign='top' wrapperStyle = {{paddingTop:"20px",paddingBottom: "40px"}} />
          <Bar dataKey="Present" fill="#FAE27C" legendType='circle' />
          <Bar dataKey="Absent" fill="#C3EBFA" legendType='circle' />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AttendanceChart