import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import EditProfileModal from './EditProfileModal'
import EditAvatarModal from './EditAvatarModal'
import DeleteModal from './DeleteModal'
import AddImageModal from './AddImageModal';

function App() {
  const [editProfileModalOpen, setEditProfileModalOpen] = React.useState(false);
  const [editAvatarModalOpen, setEditAvatarModalOpen] = React.useState(false);
  const [addImageModalOpen, setAddImageModalOpen] = React.useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = React.useState(false);

  function handleEditProfileClick(){
    setEditProfileModalOpen(true);
  }
  function handleEditAvatarClick(){
    setEditAvatarModalOpen(true)
  }
  function handleAddPlaceClick(){
    setAddImageModalOpen(true)
  }
  function handleDeleteClick(){
    setDeleteModalOpen(true);
  }
  function closeAllPopups(){
    setEditProfileModalOpen(false)
    setDeleteModalOpen(false)
    setAddImageModalOpen(false)
    setEditAvatarModalOpen(false)
  }
  return (
    <div className="page">
        <Header/ >
        <Main
            editProfileModalOpen={editProfileModalOpen}
            editAvatarModalOpen={editAvatarModalOpen}
            addImageModalOpen= {addImageModalOpen}
            deleteModalOpen ={deleteModalOpen}
            handleEditProfileClick = {handleEditProfileClick}
            handleEditAvatarClick = {handleEditAvatarClick}
            handleAddPlaceClick={handleAddPlaceClick}
            handleDeleteClick = {handleDeleteClick}
        />
        <EditProfileModal isOpen ={editProfileModalOpen} onClose={closeAllPopups} />
        <EditAvatarModal isOpen={editAvatarModalOpen} onClose={closeAllPopups} />
        <AddImageModal isOpen={addImageModalOpen} onClose={closeAllPopups} />
        <DeleteModal isOpen={deleteModalOpen} onClose={closeAllPopups} />

        
    </div>  
  );
}

export default App;
