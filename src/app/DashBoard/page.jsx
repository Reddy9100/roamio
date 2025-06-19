"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Cookie from 'js-cookie'
import Lottie from 'lottie-react'
import { Gauge, LineChart, PieChart, Gauge as SpeedometerIcon ,Smile,
  Meh,
  Frown,} from 'lucide-react'
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  Tooltip as ReTooltip,
  Pie,
  LineChart as ReLineChart,
  Line,
  Tooltip,
  ResponsiveContainer,
  Cell,
  PieChart as RePieChart,
  XAxis,
} from 'recharts'
import { Card, CardContent } from '@/components/ui/card'

const lineData = [
  { name: 'Mon', amount: 220 },
  { name: 'Tue', amount: 180 },
  { name: 'Wed', amount: 200 },
  { name: 'Thu', amount: 260 },
  { name: 'Fri', amount: 310 },
  { name: 'Sat', amount: 400 },
  { name: 'Sun', amount: 450 },

  { name: 'Mon', amount: 190 },
  { name: 'Tue', amount: 210 },
  { name: 'Wed', amount: 170 },
  { name: 'Thu', amount: 240 },
  { name: 'Fri', amount: 290 },
  { name: 'Sat', amount: 370 },
  { name: 'Sun', amount: 420 },

  { name: 'Mon', amount: 200 },
  { name: 'Tue', amount: 195 },
  { name: 'Wed', amount: 180 },
  { name: 'Thu', amount: 230 },
  { name: 'Fri', amount: 305 },
  { name: 'Sat', amount: 390 },
  { name: 'Sun', amount: 460 },

  { name: 'Mon', amount: 210 },
  { name: 'Tue', amount: 170 },
  { name: 'Wed', amount: 160 },
  { name: 'Thu', amount: 250 },
  { name: 'Fri', amount: 280 },
  { name: 'Sat', amount: 410 },
  { name: 'Sun', amount: 430 },
];



const pieData = [
  { name: 'Food', value: 400 },
  { name: 'Travel', value: 300 },
  { name: 'Shopping', value: 300 },
  { name: 'Entertainment', value: 200 },
];

const budgetLimit = 10000
const spentAmount = 9800
const percentageUsed = (spentAmount / budgetLimit) * 100

const MoodIcon = () => {
  if (percentageUsed > 90) return <Frown className="w-5 h-5 text-red-700" />
  if (percentageUsed > 50) return <Meh   className="w-5 h-5 text-yellow-700" />
  return <Smile className="w-5 h-5 text-green-900" />
}

const moneyAnimation = require("../../../public/animation/hello.json");


const gaugeColor =
  percentageUsed > 90
    ? '#EF4444'
    : percentageUsed > 50
    ? '#F59E0B'
    : '#10B981'

const COLORS = ['#10B981', '#6366F1', '#F59E0B', '#EF4444'];



const DashboardPage = () => {

  const [showSplash, setShowSplash] = useState(true);

 
  const [name, setName] = useState('');

  useEffect(() => {
    const userName = Cookie.get('userName');
    if (userName) {
      setName(userName);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 100); // 4 seconds
    return () => clearTimeout(timer);
  }, [name]);

  useEffect(() => {
    const splashShown = sessionStorage.getItem('splashShown');
    if (!splashShown) {
      setShowSplash(true);
      sessionStorage.setItem('splashShown', 'true');
      setTimeout(() => {
        setShowSplash(false);
      }, 4000);
    } else {
      setShowSplash(false);
    }
  }, []);



  return (

<>
    {showSplash ? (
      <div className='flex h-full flex-col items-center  gap-1'>
     
      <Lottie
                 animationData={moneyAnimation}
                 loop
                 className="w-[full] my-auto mt-[100px] ml-[20px] h-[full]"
               />

         

   </div>
    ) : (
      <div className="p-6 pb-[120px] md:p-8 space-y-6">

        
     

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="p-4 rounded-xl text-center shadow-md">
          <h3 className="text-sm font-medium text-gray-500">Total Spent</h3>
          <p className="text-lg font-bold text-gray-900">₹4,200</p>
        </Card>
        <Card className="p-4 rounded-xl text-center shadow-md">
          <h3 className="text-sm font-medium text-gray-500">This Week</h3>
          <p className="text-lg font-bold text-gray-900">₹2,150</p>
        </Card>
        <Card className="p-4 rounded-xl text-center shadow-md">
          <h3 className="text-sm font-medium text-gray-500">This Month</h3>
          <p className="text-lg font-bold text-gray-900">₹7,300</p>
        </Card>
        <Card className="p-4 rounded-xl text-center shadow-md">
          <h3 className="text-sm font-medium text-gray-500">Categories</h3>
          <p className="text-lg font-bold text-gray-900">4</p>
        </Card>
      </div>

      <div>

       <Card className="rounded-2xl shadow-md">
              <CardContent className="p-4">
              <h2 className="flex  items-center gap-2 text-lg font-semibold text-gray-700 mb-2">
          <Gauge className="w-5 h-5 text-red-500" />
          Budget Usage
          <MoodIcon className="ml-4"/>
        </h2>
                <ResponsiveContainer width="100%" height={200}>
                  <RadialBarChart
                    cx="50%"
                    cy="80%"
                    innerRadius="60%"
                    outerRadius="100%"
                    startAngle={180}
                    endAngle={0}
                    data={[{ value: percentageUsed }]}
                  >
                    <PolarAngleAxis
                      type="number"
                      domain={[0, 100]}
                      tick={false}
                    />
                    <RadialBar
                      minAngle={15}
                      background
                      clockWise={false}
                      dataKey="value"
                      fill={gaugeColor}
                    >
                     
                    </RadialBar>
                    <ReTooltip
                      formatter={(v) => `${v.toFixed(1)}%`}
                    />
                  </RadialBarChart>
                </ResponsiveContainer>
               {/* wrap in a top border for separation */}
<div className="mt-6 border-t border-gray-200 pt-4">
  <p className="text-center text-sm text-gray-700">
    <span className="font-semibold text-black">₹{spentAmount}</span>
    <span className="mx-1 text-red-900">/</span>
    <span className="font-semibold text-green-800">₹{budgetLimit}</span>
    <span className="ml-2 uppercase tracking-wide font-semibold text-red-600">
      used
    </span>
  </p>
</div>

              </CardContent>
            </Card>
</div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Line Chart */}
        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold mb-2 flex items-center gap-2 text-gray-700">
              <LineChart className="w-5 h-5 text-green-500" /> Monthly Expenses
            </h2>
            <ResponsiveContainer width="100%" height={200}>
              <ReLineChart data={lineData}>
                <Line type="monotone" dataKey="amount" stroke="#10B981" strokeWidth={2} />
                <XAxis dataKey="name" stroke="#888888" className='hidden'/>
                <Tooltip />
              </ReLineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Pie Chart */}
        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold mb-2 flex items-center gap-2 text-gray-700">
              <PieChart className="w-5 h-5 text-purple-500" /> Category Breakdown
            </h2>
            <ResponsiveContainer width="100%" height={200}>
              <RePieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={60}
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </RePieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

     
      
    </div>
    )}

</>
   
  );
};

export default DashboardPage;