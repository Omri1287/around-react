import React,{useState, useEffect, createContext} from 'react';
import jacques from "../images/jacques-cousteau.jpg";
import api from '../Utils/Api'
import Card from './Card'
import { currentUserContext } from '../contexts/CurrentUserContext'


function Main(props) {
//   const [userName, setUserName] = React.useState("")
//   const [userDescription,setUserDescription] = React.useState("")
//   const [userAvatar, setUserAvatar] = React.useState("")
  const currentUser = React.useContext(currentUserContext);
  const [cards, setCards] = React.useState([])

//   useEffect(() => {
//     api.getUserInfo()
//     .then((res) => {
//         setUserName(res);
//         setUserDescription(res);
//         setUserAvatar(res); 
//         setCurrentUser(res)
//     })
//     .then(() => {
//         api.getCardList()
//         .then((res) => {
//             setCards(
//                 res.map((card) => ({
//                     name: card.name,     
//                     link: card.link,
//                     _id: card._id,
//                     likes: card.likes,
//                     owner: card.owner,
//             })))
//         })
//         .catch((err) => console.log(err));
//     })
//     .catch((err) => console.log(err));
//   }, [])
  function handleCardLike(card) {
    // Check one more time if this card was already liked
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    // Send a request to the API and getting the updated card data
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
        // Create a new array based on the existing one and putting a new card into it
      const newCards = cards.map((c) => c._id === card._id ? newCard : c);
      // Update the state
      setCards(newCards);
    });
  } 
    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar">
                    <img src={currentUser.avatar} alt="profile picture" className="profile__photo"/>
                    <button type="button" aria-label="edit-avatar" className="profile__photo_edit" onClick={props.handleEditAvatarClick}></button>
                </div>
                <div className="profile__info">
                    <div className="profile__container">
                        <h1 className="profile__text_name">{currentUser.name}</h1>
                        <button className="profile__edit-button" onClick={props.handleEditProfileClick}></button>
                    </div>
                    <h2 className="profile__text_desc">{currentUser.about}</h2>
                </div>
                <button className="profile__add-button" onClick={props.handleAddPlaceClick}>
                </button>
            </section>
            <section className="elements">
                <ul className="elements__list">
                {cards.map((card) => 
                    <Card key={card._id} src={card.link} title={card.name} likes={card.likes.length} owner={card.owner}
                    //handleDeleteClick={() => props.handleDeleteClick()}
                    handleCardClick={props.handleCardClick}
                    onDeleteClick={(card) => props.handleDeleteClick(card)}
                    onLikeClick={(card) => props.handleCardLike(card)}
                    /> 
                )}
                </ul>
            </section>
        </main>
    );
}

export default Main;
 