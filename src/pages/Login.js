import React, { useState } from 'react'
import Signin from '../components/Signin'
import Signup from '../components/Signup'

const Login = ({ setToken }) => {
    const [isUserNew, setIsUserNew] = useState(false);

    const toggleForm = () => {
        setIsUserNew(!isUserNew)
    }

    return (
        (
            isUserNew ? 
           <Signup  setToken={setToken} toggleForm={toggleForm}/> :
           <Signin  setToken={setToken} toggleForm={toggleForm}/>
        )
    )
}

export default Login
