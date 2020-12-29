import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import EditProfileModal from './EditProfileModal'
import EditAvatarModal from './EditAvatarModal'
import DeleteModal from './DeleteModal'
import AddImageModal from './AddImageModal';
import ImagePopup from './ImagePopup';
import {currentUserContext} from '../contexts/CurrentUserContext'
import api from '../Utils/Api'
import Card from './Card'

function App() {
  const [cards, setCards] = React.useState([])
  const [editProfileModalOpen, setEditProfileModalOpen] = React.useState(false);
  const [editAvatarModalOpen, setEditAvatarModalOpen] = React.useState(false);
  const [addImageModalOpen, setAddImageModalOpen] = React.useState(false);
  const [deleteModalOpen, setDeleteModalOpen ] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null)
  const [imageLink, setImageLink] = React.useState("")
  const [imageTitle, setImageTitle] = React.useState("")
  const [currentUser, setCurrentUser] = React.useState("")

  React.useEffect(() => {
    api.getUserInfo()
    .then((res) => {
      setCurrentUser(res)
    })
      .then(() => {
        api.getCardList()
        .then((res) => {
            setCards(
                res.map((card) => ({
                    name: card.name,     
                    link: card.link,
                    _id: card._id,
                    likes: card.likes,
                    owner: card.owner,
            })))
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
  }, [])
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
    //({link, title})
    setImageLink(link)
    setImageTitle(title)
  }
  function closeAllPopups(){
    setEditProfileModalOpen(false)
    setDeleteModalOpen(false)
    setAddImageModalOpen(false)
    setEditAvatarModalOpen(false)
    setSelectedCard(null)
  }
  return (
    <currentUserContext.Provider value={currentUser}>
      <div className="page">
          <Header />
          <Main
              editProfileModalOpen={editProfileModalOpen}
              editAvatarModalOpen={editAvatarModalOpen}
              addImageModalOpen= {addImageModalOpen}
              deleteModalOpen ={deleteModalOpen}
              selectedCard = {selectedCard}
              handleEditProfileClick = {handleEditProfileClick}
              handleEditAvatarClick = {handleEditAvatarClick}
              handleAddPlaceClick={handleAddPlaceClick}
              onDeleteClick = {(card) => {
                handleDeleteClick(card);
              }}
              OnCardClick = {(data) => {
                handleCardClick(data)}}
          />
          <Footer />
          <EditProfileModal isOpen ={editProfileModalOpen} onClose={closeAllPopups} />
          <EditAvatarModal isOpen={editAvatarModalOpen} onClose={closeAllPopups} />
          <AddImageModal isOpen={addImageModalOpen} onClose={closeAllPopups} />
          <DeleteModal isOpen={deleteModalOpen} onClose={closeAllPopups} />
          <ImagePopup isOpen={selectedCard} onClose={closeAllPopups} link={imageLink} title={imageTitle} />
      </div>  
    </currentUserContext.Provider>
  );
}

export default App;
