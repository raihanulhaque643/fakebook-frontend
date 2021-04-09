import React, { useState } from 'react'
import FetchOpinions from '../components/FetchOpinions'

const AllOpinions = ({ setToken }) => {

  const [reFetchOpinions, setReFetchOpinions] = useState(false)


    return (
      <FetchOpinions route={'allOpinions'} reFetchOpinions={reFetchOpinions} setReFetchOpinions={setReFetchOpinions}/>
    )
}

export default AllOpinions
