import React, { useState } from 'react'
import axios from 'axios'
import FormData from 'form-data'
import ProgressBar from './ProgressBar'

const AddOpinion = () => {
    const [description, setDescription] = useState('')
    const [file, setFile] = useState(null)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [progress, setProgress] = useState()
    const [uploading, setUploading] = useState(false)

    const handleFile = (e) => {
        setFile(e.target.files[0])
    }

    const handleText = (e) => {
        setDescription(e.target.value)
    }

    const handleSubmit = () => {
        setError('')
        setSuccess('')
        setProgress(0)
        setUploading(false)
        if(!description) {
            return setError('Description is required!')
        }
        if(!file) {
            return setError('Image is required!')
        }

        console.log(description)
        console.log(file)

        //  create readable "multipart/form-data" streams using FormData
        let formData = new FormData();

        formData.append('opinionImage', file)
        formData.append('description', description)

        const myToken = localStorage.getItem('token')

        axios({
            url: ' https://fakebook-backend-643.herokuapp.com/opinions/me',
            method: 'POST',
            headers: {
                authorization: myToken
            },
            data: formData,
            onUploadProgress: data => {
                //Set the progress value to show the progress bar
                setUploading(true)
                setProgress(Math.round((100 * data.loaded) / data.total))
                console.log(progress)
            },
        }).then((response) => {
            setUploading(false)
            setSuccess('Opinion posted successfully!')
            console.log(response)
        }).catch((e) => {
            setSuccess('')
            setUploading(false)
            setError(e.response.data.error)
        })

    }

    return (
        <div className="
        container 
        max-w-lg 
        px-0 
        mx-auto 
        flex 
        flex-col 
        border 
        border-gray-200 
        rounded 
        px-4 
        py-2
        ">
            {
                uploading ? 
                <ProgressBar progress={progress} label={`${progress}%`} /> :
                <div></div>
            }
            <div className="font-semibold my-2 text-4xl">Add an opinion:</div>
            {
                error ?
                <div className="font-semibold text-red-600">{error}</div> : 
                <div></div>
            }
            {
                success ?
                <div className="font-semibold text-green-600">{success}</div> : 
                <div></div>
            }
            <div className="my-4 flex flex-col text-lg">
                <label htmlFor="" className="font-semibold">Description</label>
                 <textarea  onChange={handleText} rows="4" className="border border-gray-200 rounded" maxLength="600" style={{height: '100px', width: '100%', resize: 'none', display:'block', padding:'10px'}} />
            </div>
            <div className="my-4 flex flex-col text-lg">
                <label htmlFor="" className="font-semibold">Add an image (jpg/png)</label>
                <input onChange={handleFile} type="file"/>
            </div>
            <div className="my-4 flex flex-col text-lg">
                <button onClick={handleSubmit} className="w-full bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 mb-0 rounded">Submit</button>
            </div>
        </div>
    )
}

export default AddOpinion
