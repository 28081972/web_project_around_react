import {useState, useContext} from 'react';
import { CurrentUserContext } from '../../../../../contexts/CurrentUserContext';



function EditProfile () {

const {currentUser, handleUpdateUser} = useContext(CurrentUserContext)
const [name, setName] = useState(currentUser.name);
const [description, setDescription] =useState(currentUser.about);
const [validation, setValidation] = useState ({name: true, description: true, nameMessage:" ", descriptionMessage: " "})
const [send, setSend] = useState(false);


function handleNameChange (event) {
  setName(event.target.value)
  setValidation({...validation, name: event.target.validity.valid, nameMessage: event.target.validationMessage});
}

function handleDescriptionChange (event) {
  setDescription(event.target.value)
  setValidation({...validation, description: event.target.validity.valid, descriptionMessage: event.target.validationMessage});
}

function handleSubmit (event) {
  event.preventDefault();
  setSend(true);
  const answer = handleUpdateUser({name: name, about: description});
   answer.finally(() => {
    setSend(false);
  });
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
              onChange={handleNameChange}
              value={name}

            />
            
            <span className={validation.name === false ? "popup__input-error name-input-error" : ""} 
            id="profile-name-error">{validation.nameMessage}</span>
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
              onChange={handleDescriptionChange}
              value={description}
            />
            
            <span className={validation.description === false ? "popup__input-error description-input-error" : ""}
            id="profile-description-error">{validation.descriptionMessage}</span>
          </label>  

            <button className="button popup__button" type="submit" disabled={(validation.name === false) || (validation.description === false)} >{send === false ? "Guardar" : "Guardando..."}</button>
          </form>

    )
}

export default EditProfile