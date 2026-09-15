import {useContext, useRef} from 'react'
import { CurrentUserContext } from '../../../../../contexts/CurrentUserContext'

function NewCard () {
  const name = useRef();
  const link = useRef();
  const {handleAddPlaceSubmit} = useContext(CurrentUserContext);

function handleSubmit(event) {
  event.preventDefault();
  handleAddPlaceSubmit({name: name.current.value, link: link.current.value});
  console.log(handleAddPlaceSubmit);
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
              ref={name}
            />
            <span className="popup__input-error place-name-input-error"
            id="card-name-error"></span>
          </label>

          <label className="popup__field">

            <input
              className="popup__input popup__input_type_url"
              id="card-link"
              name="link"
              placeholder="Enlace a la imagen"
              required
              type="url"
              ref={link}
            />
            <span className="popup__input-error link-input-error"
            id="card-link-error"></span>
          </label>
            <button className="button popup__button" type="submit">Crear</button>
          </form>

    )
}

export default NewCard


       