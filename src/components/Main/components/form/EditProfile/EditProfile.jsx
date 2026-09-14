import {useState, useContext} from 'react';
import { CurrentUserContext } from '../../../../../contexts/CurrentUserContext';

function EditProfile () {

const {currentUser, handleUpdateUser} = useContext(CurrentUserContext)
console.log(currentUser, handleUpdateUser)

const [name, setName] = useState(currentUser.name);
console.log("name state", name);
const [description, setDescription] =useState(currentUser.about);
console.log("description state", description);


function handleChangeName (event) {
  setName(event.target.value)
}

function handleChangeDescription (event) {
  setDescription(event.target.value)
}

function handleSubmit (event) {
  event.preventDefault();
  handleUpdateUser({name: name, about: description})

}


    return (

        <form className="popup__form" noValidate onSubmit={handleSubmit}>

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
              onChange={handleChangeName}
              value={name}

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
              onChange={handleChangeDescription}
              value={description}
            />
            
            <span className="popup__input-error description-input-error"
            id="profile-description-error"></span>
          </label>  

            <button className="button popup__button" type="submit" >Guardar</button>
          </form>

    )
}

export default EditProfile