import React, { useEffect, useState } from 'react'
import "./widgetSm.css";
import { Visibility } from '@mui/icons-material';
import axios from "axios";
import { userRequest } from '../../requestMethods';
export default function WidgetSm() {
    const[newUsers,setNewUsers] = useState([]);
    useEffect(()=>{
        const getNewUsers= async()=> {
            try {
                const res = await userRequest.get("/users?new=true");
                 setNewUsers(res.data);
            } catch (err) {
                console.log(err)
            }
        };
        getNewUsers();
        },[])
        console.log(newUsers);
  return (
    <div className="widgetSm">
        <span className="widgetSmTitle">New Join Members</span>
        <ul className="widgetSmList">
            {newUsers.map((user)=>(
                <li className="widgetSmListItem" key={user._id}>
                <img src={user.img || "https://i.ibb.co/1nkPyfs/Netflix-avatar.png"} alt="Error" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">{user.username}</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className='widgetSmIcon'/>
                    Display
                </button>
            </li>
            ))}
        </ul>
    </div>
  )
}
