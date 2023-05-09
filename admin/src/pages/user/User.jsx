// import React from 'react'
// import "./user.css";
// import { CalendarToday, EmailOutlined, Home, PermIdentity, Phone, Publish } from '@mui/icons-material';
// import { Link } from 'react-router-dom';
// export default function User() {
//     return (
//         <div className="user">
//             <div className="userTitleContainer">
//                 <h1 className="userTitle">Edit User</h1>
//                 <Link to="/newUser">
//                 <button className="userAddButton">Create</button>
//                 </Link>
//             </div>
//             <div className="userContainer">
//                 <div className="userShow">
//                     <div className="userShowTop">
//                         <img src="https://i.ibb.co/1nkPyfs/Netflix-avatar.png" alt="" className="userShowImg" />
//                         <div className="userShowTopTitle">
//                             <span className="userShowUsername">Laflame</span>
//                             <span className="userShowUserTitle">Software Engineer</span>
//                         </div>
//                     </div>
//                     <div className="userShowBottom">

//                         <span className="userShowTitle">
//                             Account Details
//                         </span>
                        
//                         <div className="userShowInfo">
//                             <PermIdentity className="userShowIcon" />
//                             <span className="userShowInfoTitle">
//                                 Laflame2909
//                             </span>
//                         </div>
//                         <div className="userShowInfo">
//                             <CalendarToday className="userShowIcon" />
//                             <span className="userShowInfoTitle">
//                                 29/09/2001
//                             </span>
//                         </div>
//                         <span className="userShowTitle">
//                             Contact Details
//                         </span>
//                         <div className="userShowInfo">
//                             <Phone className="userShowIcon" />
//                             <span className="userShowInfoTitle">
//                                 +91 8527621700
//                             </span>
//                         </div>
//                         <div className="userShowInfo">
//                             <EmailOutlined className="userShowIcon" />
//                             <span className="userShowInfoTitle">
//                                 Laflame2909@gmail.com
//                             </span>
//                         </div>
//                         <div className="userShowInfo">
//                             <Home className="userShowIcon" />
//                             <span className="userShowInfoTitle">
//                                 New York | USA
//                             </span>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="userUpdate">
//                     <span className="userUpdateTitle">Edit Details</span>
//                     <form  className="userUpdateForm">
//                         <div className="userUpdateLeft">
//                         <div className="userUpdateItem">
//                             <label>Username</label>
//                             <input type="text" placeholder='Laflame2909' className='userUpdateInput' />
//                         </div>
//                         <div className="userUpdateItem">
//                             <label>Full Name</label>
//                             <input type="text" placeholder='Laflame' className='userUpdateInput' />
//                         </div>
//                         <div className="userUpdateItem">
//                             <label>Phone</label>
//                             <input type="text" placeholder='8527621700' className='userUpdateInput' />
//                         </div>
//                         <div className="userUpdateItem">
//                             <label>Email</label>
//                             <input type="email" placeholder='Laflame2909@gmail.com' className='userUpdateInput' />
//                         </div>
//                         <div className="userUpdateItem">
//                             <label>Address</label>
//                             <input type="text" placeholder='New York | USA' className='userUpdateInput' />
//                         </div>
//                         </div>
//                         <div className="userUpdateRight">
//                             <div className="userUpdateUpload">
//                                 <img src="https://i.ibb.co/tDvkQrG/Screenshot-1.png" alt="" className='userUpdateImg' />
//                                 <label htmlFor="file"><Publish className='userUpdateIcon'/></label>
//                                 <input type="file" id="file" style={{display:"none"}}/>
//                             </div>
//                             <button className="userUpdateButton">Update</button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     )
// }
