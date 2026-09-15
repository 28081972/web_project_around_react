import {useState, useEffect, useContext} from 'react'
import avatar from '../../images/avatar.jpg'
import NewCard from './components/form/NewCard/NewCard';
import EditProfile from './components/form/EditProfile/EditProfile';
import EditAvatar from './components/form/EditAvatar/EditAvatar';
import Popup from './components/Popup/Popup';
import Card from './components/Card/Card';
import {api} from '../../utils/api';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';


function Main (props) {
    console.log(props);

    

   const {currentUser} = useContext(CurrentUserContext);
    

   
    const newCardPopup = {title: "Nuevo Lugar", children: <NewCard/>};
    const editProfilePopup = {title: "Editar Perfil", children: <EditProfile/>};
    const editAvatarPopup = {title: "Cambiar foto de perfil", children: <EditAvatar/>};
    


    return(
            <main className="content">
                <section className="profile page__section">
                    <div className="profile__avatar">
                        <img className="profile__image" src={currentUser?.avatar} alt="Avatar"/>
                        <button
                            aria-label="Editar avatar"
                            className="profile__image-edit-button"
                            type="button" 
                            onClick= {() => props.handleOpenPopup(editAvatarPopup)}>
                        </button>
                    </div>
                    <div className="profile__info">
                        <h1 className="profile__title">{currentUser?.name}</h1>
                        <button
                            aria-label="Editar perfil"
                            className="profile__edit-button"
                            type="button"
                            onClick={() => props.handleOpenPopup(editProfilePopup)}>
                        </button>
                        <p className="profile__description">{currentUser?.about}</p>
                    </div>
                    <button
                        aria-label="Agregar tarjeta"
                        className="profile__add-button"
                        type="button"
                        onClick={() => props.handleOpenPopup(newCardPopup)}>
                    </button>
                </section>
          
                <section className="cards page__section">
                    <ul className="cards__list">
                        {props.cards.map ((card) => (
                            <Card key={card._id} card={card} isLiked={card.isLiked} handleOpenPopup={props.handleOpenPopup} onCardLike={props.onCardLike} onCardDelete={props.onCardDelete} onClose={props.handleClosePopup} />
                        ))}
            
                    </ul>
                </section>

                {props.popup && (
                   
                    <Popup onClose={props.handleClosePopup} title={props.popup.title}>
                        {props.popup.children}
                    </Popup>
                    
                )}

                
               
                
            </main>
        
)}

export default Main
