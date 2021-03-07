import React from 'react'
import Logout from '../components/Logout'

const AllOpinions = ({ setToken }) => {
    return (
        <div>
            AllOpinions page
            <Logout setToken={setToken} />
        </div>
    )
}

export default AllOpinions
