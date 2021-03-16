import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Opinion = ({ author, firstName, lastName, image, description, agreements, disagreements, date, owner }) => {

    const [signedInUser, setSignedInUser] = useState(JSON.parse(localStorage.getItem('user')))

    const dateHolder = new Date(date)
    const dd = dateHolder.getDate();
    const mm = dateHolder.getMonth();
    const yyyy = dateHolder.getFullYear();
    const hours = dateHolder.getHours();
    const minutes = dateHolder.getMinutes();
    const seconds = dateHolder.getSeconds();

    return (
        <div className="max-w-lg min-w-lg mx-auto my-4 bg-blue-100">
            <div className="flex-row relative">
                <img src={image} alt="" width="100%" height="auto"/>
                {
                    signedInUser._id === owner &&
                    <div className="absolute right-3 top-3 z-10">
                    <span style={{'fontSize': '22px', 'color': 'grey'}}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                    </span>
                    </div>
                }
            </div>
            <div className="border border-gray-200">
                <div className="flex flex-row px-2 justify-between">
                    <div className="flex flex-col">
                        <span className="font-semibold">{firstName}{' '}{lastName}</span>
                    </div>
                    <div className="flex flex-col">
                        <small className="">{`${dd}-${mm}-${yyyy}, ${hours}:${minutes}:${seconds}`}</small>
                    </div>
                </div>
                <div className="flex-row px-2">
                {description}
                </div>
                <div className="flex flex-row my-2 px-2 justify-between">
                    <div className="">
                        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 mr-4 border rounded shadow focus:outline-none text-green-600">Agree</button>
                        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 mr-0 border rounded shadow focus:outline-none text-red-600">Disagree</button>
                    </div>
                    <div className="flex flex-row">
                        <div className="py-2 px-4 font-semibold rounded bg-green-600 mr-4 text-white">{agreements}</div>
                        <div className="py-2 px-4 font-semibold rounded bg-red-600 mr-0 text-white">{disagreements}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Opinion
