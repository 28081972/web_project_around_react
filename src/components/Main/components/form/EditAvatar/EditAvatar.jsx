

function EditAvatar() {

    return (

        <form className="popup__form" noValidate>
          <label>  
            <input
              className="popup__input popup__input_type_url"
              id="avatar-link"
              name="avatar"
              placeholder="Enlace a la imagen"
              required
              type="url"
            />
            <span className="popup__input-error avatar-input-error"
            id="avatar-link-error"></span>
          </label>    
            <button className="button popup__button" type="submit">Guardar</button>
          </form>

    )
}

export default EditAvatar