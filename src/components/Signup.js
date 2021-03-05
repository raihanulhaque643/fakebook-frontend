import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Signup = ({ setToken }) => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    return (
        <div>
            Signup component
        </div>
    )
}

Signup.propTypes = {
    setToken: PropTypes.func.isRequired
  }

export default Signup
