import React from 'react'
import "./topbar.css";
import {Language, NotificationsNoneOutlined, Settings} from '@mui/icons-material';

export default function Topbar() {
  return (
    <div className="topbar">
        <div className="topbarWrapper">
            <div className="topLeft"><span className="logo">Revenant_Admin</span></div>
            <div className="topRight">
                
                <div className="topbarIconContainer">
                    <NotificationsNoneOutlined/>
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                <Language/>
                </div>
                <div className="topbarIconContainer">
                <Settings/> 
                </div>
                <img src="https://i.ibb.co/1nkPyfs/Netflix-avatar.png" className="topAvatar"
                alt=".." border="0"/>
            </div>
        </div>
    </div>
  )
}
