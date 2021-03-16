import React, { useState } from 'react'
import axios from 'axios'
import ProgressBar from './ProgressBar'
import {storageRef, db} from '../firebase/firebase-config';
import firebase from "firebase/app";
import { v4 as uuidv4 } from 'uuid';

const AddOpinion = () => {
    const [description, setDescription] = useState('')
    const [file, setFile] = useState(null)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [progress, setProgress] = useState()
    const [uploading, setUploading] = useState(false)
    const [submitting, setSubmitting] = useState(false)

    const handleFileChange = e => {
        e.preventDefault();
        setFile(e.target.files[0])
    }

    const handleFile = (e) => {
        setError('')
        setSuccess('')
        if(!description) {
            return setError('Description is required!')
        }
        if(!file) {
            return setError('Image is required!')
        }

        console.log(description)
        console.log(file)
        
        const image = file;
        const uniqueFilename = uuidv4();
        var uploadTask  = storageRef.child(uniqueFilename).put(image);

        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
        function(snapshot) {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            setUploading(true)
            setProgress(progress)
            switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
                console.log('Upload is paused');
                break;
            case firebase.storage.TaskState.RUNNING: // or 'running'
                console.log('Upload is running');
                break;
            default: 
                // default action here
                break;
            }
        }, function(error) {
        switch (error.code) {
            case 'storage/unauthorized':
            console.log('User does not have permission to access the object');
            setUploading(false)
            break;

            case 'storage/canceled':
            console.log('User canceled the upload');
            setUploading(false)
            break;

            case 'storage/unknown':
            console.log('Unknown error occurred, inspect error.serverResponse');
            setUploading(false)
            break;
            
            default: 
            // default action here
            break;
        }
        }, function() {
            console.log({
                "check this": uploadTask.snapshot.ref
            })
        // Upload completed successfully, now we can get the download URL
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
            console.log('Upload successful!')
            console.log(downloadURL, uniqueFilename)
            setUploading(false)
            handleSubmit(downloadURL, uniqueFilename)
        });
    });
  
  };

    const handleText = (e) => {
        setDescription(e.target.value)
    }

    const handleSubmit = (url, imageId) => {
        setSubmitting(true)
        setError('')
        setSuccess('')
        setProgress(0)
        setUploading(false)

        let formData = {};

        formData['url'] = url
        formData['imageId'] = imageId
        formData['description'] = description

        const myToken = localStorage.getItem('token')

        axios({
            url: ' https://fakebook-backend-643.herokuapp.com/opinions',
            method: 'POST',
            headers: {
                authorization: myToken
            },
            data: formData
        }).then((response) => {
            setSubmitting(false)
            setSuccess('Opinion posted successfully!')
            console.log(response)
        }).catch((e) => {
            setSubmitting(false)
            setSuccess('')
            setError('Could not write to database.')
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
                <input onChange={handleFileChange} type="file"/>
            </div>
            <div className="my-4 flex flex-col text-lg">
                <button onClick={handleFile} className="w-full bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 mb-0 rounded flex flex-row justify-center items-center">
                    <span>Submit</span>
                    {
                    submitting &&
                    <svg class="rounded-full animate-ping duration-300 w-3 h-3 border-2 mx-2"></svg>
                    }
                </button>
            </div>
        </div>
    )
}

export default AddOpinion
