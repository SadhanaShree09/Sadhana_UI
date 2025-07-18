import React from "react"

function Details({age,location,role}){
    return(
        <div  className="text-gray-700 space-y-2 text-left">
            <p><span className="font-medium text-gray-900">Age: </span> {age}</p>
            <p><span className="font-medium text-gray-900">Location: </span> {location}</p>
            <p><span className="font-medium text-gray-900">Role: </span>
            <span className=" text-purple-700">{role}</span></p>
        </div>
    )
}

export default Details