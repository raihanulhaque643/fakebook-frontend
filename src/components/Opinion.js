import React, { useState } from 'react';
import { DeleteModal } from './DeleteModal'
import axios from 'axios';

const Opinion = ({ opinionId, author, firstName, lastName, image, description, agreements, disagreements, date, owner, setReFetchOpinions }) => {

    const [signedInUser, setSignedInUser] = useState(JSON.parse(localStorage.getItem('user')))

    const dateHolder = new Date(date)
    const dd = dateHolder.getDate();
    const mm = dateHolder.getMonth();
    const yyyy = dateHolder.getFullYear();
    const hours = dateHolder.getHours();
    const minutes = dateHolder.getMinutes();
    const seconds = dateHolder.getSeconds();

    const myToken = localStorage.getItem('token')

    const handleAgree = () => {
        console.log(JSON.parse(localStorage.getItem('user'))._id + ' has agreed to' + opinionId )

        let formData = {};

        formData['userId'] = JSON.parse(localStorage.getItem('user'))._id

        console.log(formData)

        axios({
            url: `https://fakebook-backend-643.herokuapp.com/opinion/agree/${opinionId}`,
            method: 'PATCH',
            headers: {
                authorization: myToken
            },
            body: formData
        }).then((response) => {
            console.log(response)
        }).catch((e) => {
            console.log('could not write to database')
            console.log(e.response.data)
        })

    }

    const handleDisagree = () => {
        console.log(JSON.parse(localStorage.getItem('user'))._id + ' has disagreed to' + opinionId )

        let formData = {};

        formData['userId'] = JSON.parse(localStorage.getItem('user'))._id

        console.log(formData)

        axios({
            url: `https://fakebook-backend-643.herokuapp.com/opinion/disagree/${opinionId}`,
            method: 'PATCH',
            headers: {
                authorization: myToken
            },
            body: formData
        }).then((response) => {
            console.log(response)
        }).catch((e) => {
            console.log('could not write to database')
            console.log(e.response.data)
        })
    }

    return (
        <div className="max-w-lg min-w-lg mx-auto my-4 bg-blue-100">
            <div className="flex-row relative">
                <img src={image} alt="" width="100%" height="auto"/>
                {
                    signedInUser._id === owner &&
                    <div className="absolute right-3 top-3 z-10">
                        <DeleteModal opinionId={opinionId} image={image} description={description} setReFetchOpinions={setReFetchOpinions} />
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
                        <button
                        onClick={() => handleAgree()}
                        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 mr-4 border rounded shadow focus:outline-none text-green-600">Agree</button>
                        <button
                        onClick={() => handleDisagree()}
                        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 mr-0 border rounded shadow focus:outline-none text-red-600">Disagree</button>
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
