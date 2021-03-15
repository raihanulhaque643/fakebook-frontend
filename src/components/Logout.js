import React from 'react'
import axios from 'axios'

const Logout = ({ setToken }) => {
    const handleClick = async () => {
        try {
            await axios({
                method: 'post', 
                url: 'https://fakebook-backend-643.herokuapp.com/logoutAll',
                headers: {
                  Authorization: 'Bearer ' + localStorage.getItem('token')
                }
              })
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            localStorage.removeItem('firebaseUser')
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
            text-white font-semibold 
            py-2 px-4 
            border-b-4
            border-red-700 
            hover:border-red-500 
            rounded">
            Logout 
            <i className="fa fa-power-off mx-0.5" aria-hidden="true"></i>
            </button>
        </div>
    )
}

export default Logout
