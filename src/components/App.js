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

  function handleCardClick(link, title) {
    //({link, title})
    setImageLink(link)
    setImageTitle(title)
  }
  function handleDeleteClick(card){
    console.log(card)
    api.removeCard(card._id)
    .then(() => {
      console.log(card._id)
      const cardList = cards.filter((c) => (c._id !== card._id))
      setCards(cardList);
    })
    .catch((err) => console.log(err));
  }
  function handleCardLike(card) {
    // Check one more time if this card was already liked
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    let tempRes
    if(isLiked === false){
      tempRes =api.addLike(card._id)
    }
    else{
      tempRes = api.deleteLike(card._id)
    }
    tempRes
    .then((newCard) => {
      const newCards = cards.map((c) => c._id === card._id ? newCard : c);
      // Update the state
      setCards(newCards);
    })
    .catch((err) => console.log(err));
  } 

  function handleUpdateUser({name, about}){
    api.setUserInfo({name, about})
    .then((res) =>{
      console.log(res)
      setCurrentUser(res)
    })
    .then(() => {
      setEditProfileModalOpen(false)
    })
    .catch((err) => console.log(err));
  }
  function  handleUpdateAvatar(avatar) {
    api.setUserAvatar({avatar})
    .then((res) =>{
      setCurrentUser(res)
    })
    .then(() => {
      setEditAvatarModalOpen(false)
    })
    .catch((err) => console.log(err));
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
              cards={cards}
              editProfileModalOpen={editProfileModalOpen}
              editAvatarModalOpen={editAvatarModalOpen}
              addImageModalOpen= {addImageModalOpen}
              deleteModalOpen ={deleteModalOpen}
              selectedCard = {selectedCard}
              handleEditProfileClick = {handleEditProfileClick}
              handleEditAvatarClick = {handleEditAvatarClick}
              handleAddPlaceClick={handleAddPlaceClick}
              onDeleteClick = {(card) => {
                handleDeleteClick(card)}}
              OnCardClick = {(data) => {
                handleCardClick(data)}}
              onCardLike = {(card) => {
                handleCardLike(card)
              }}
          />
          <Footer />
          <EditProfileModal isOpen ={editProfileModalOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>
          <EditAvatarModal isOpen={editAvatarModalOpen} onClose={closeAllPopups} onUpdateAvatar = {handleUpdateAvatar}
 />
          <AddImageModal isOpen={addImageModalOpen} onClose={closeAllPopups} />
          <DeleteModal isOpen={deleteModalOpen} onClose={closeAllPopups} />
          <ImagePopup isOpen={selectedCard} onClose={closeAllPopups} link={imageLink} title={imageTitle} />
      </div>  
    </currentUserContext.Provider>
  );
}

export default App;
