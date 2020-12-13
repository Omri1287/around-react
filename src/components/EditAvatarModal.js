import React,{useEffect} from 'react';
import PopupWithForm from './PopupWithForm'

function EditAvatarModal(props){
    return(
        <PopupWithForm name="edit-avatar" title="Edit Avatar" buttonText="Save" isOpen={props.isOpen} onClose={props.onClose}>
            <input id="avatar-URL" type="url" placeholder="enter avatar link here" className="modal__input modal__input_avatar-URL" name="avatarURL" required minLength="2"/>
            <span id="avatar-URL-error" className="modal__error modal__error_visible"></span>
        </PopupWithForm>
    )
}

export default EditAvatarModal