import React from 'react'
import "./userList.css";
import { DataGrid} from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { getUsers } from '../../redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

export default function UserList() {

    const dispatch = useDispatch();
    const users = useSelector(state=>state.user.users);
     useEffect(()=>{
        getUsers(dispatch);
    },[]);
    
    console.log(users);
    
    const handleDelete = (id) =>{
        
        // setUserData(userData.filter(item=>item.id !==id));
        
    };
    
    
    const columns = [
        { field: '_id', headerName: 'ID', width: 220 },
        { field: 'username', headerName: 'Username', width: 150,renderCell:(params)=>{
            return (
                <div className="userListUser">
                    <img src={params.row.avatar} alt="" className='userListImg' />
                    {params.row.username}
                </div>
            )
        } },
        { field: 'email', headerName: 'Email', width: 180 },
        {
          field: 'isAdmin',
          headerName: 'is Admin',
          width: 70,
        },
        {
          field: 'createdAt',
          headerName: 'Created At',
          width: 220,
        },
        {
            field:"action",
            headerName:"Action",width:150,
            renderCell: (params)=> {
                return(<>
                <Link to={"/user/"+params.row.id}>
                    <button className="userListEdit">Edit</button>
                </Link>
                    <DeleteOutline className="userListDelete"
                    //  onClick={ ()=>handleDelete(
                    //     params.row.id
                    // )}
                    />
                </>
                );
            }
        },
      ];
 
  return (
    <div className="userList">
         <DataGrid
        rows={users} disableRowSelectionOnClick
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        getRowId={(row)=>row._id}
        checkboxSelection
      />
    </div>
  )
}
