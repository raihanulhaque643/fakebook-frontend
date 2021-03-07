import React from 'react'
import Logout from '../components/Logout'

const MyOpinions = ({ setToken }) => {
    return (
        <div>
            MyOpinions page
            <Logout setToken={setToken} />
        </div>
    )
}

export default MyOpinions
