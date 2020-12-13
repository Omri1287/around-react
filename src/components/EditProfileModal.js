import React from 'react';
import PopupWithForm from './PopupWithForm'

function EditProfileModal(props){
    return(
        <PopupWithForm name="edit-profile" title="Edit Profile" buttonText="Save" isOpen={props.isOpen} onClose={props.onClose}>
            <h2 className="modal__title modal__title_type_edit-profile">Edit profile</h2>
            <input id="profile-name" type="text" placeholder="title" className="modal__input modal__input_name" name="title" required maxLength="40" minLength="2" />
            <span id="profile-name-error" className="modal__error"></span>
            <input id="profile-desc" type="text" placeholder="description" className="modal__input modal__input_desc" name="desc" required maxLength="200" minLength="2" /> 
            <span id="profile-desc-error" className="modal__error"></span>
        </PopupWithForm>        
    )

}

export default EditProfileModal