import {useRef, useContext} from 'react'
import { CurrentUserContext } from '../../../../../contexts/CurrentUserContext';

function EditAvatar() {

  const avatar = useRef();
  const {handleUpdateAvatar} = useContext(CurrentUserContext)

  function handleSubmit (event) {
  event.preventDefault();
  handleUpdateAvatar({avatar: avatar.current.value})

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
              ref={avatar}
            />
            <span className="popup__input-error avatar-input-error"
            id="avatar-link-error"></span>
          </label>    
            <button className="button popup__button" type="submit">Guardar</button>
          </form>

    )
}

export default EditAvatar