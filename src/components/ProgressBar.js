import React from 'react'

const ProgressBar = ({progress, label}) => {
    return (
        <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
            <div>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200">
                Uploading image
            </span>
            </div>
            <div className="text-right">
            <span className="text-xs font-semibold inline-block text-green-600">
                {/* {label} */}
            </span>
            </div>
        </div>
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
            <div style={{ width: `${progress}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
        </div>
        </div>
    )
}

export default ProgressBar
