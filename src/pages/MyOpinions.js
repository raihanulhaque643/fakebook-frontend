import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AddOpinion from '../components/AddOpinion'
import Opinion from '../components/Opinion'

const MyOpinions = () => {
    let [opinions, setOpinions] = useState([])
    let [responseComplete, setResponseComplete] = useState(false)
    let [increment, setIncrement] = useState(0);
    let [loadButtonText, setLoadButtonText] = useState('Load more...')
    let [disableLoadButton, setDisableLoadButton] = useState(false)

    function getMoreOpinions () {
      setDisableLoadButton(true)
      setLoadButtonText('Loading...please wait...')
      const currentIncrement = increment + 3;
      setIncrement(currentIncrement)
      getOpinions(currentIncrement)
    }

      async function getOpinions (skip) {
      const token = localStorage.getItem('token')
      let allOpinions = await 
      axios.get(`https://fakebook-backend-643.herokuapp.com/myOpinions?limit=3&skip=${skip}`, {
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

    useEffect(() => {
        setIncrement(0)
        setOpinions([])
        getOpinions(0)
    }, [])

    return (
        <div className="container max-w-lg px-0 mx-auto flex flex-col">
        <AddOpinion />
            {/* <Opinion
            author={'Jack Thamarat'} 
            image={"https://communityimpact.com/uploads/images/2020/06/19/64027.jpeg"}
            description={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis explicabo sit soluta amet sunt blanditiis nihil omnis perspiciatis unde nemo corporis deleniti reprehenderit, tenetur architecto sint quo cupiditate fuga fugit.'}
            agreements={23}
            disagreements={12}
            date={'8 March 2021'}
            time={'10:47 AM'}
            /> */}
            {
              responseComplete ?
              opinions.map((opinion) => {
                return <Opinion
                key={opinion._id} 
                image={`https://fakebook-backend-643.herokuapp.com/opinions/${opinion._id}/opinionImage`}
                author={opinion.owner}
                date={opinion.updatedAt}
                // time={}
                description={opinion.description}
                agreements={opinion.agree.length}
                disagreements={opinion.disagree.length}
                />
              })
              :
              <div className="text-2xl text-gray-400 font-semibold">Loading...</div>
            }
            {
              responseComplete &&
              <button onClick={getMoreOpinions} disabled={disableLoadButton} className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 mb-6 rounded">{loadButtonText}</button>
            }
        </div>
    )
}

export default MyOpinions
