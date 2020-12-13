import React from 'react';
import PopupWithForm from './PopupWithForm'

function AddImageModal(props){
    return(
        <PopupWithForm name="add-image" title="New Place" buttonText="Save" isOpen={props.isOpen} onClose={props.onClose}>
            <h2 className="modal__title modal__title_type_add-image">New Place</h2>
            <input id="card-name" type="text" placeholder="Name" className="modal__input modal__input_image-name"  name="name" required maxLength="30" minLength="2" />
            <span id="card-name-error" className="modal__error"></span>
            <input id="card-link" type="url" placeholder="image-link" className="modal__input modal__input_url" name="link" required /> 
            <span id="card-link-error"className="modal__error"></span>
        </PopupWithForm>
    )
}
export default AddImageModal