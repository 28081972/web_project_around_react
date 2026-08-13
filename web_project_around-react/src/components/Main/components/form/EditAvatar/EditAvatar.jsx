

function EditAvatar() {

    return (

        <form className="popup__form">
            <input
              className="popup__input popup__input_type_url"
              name="avatar"
              placeholder="Enlace a la imagen"
              required
              type="url"
            />
            <span className="popup__input-error avatar-input-error"></span>
            <button className="button popup__button" type="submit" disabled>Guardar</button>
          </form>

    )
}

export default EditAvatar