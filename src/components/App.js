import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import EditProfileModal from './EditProfileModal'
import EditAvatarModal from './EditAvatarModal'
import DeleteModal from './DeleteModal'
import AddImageModal from './AddImageModal';
import ImagePopup from './ImagePopup';

function App() {
  const [editProfileModalOpen, setEditProfileModalOpen] = React.useState(false);
  const [editAvatarModalOpen, setEditAvatarModalOpen] = React.useState(false);
  const [addImageModalOpen, setAddImageModalOpen] = React.useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false)
  const [imageLink, setImageLink] = React.useState("")
  const [imageTitle, setImageTitle] = React.useState("")


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
  function handleCardClick(link, title) {
    setSelectedCard(true)
    setImageLink(link)
    setImageTitle(title)
  }
  function closeAllPopups(){
    setEditProfileModalOpen(false)
    setDeleteModalOpen(false)
    setAddImageModalOpen(false)
    setEditAvatarModalOpen(false)
    setSelectedCard(false)
  }
  return (
    <div className="page">
        <Header/ >
        <Main
            editProfileModalOpen={editProfileModalOpen}
            editAvatarModalOpen={editAvatarModalOpen}
            addImageModalOpen= {addImageModalOpen}
            deleteModalOpen ={deleteModalOpen}
            selectedCard = {selectedCard}
            handleEditProfileClick = {handleEditProfileClick}
            handleEditAvatarClick = {handleEditAvatarClick}
            handleAddPlaceClick={handleAddPlaceClick}
            handleDeleteClick = {() => {
              handleDeleteClick();
            }}
            handleCardClick ={handleCardClick}
        />
        <Footer />
        <EditProfileModal isOpen ={editProfileModalOpen} onClose={closeAllPopups} />
        <EditAvatarModal isOpen={editAvatarModalOpen} onClose={closeAllPopups} />
        <AddImageModal isOpen={addImageModalOpen} onClose={closeAllPopups} />
        <DeleteModal isOpen={deleteModalOpen} onClose={closeAllPopups} />
        <ImagePopup isOpen={selectedCard} onClose={closeAllPopups} link={imageLink} title={imageTitle} />
    </div>  
  );
}

export default App;
