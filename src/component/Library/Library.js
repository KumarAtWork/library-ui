import React from 'react'
import {Link} from 'react-router-dom'


const Library = (props)=>{
return(<p> <Link to={`/${props.id}`}>{props.name}</Link> </p>
)
}

export default Library