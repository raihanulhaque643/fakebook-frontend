import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Signin = ({ setToken }) => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    return (
        <div>
            Signin component
        </div>
    )
}

Signin.propTypes = {
    setToken: PropTypes.func.isRequired
  }

export default Signin
