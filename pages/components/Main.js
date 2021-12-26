import React from 'react'
import {useEffect,useState} from 'react'
import axios from 'axios';
import Cookie from './Cookie';

const backendUrl = process.env.NEXT_PUBLIC_COOKIES_API
const getCookieUrl = `${backendUrl}api/v1/cookie_stands/`
const refreshJWT = `${backendUrl}api/refresh/`


const Main =(props) => {
    
    const[cookieList,setCookieList] = useState([])
    
    // get data on component load/Mount
    useEffect(() =>{
        const config ={
            headers: {
                'Authorization':`Bearer ${props.token}`
            }
        }
        axios.get(getCookieUrl, config).then((response) =>{
            console.log(response.data);
            setCookieList(response.data);
        });
    },[props.token]);
    return (
        <div>
            <h1>Cookie List</h1>
            {cookieList.map((cookie,index) =>{
                return <Cookie key={index} location = {cookie.location} description={cookie.description} hourly_sales={cookie.hourly_sales}/>
            })}
        </div>
    )
}

export default Main