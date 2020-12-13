import React from 'react';
import PopupWithForm from './PopupWithForm'

function DeleteModal(props){
    return(
        <PopupWithForm name="delete" title="Are you sure?" buttonText="Save" isOpen={props.isOpen} onClose={props.onClose}>
            <h2 className="modal__title">Are You Sure?</h2>
            <button type="submit" aria-label="confirm-card-delete" className="modal__save">Yes</button>
\
        </PopupWithForm>        
    )

}

export default DeleteModal