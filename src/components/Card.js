import React from 'react';

function Card(props){
    function deleteCard() {
        props.handleDeleteClick(props.card)
    }
    return(
            <ul className="elements__list">
                <li className="elements__item">
                        <img className="elements__image" src={props.src} alt={props.title} />
                        <button className="elements__delete" onClick={deleteCard}></button>
                        <div id="title-container" className="elements__container">
                            <h2 className="elements__title">{props.title}</h2>
                            <div className="elements__heart-container">
                                <button className="elements__heart"></button>
                                <p className="elements__heart-count">{props.likes}</p>
                            </div>
                        </div>
                </li>
            </ul>
    )
}
export default Card