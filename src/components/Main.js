import React,{useState, useEffect} from 'react';
import jacques from "../images/jacques-cousteau.jpg";
import api from '../Utils/Api'
import Card from './Card'

function Main(props) {
  const [userName, setUserName] = useState("")
  const [userDescription,setUserDescription] = useState("")
  const [userAvatar, setUserAvatar] = useState("")
  const [cards, setCards] = useState([])
  useEffect(() => {
    api.getUserInfo()
    .then((res) => {
        setUserName(res);
        setUserDescription(res);
        setUserAvatar(res); 
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
  return (
    <main className="content">
        <section className="profile">
            <div className="profile__avatar">
                <img src={userAvatar.avatar} alt="profile picture" className="profile__photo"/>
                <button type="button" aria-label="edit-avatar" className="profile__photo_edit" onClick={props.handleEditAvatarClick}></button>
            </div>
            <div className="profile__info">
                <div className="profile__container">
                    <h1 className="profile__text_name">{userName.name}</h1>
                    <button className="profile__edit-button" onClick={props.handleEditProfileClick}></button>
                </div>
                <h2 className="profile__text_desc">{userDescription.about}</h2>
            </div>
            <button className="profile__add-button" onClick={props.handleAddPlaceClick}>
            </button>
        </section>
        <section className="elements">
            <ul className="elements__list">
            {cards.map((card) => 
                <Card key={card._id} src={card.link} title={card.name} likes={card.likes.length} owner={card.owner}
                handleDeleteClick={(card) => props.handleDeleteClick(card.link, card.name)}
                onCardClick={() => props.handleCardClick(card)}
                />
            )}
            </ul>
        </section>
    </main>
  );
}

export default Main;
 