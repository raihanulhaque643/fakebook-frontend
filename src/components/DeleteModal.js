import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import firebase from 'firebase';
import axios from 'axios';


 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    maxWidth: '280px'
  }
};
 
// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')
 
export function DeleteModal({ trigger, opinionId, image, description, setReFetchOpinions }){

    const [over, setOver] = useState(false);

  var subtitle;
  const [modalIsOpen,setIsOpen] = React.useState(trigger);
  function openModal() {
    setIsOpen(true);
  }
 
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }
 
  function closeModal(){
    setIsOpen(false);
  }

  const handleTrashButton = async (e) => {
    setIsOpen(false)
      e.preventDefault();
    var storageRef = firebase.storage().ref();
    const token = localStorage.getItem('token')
    try {
        const response = 
        await 
        axios.delete(`https://fakebook-backend-643.herokuapp.com/opinions/${opinionId}`, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          })
        await storageRef.child(`${response.data.imageId}`).delete()
        console.log('Mongo object and Firebase image both deleted successfully!')
        setReFetchOpinions(true)
    } catch (e) {
        console.log({e})
    }
}
 
    return (
      <div>
        <button
            onMouseOver={() => setOver(true)}
            onMouseLeave={() => setOver(false)}
            onClick={openModal}
        >
        <span style={{'fontSize': '22px'}}>
            <FontAwesomeIcon icon={faTrashAlt} style={over ? { color: "darkRed" } : {color: "gray"}} />
        </span>
        </button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <form>
            <div className="text-red-600 font-semibold text-lg mb-4">Are you sure you want to delete?</div>
            <img src={image} alt="" width="150" height="auto"/>
            <small className="text-gray-400">{description}</small>
            <div className="flex flex-row justify-end">
            <button
            onClick={closeModal}
            className="p-4 rounded border border-gray-300 mt-4">Cancel</button>
            <button
            onClick={(e) => handleTrashButton(e)}  
            className="p-4 rounded bg-red-700 text-white ml-8 mt-4">Delete</button>
            </div>
          </form>
        </Modal>
      </div>
    );

}