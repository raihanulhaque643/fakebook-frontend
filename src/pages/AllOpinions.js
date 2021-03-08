import React from 'react'
import Opinion from '../components/Opinion'

const AllOpinions = ({ setToken }) => {
    return (
        <div className="container max-w-lg px-0 mx-auto flex flex-col">
            <Opinion
            author={'Jack Thamarat'} 
            image={"https://communityimpact.com/uploads/images/2020/06/19/64027.jpeg"}
            description={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis explicabo sit soluta amet sunt blanditiis nihil omnis perspiciatis unde nemo corporis deleniti reprehenderit, tenetur architecto sint quo cupiditate fuga fugit.'}
            agreements={23}
            disagreements={12}
            date={'8 March 2021'}
            time={'10:47 AM'}
            />
        </div>
    )
}

export default AllOpinions
