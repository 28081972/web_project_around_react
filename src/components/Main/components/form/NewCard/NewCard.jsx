import {useContext, useRef, useState} from 'react'
import { CurrentUserContext } from '../../../../../contexts/CurrentUserContext'

function NewCard () {
  const name = useRef();
  const link = useRef();
  const {handleAddPlaceSubmit} = useContext(CurrentUserContext);

  const [validation, setValidation] = useState({name: false, link: false, nameMessage: " ", linkMessage: " "});
  const [send, setSend] = useState(false)

function handleNameChange (event) {
  setValidation({...validation, name: event.target.validity.valid, nameMessage: event.target.validationMessage});
}  

function handleLinkChange (event) {
  setValidation({...validation, link: event.target.validity.valid, linkMessage: event.target.validationMessage});
}

function handleSubmit(event) {
  event.preventDefault();
  setSend(true)
  const answer = handleAddPlaceSubmit({name: name.current.value, link: link.current.value});
  answer.finally(() => {
    setSend(false);
  });
}

    return (

         <form className="popup__form" noValidate onSubmit={handleSubmit}>
          
          <label className="popup__field">
             <input
              className="popup__input popup__input_type_card-name"
              id="card-name"
              name="name"
              placeholder="Título"
              required
              type="text"
              minLength="2"
              maxLength="30"
              onChange={handleNameChange}
              ref={name}
            />
            <span className={validation.name === false ? "popup__input-error place-name-input-error" : " "}
            id="card-name-error">{validation.nameMessage}</span>
          </label>

          <label className="popup__field">

            <input
              className="popup__input popup__input_type_url"
              id="card-link"
              name="link"
              placeholder="Enlace a la imagen"
              required
              type="url"
              onChange={handleLinkChange}
              ref={link}
            />
            <span className={validation.link === false ? "popup__input-error link-input-error" : ""}
            id="card-link-error">{validation.linkMessage}</span>
          </label>
            <button className="button popup__button" type="submit" disabled={(validation.name === false) || (validation.link === false)}>{send === false ? "Crear" : "Creando..."}</button>
          </form>

    )
}

export default NewCard


       