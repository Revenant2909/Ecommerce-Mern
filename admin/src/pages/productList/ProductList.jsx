import React, { useEffect, useState} from 'react'
import "./productList.css";
import { DataGrid} from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { deleteProduct, getProducts } from '../../redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';

export default function ProductList() {
    const dispatch = useDispatch();
    const products = useSelector(state=>state.product.products);

    useEffect(()=>{
        getProducts(dispatch);
    },[dispatch]);
  

    const handleDelete = (id) =>{
        deleteProduct(id,dispatch);
    };
    const columns = [
        { field: '_id', headerName: 'Product ID', width: 220 },
        { field: 'product', headerName: 'Product Name', width: 200,
        renderCell:(params)=>{
            return (
                <div className="productListItem">
                    <img src={params.row.img} alt="" className='productListImg' />
                    {params.row.title}
                </div>
            )
        } },
        { field: 'inStock', headerName: 'Stock Available', width: 120 },
       
        { field: 'price', headerName:  'Price', width: 120 },
        {
            field:"action",
            headerName:"Action",width:150,
            renderCell: (params)=> {
                return(<>
                <Link to={{ pathname:"/product/"+params.row._id, product: params.row}}>
                    <button className="productListEdit">Edit</button>
                </Link>
                    <DeleteOutline className="productListDelete"
                     onClick={()=>handleDelete(
                        params.row._id
                    )}/>
                </>
                );
            }
        },
      ];
  return (
    <div className='productList'>
        <DataGrid
        rows={products} 
        disableRowSelectionOnClick
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        getRowId={(row)=> row._id}
      />
    </div>
  )
}
