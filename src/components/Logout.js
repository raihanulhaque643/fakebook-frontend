import React from 'react'
import axios from 'axios'

const Logout = ({ setToken }) => {
    const handleClick = async () => {
        try {
            await axios({
                method: 'post', 
                url: 'https://fakebook-backend-643.herokuapp.com/logout',
                headers: {
                  Authorization: 'Bearer ' + localStorage.getItem('token')
                }
              })
            localStorage.removeItem('token')
            setToken(null)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div>
            <button
            onClick={handleClick} 
            className="bg-red-500 
            hover:bg-red-400 
            text-white font-bold 
            py-2 px-4 
            border-b-4 
            border-red-700 
            hover:border-red-500 
            rounded">
            Logout
            </button>
        </div>
    )
}

export default Logout
