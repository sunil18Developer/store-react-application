import React, { useState } from "react";

const Sort = (props)=>{
    const [isAsc,setIsAsc] = useState(false)

    function sendSort(event){
        setIsAsc(!isAsc)
        console.log(isAsc)
        props.getSortFromChild(isAsc)
    }
    return (
        <div>
            <h2>Sort:  {isAsc?<label onClick={(event)=>sendSort(event)}>Desc</label>:<label onClick={(event)=>sendSort(event)}>Asc</label>}</h2>
        </div>
    )
}


export default Sort