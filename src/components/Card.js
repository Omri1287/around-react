import React from 'react';

function Card(props){
    function handleClick() {
        props.onCardClick(props.card);
      }
 
    function deleteCard() {
        props.handleDeleteClick(props.card)
    }
    return(
                <li className="elements__item">
                        <button className="elements__delete elements__delete_show" onClick={props.handleDeleteClick}></button>
                        <div className="elements__image" style={{backgroundImage: `url(${props.src})`}} alt={props.title} onClick={handleClick}>
                        </div>
                        <div id="title-container" className="elements__container">
                            <h2 className="elements__title">{props.title}</h2>
                            <div className="elements__heart-container">
                                <button className="elements__heart"></button>
                                <p className="elements__heart-count">{props.likes}</p>
                            </div>
                        </div>
                </li>
    )
}
export default Card