import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AddOpinion from '../components/AddOpinion'
import FetchOpinions from '../components/FetchOpinions'
import Opinion from '../components/Opinion'

const MyOpinions = () => {
    return (
        <div className="container max-w-lg px-0 mx-auto flex flex-col" >
            <AddOpinion />
            <FetchOpinions route={'myOpinions'} />
        </div>
    )
}

export default MyOpinions
