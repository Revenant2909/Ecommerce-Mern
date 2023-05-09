// import React, { useContext, useEffect} from 'react'
// import "./listList.css";
// import { DataGrid} from '@mui/x-data-grid';
// import { DeleteOutline } from '@mui/icons-material';
// import { Link } from 'react-router-dom';
// import { ListContext } from '../../context/listContext/ListContext';
// import { deleteList, getLists } from '../../context/listContext/apiCalls';

// export default function ListList() {
//     const{lists,dispatch} = useContext(ListContext);

//     useEffect(()=>{
//         getLists(dispatch);
//     },[dispatch]);
//     // console.log(lists);
//     const handleDelete = (id) =>{
//         deleteList(id,dispatch);
//     };
//     const columns = [
//         { field: '_id', headerName: 'ID', width: 220 },
//         { field: 'title', headerName: 'Title', width: 200 },
//         { field: 'genre', headerName:  'Genre', width: 200 },
//         { field: 'type', headerName: 'Type', width: 200 },
        
//         {
//             field:"action",
//             headerName:"Action",width:150,
//             renderCell: (params)=> {
//                 return(<>
//                 <Link to={{ pathname:"/list/"+params.row._id, list: params.row}}>
//                     <button className="productListEdit">Edit</button>
//                 </Link>
//                     <DeleteOutline className="productListDelete" onClick={()=>handleDelete(
//                         params.row._id
//                     )}/>
//                 </>
//                 );
//             }
//         },
//       ];
//   return (
//     <div className='productList'>
//         <DataGrid
//         rows={lists} 
//         disableRowSelectionOnClick
//         columns={columns}
//         pageSize={5}
//         rowsPerPageOptions={[5]}
//         checkboxSelection
//         getRowId={(r)=> r._id}
//       />
//     </div>
//   )
// }
