import { Children } from "react";
import ImagePopup from "../ImagePopup/ImagePopup";

export default function Card(props) {

  const {name, link, isLiked} = props.card;
  const {handleOpenPopup} = props
  const imageComponent = {name:name, link:link}
 
  
  
  return (

    <li className="card">
      <img className="card__image" src={link} alt={name} 
      onClick={() => handleOpenPopup(imageComponent)}/>
     
      <button
        aria-label="Eliminar tarjeta"
        className="card__delete-button"
        type="button"
      ></button>
      <div className="card__description">
        <h2 className="card__title">{name}</h2>
        <button
          aria-label="Botón Me gusta"
          className="card__like-button"
          type="button"
        ></button>
      </div>
    </li>
  );
}
