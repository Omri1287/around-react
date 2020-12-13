import React from 'react';
import PopupWithForm from './PopupWithForm'

function DeleteModal(props){
    return(
        <PopupWithForm name="delete" buttonText="Yes" isOpen={props.isOpen} onClose={props.onClose}>
            <h2 className="modal__title">Are You Sure?</h2>
        </PopupWithForm>        
    )

}

export default DeleteModal