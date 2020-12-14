import React from 'react';

function Card(props){
 
    function deleteCard() {
        props.handleDeleteClick(props.card)
    }
    return(
                <li className="elements__item">
                        <img className="elements__image" src={props.src} alt={props.title} onClick={() => {
    props.handleCardClick(props.src, props.title)}}/>
                        <button className="elements__item_delete elements__item_delete_show" onClick={props.handleDeleteClick}></button>
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