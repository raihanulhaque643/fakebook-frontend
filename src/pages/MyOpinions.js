import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AddOpinion from '../components/AddOpinion'
import FetchOpinions from '../components/FetchOpinions'
import Opinion from '../components/Opinion'

const MyOpinions = () => {
    return (
        <FetchOpinions route={'myOpinions'} />
    )
}

export default MyOpinions
