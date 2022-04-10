import React from "react";
import '../componentstyles/Limit.css'
const Limit = (props)=>{
    const limits = [5,10,15,20]

    function sendLimitToParent(event){
        props.getLimitFromChild(event.target.value)
    }

    return (
        <div>
            <h4>Limit</h4>
            <select className="select-design" onChange={(event)=>{sendLimitToParent(event)}}>
            {
                limits.map((limit)=>{
                    return (
                        <option key={limit} value={limit}>
                            {limit}
                        </option>
                    )
                })
            }
            </select>
        </div>
    )
}

export default Limit