import React, { useState } from 'react'
import AddOpinion from '../components/AddOpinion'
import FetchOpinions from '../components/FetchOpinions'

const MyOpinions = () => {

    const [reFetchOpinions, setReFetchOpinions] = useState(false)

    return (
        <div className="container max-w-lg px-0 mx-auto flex flex-col" >
            <AddOpinion setReFetchOpinions={setReFetchOpinions} />
            <FetchOpinions route={'myOpinions'} reFetchOpinions={reFetchOpinions} setReFetchOpinions={setReFetchOpinions} />
        </div>
    )
}

export default MyOpinions
