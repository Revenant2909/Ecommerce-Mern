import React from 'react'
import "./home.css";
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import Chart from '../../components/chart/Chart';
// import {userData} from "../../DummyData";
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import { useEffect, useMemo, useState } from "react";
import { userRequest } from '../../requestMethods';

export default function Home() {
  
  const MONTHS = useMemo(()=>
  [  "Jan",  "Feb",  "Mar",  "Apr",  "May",  "Jun",  "Jul",  "Aug",  "Sep",  "Oct",  "Nov",  "Dec"],[]
  );

  const[userStats,setUserStats] = useState([]);

  useEffect(()=>{
    const getStats = async () =>{
      try {
        const res = await userRequest.get("/users/stats");
        const statsList = res.data.sort(function(a,b){
      return a._id - b._id;
    });
      statsList.map((item)=> setUserStats((prev)=>[...prev,{name:MONTHS[item._id-1], "New User": item.total}]));
      } catch (err) {
            console.log(err);
      }
    };
    getStats();
  },[MONTHS]);
  console.log(userStats);

  return (
    <div className='home'>
    <FeaturedInfo/>
    <Chart title="User Analytics" data={userStats} dataKey="New User" grid/>
    <div className="homeWidgets">
      <WidgetSm/>
      <WidgetLg/>
    </div>
    </div>
  )
}
