import React from 'react'

const AllOpinions = ({ setToken }) => {
    return (
        <div className="container max-w-lg px-0 mx-auto flex flex-col">
            <div className="flex-row">
                <img src="https://communityimpact.com/uploads/images/2020/06/19/64027.jpeg" alt="" width="auto" height="500"/>
            </div>
            <div className="border border-gray-200">
                <div className="flex flex-row px-2 justify-between">
                    <div className="flex flex-col">
                        <span className="font-semibold">Jack Thamarat</span>
                    </div>
                    <div className="flex flex-col">
                        <small className="">8 March 2021, 10:37 AM</small>
                    </div>
                </div>
                <div className="flex-row px-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis explicabo sit soluta amet sunt blanditiis nihil omnis perspiciatis unde nemo corporis deleniti reprehenderit, tenetur architecto sint quo cupiditate fuga fugit.
                </div>
                <div className="flex flex-row my-2 px-2 justify-between">
                    <div className="">
                        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 mr-4 border rounded shadow focus:outline-none text-green-600">Agree</button>
                        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 mr-0 border rounded shadow focus:outline-none text-red-600">Disagree</button>
                    </div>
                    <div className="flex flex-row">
                        <div className="py-2 px-4 font-semibold rounded bg-green-600 mr-4 text-white">23</div>
                        <div className="py-2 px-4 font-semibold rounded bg-red-600 mr-0 text-white">11</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllOpinions
