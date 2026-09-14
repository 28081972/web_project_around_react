
import ImagePopup from "../ImagePopup/ImagePopup";
import RemoveCard from "../RemoveCard/RemoveCard";
import { useContext } from "react";
import { CurrentUserContext } from "../../../../contexts/CurrentUserContext";

export default function Card(props) {
  

  const {name, link, isLiked} = props.card;
  const {handleOpenPopup} = props;
  const {onCardLike} = props;
  const {onCardDelete} = props;
  const {onClose} = props;
  const imageComponent = {name:name, link:link};
  const imagePopup = {children: <ImagePopup card={imageComponent}/>};
  const removeCard = {title: "¿Estás seguro/a?",children: <RemoveCard onCardDelete={handleDeleteClick} closePopup={onClose}/>};
  const cardLikeButtonClassName = `card__like-button ${
  isLiked ? 'card__like-button_is-active' : ''
}`;
  const {currentUser} = useContext(CurrentUserContext);

function handleLikeClick() {
  console.log("click", props.card);
  onCardLike(props.card)
}

function handleDeleteClick() {
  onCardDelete(props.card._id)
}
  
  
  return (

    <li className="card">
      <img className="card__image" src={link} alt={name} 
      onClick={() => handleOpenPopup(imagePopup)}/>
     
      <button
        aria-label="Eliminar tarjeta"
        className="card__delete-button"
        type="button"
        onClick={() => handleOpenPopup(removeCard)}
      ></button>
      <div className="card__description">
        <h2 className="card__title">{name}</h2>
        <button
          aria-label="Botón Me gusta"
          className= {cardLikeButtonClassName}
          type="button" onClick={handleLikeClick}
        ></button>
      </div>
    </li>
  );
}
