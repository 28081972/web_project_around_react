
import ImagePopup from "../ImagePopup/ImagePopup";
import RemoveCard from "../RemoveCard/RemoveCard";

export default function Card(props) {

  const {name, link, isLiked} = props.card;
  const {handleOpenPopup} = props
  const imageComponent = {name:name, link:link};
  const imagePopup = {children: <ImagePopup card={imageComponent}/>};
  const removeCard = {title: " ",children: <RemoveCard/>};
 
  
  
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
          className= {`card__like-button ${isLiked ? "card__like-button_is-active" : ""}`}
          type="button"
        ></button>
      </div>
    </li>
  );
}
