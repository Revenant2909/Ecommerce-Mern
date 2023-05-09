import React, { useEffect, useState } from 'react'
import "./widgetLg.css";
import { userRequest } from '../../requestMethods';
import {format} from "timeago.js";
export default function WidgetLg() {
    const Button = ({type})=>{
        return <button className={"widgetLgButton "+ type}>{type} </button>;
    };

    const[Orders,setOrders] = useState([]);
    useEffect(()=>{
        const getOrders= async()=> {
            try {
                const res = await userRequest.get("/orders");
                setOrders(res.data);
            } catch (err) {
                console.log(err)
            }
        };
        getOrders();
        },[])


  return (
    <div className='widgetLg'>
        <h3 className="widgetLgTitle">Latest Transactions</h3>
        <table className="widgetLgTable">
            <tbody>
            <tr className="widgetLgTr">
            <th className="widgetLgTh">CustomerId</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
            </tr>
            {Orders.map((order)=>(

                <tr className="widgetLgTr" key={order.userId}>
                <td className="widgetLgUser">
                    <img src="https://i.ibb.co/tDvkQrG/Screenshot-1.png" alt="" className="widgetLgImg" />
                    <span className="widgetLgName">{order.userId}</span>
                </td>
                <td className="widgetLgDate">{format(order.createdAt)}</td>
                <td className="widgetLgAmount">Rs. {order.amount}</td>
                <td className="widgetLgStatus">
                    <Button type={order.status}/>
                    </td>
            </tr>
                ))}
        </tbody>
        </table>
    </div>
  )
}
