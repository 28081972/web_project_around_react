

function NewCard () {

    return (

         <form className="popup__form" noValidate>
          
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
            />
            <span className="popup__input-error link-input-error"
            id="card-link-error"></span>
          </label>
            <button className="button popup__button" type="submit">Crear</button>
          </form>

    )
}

export default NewCard


       