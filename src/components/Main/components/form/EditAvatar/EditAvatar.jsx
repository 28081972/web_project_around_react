import {useRef, useContext, useState} from 'react'
import { CurrentUserContext } from '../../../../../contexts/CurrentUserContext';

function EditAvatar() {

  const [validation, setValidation] = useState ({avatar: false, message:" "})
  const [send, setSend] = useState(false);

  const avatar = useRef();
  const {handleUpdateAvatar} = useContext(CurrentUserContext)

  function handleAvatarChange (event) {
    setValidation({avatar:event.target.validity.valid, message: event.target.validationMessage});
  }

  function handleSubmit (event) {
  event.preventDefault();
  setSend(true);
  const answer = handleUpdateAvatar({avatar: avatar.current.value});
    answer.finally(() => {
    setSend(false);
  });
}

    return (

        <form className="popup__form" noValidate onSubmit={handleSubmit}>
          <label>  
            <input
              className="popup__input popup__input_type_url"
              id="avatar-link"
              name="avatar"
              placeholder="Enlace a la imagen"
              required
              type="url"
              onChange={handleAvatarChange}
              ref={avatar}
            />
            <span className={validation.avatar === false ? "popup__input-error avatar-input-error" : ""}
            id="avatar-link-error">{validation.message}</span>
          </label>    
            <button className="button popup__button" type="submit" disabled={(validation.avatar === false)}>{send === false ? "Guardar" : "Guardando..."}</button>
          </form>

    )
}

export default EditAvatar