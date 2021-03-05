import React from 'react'
import Signin from '../components/Signin'
import Signup from '../components/Signup'

const Login = ({ setToken }) => {
    return (
        <div>
           <Signin  setToken={setToken} />
           <Signup  setToken={setToken} />
        </div>
    )
}

export default Login
