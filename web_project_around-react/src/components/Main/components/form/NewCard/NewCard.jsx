

function NewCard () {

    return (

         <form className="popup__form">
            <input
              className="popup__input popup__input_type_card-name"
              name="place-name"
              placeholder="Título"
              required
              type="text"
              minLength="2"
              maxLength="30"
            />
            <span className="popup__input-error place-name-input-error"></span>
            <input
              className="popup__input popup__input_type_url"
              name="link"
              placeholder="Enlace a la imagen"
              required
              type="url"
            />
            <span className="popup__input-error link-input-error"></span>
            <button className="button popup__button" type="submit" disabled>Crear</button>
          </form>

    )
}

export default NewCard


       