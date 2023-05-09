import React from 'react'
import "./sidebar.css";
import { FeedbackOutlined, LineStyle, ListAltOutlined, MailOutlineOutlined, MessageOutlined, PeopleAltOutlined, PlayCircleOutline, Report, Timeline, TrendingUp, WorkOutlineOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';


export default function Sidebar() {

  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active" >
                            <LineStyle className='sidebarIcon'/>
                            Home
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className='sidebarIcon'/>
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className='sidebarIcon'/>
                            Sales
                        </li>
                    </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <Link to="/users" className='link'>
                        <li className="sidebarListItem ">
                            <PeopleAltOutlined className='sidebarIcon'/>
                            Users
                        </li>
                        </Link>
                        <Link to="/products" className='link'>
                        <li className="sidebarListItem">
                            <PlayCircleOutline className='sidebarIcon'/>
                            Products
                        </li>
                        </Link>
                        <Link to="/lists" className='link'>
                        <li className="sidebarListItem">
                            <ListAltOutlined className='sidebarIcon'/>
                            Lists
                        </li>
                        </Link>
                    </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem ">
                            <MailOutlineOutlined className='sidebarIcon'/>
                            Mail
                        </li>
                        <li className="sidebarListItem">
                            <FeedbackOutlined className='sidebarIcon'/>
                            Feedback
                        </li>
                        <li className="sidebarListItem">
                            <MessageOutlined className='sidebarIcon'/>
                           Messages
                        </li>
                    </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem ">
                            <WorkOutlineOutlined className='sidebarIcon'/>
                            Manage
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className='sidebarIcon'/>
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <Report className='sidebarIcon'/>
                            Reports
                        </li>
                    </ul>
            </div>
        </div>
    </div>
  )
}
