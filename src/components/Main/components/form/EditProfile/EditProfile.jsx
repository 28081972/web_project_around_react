

function EditProfile () {

    return (

        <form className="popup__form" noValidate>

          <label>
            <input
              className="popup__input popup__input_type_name"
              id="profile-name"
              name="name"
              placeholder="Nombre"
              type="text"
              required
              minLength="2"
              maxLength="40"

            />
            
            <span className="popup__input-error name-input-error"
            id="profile-name-error"></span>
          </label>  

            <label>
            <input
              className="popup__input popup__input_type_description"
              id="profile-description"
              name="description"
              placeholder="Acerca de mí"
              type="text"
              required
              minLength="2"
              maxLength="200"
            />
            
            <span className="popup__input-error description-input-error"
            id="profile-description-error"></span>
          </label>  

            <button className="button popup__button" type="submit">Guardar</button>
          </form>

    )
}

export default EditProfile