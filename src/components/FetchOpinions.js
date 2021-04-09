import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Opinion from './Opinion';

const FetchOpinions = ({ route, reFetchOpinions, setReFetchOpinions }) => {
    let [opinions, setOpinions] = useState([])
    let [responseComplete, setResponseComplete] = useState(false)
    let [increment, setIncrement] = useState(0);
    let [loadButtonText, setLoadButtonText] = useState('Load more...')
    let [disableLoadButton, setDisableLoadButton] = useState(false)

    function getMoreOpinions () {
      setDisableLoadButton(true)
      setLoadButtonText('Loading...please wait...')
      const currentIncrement = increment + 10;
      setIncrement(currentIncrement)
      getOpinions(currentIncrement)
    }

      async function getOpinions (skip) {
      const token = localStorage.getItem('token')
      let allOpinions = await 
      axios.get(`https://fakebook-backend-643.herokuapp.com/${route}?limit=10&skip=${skip}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        .then((res) => {
          let newOpinions = [...opinions];
          let newData = newOpinions.concat(res.data)
          setOpinions(newData)
          setResponseComplete(true)
          setDisableLoadButton(false)
          setLoadButtonText('Load more...')
        })
        .catch((error) => {
          console.log({error})
          setResponseComplete(false)
        })
    }

    async function reFetch () {
      const token = localStorage.getItem('token')
      let allOpinions = await 
      axios.get(`https://fakebook-backend-643.herokuapp.com/${route}?limit=10&skip=0`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        .then((res) => {
          setOpinions([])
          setOpinions(res.data)
          setResponseComplete(true)
        })
        .catch((error) => {
          console.log({error})
          setResponseComplete(false)
        })
    }

    useEffect(() => {
        setIncrement(0)
        setOpinions([])
        getOpinions(0)
    }, [])

    useEffect(() => {
      if(reFetchOpinions) {
        setResponseComplete(false)
        reFetch()
        setReFetchOpinions(false)
      }
  }, [reFetchOpinions])

    return (
        <div className="container max-w-lg px-0 mx-auto flex flex-col">
            {
              responseComplete && opinions ?
              opinions.map((opinion) => {
                return <Opinion
                key={opinion._id}
                opinionId={opinion._id} 
                image={opinion.url}
                author={opinion.owner}
                firstName={opinion.firstName}
                lastName={opinion.lastName}
                date={opinion.updatedAt}
                owner={opinion.owner}
                description={opinion.description}
                agreements={opinion.agree.length}
                disagreements={opinion.disagree.length}
                />
              })
              :
              <div className="text-2xl text-gray-400 font-semibold">Loading...</div>
            }
            {
              (opinions &&  responseComplete) ?
              <button onClick={getMoreOpinions} disabled={disableLoadButton} className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 mb-6 rounded">{loadButtonText}</button> :
              <div></div>
            }
        </div>
    )
}

export default FetchOpinions
