import React from 'react'

const Cookie = (props)=> {
    return (
        <div>
            <h1>Location: {props.location}</h1>
            <p>Description: {props.description}</p>
            <p>Hourly Sales: {props.hourly_sales}</p>

        </div>
    )
}

export default Cookie
