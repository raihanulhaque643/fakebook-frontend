import React from 'react'

const Opinion = ({ author, image, description, agreements, disagreements, date, time }) => {
    return (
        <div>
            <div className="flex-row">
                <img src={image} alt="" width="auto" height="500"/>
            </div>
            <div className="border border-gray-200">
                <div className="flex flex-row px-2 justify-between">
                    <div className="flex flex-col">
                        <span className="font-semibold">{author}</span>
                    </div>
                    <div className="flex flex-col">
                        <small className="">{date}, {time}</small>
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
