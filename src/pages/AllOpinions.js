import axios from 'axios'
import React, { useEffect, useState } from 'react'
import FetchOpinions from '../components/FetchOpinions'
import Opinion from '../components/Opinion'

const AllOpinions = ({ setToken }) => {
    return (
      <FetchOpinions route={'allOpinions'}/>
    )
}

export default AllOpinions
