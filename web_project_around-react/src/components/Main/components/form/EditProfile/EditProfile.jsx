

function EditProfile () {

    return (

        <form className="popup__form">
            <input
              className="popup__input popup__input_type_name"
              name="name"
              placeholder="Nombre"
              type="text"
              required
              minLength="2"
              maxLength="40"

            />
            <span className="popup__input-error name-input-error"></span>
            <input
              className="popup__input popup__input_type_description"
              name="description"
              placeholder="Acerca de mí"
              type="text"
              required
              minLength="2"
              maxLength="200"
            />
            <span className="popup__input-error description-input-error"></span>

            <button className="button popup__button" type="submit" disabled>Guardar</button>
          </form>

    )
}

export default EditProfile