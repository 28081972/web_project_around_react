import {useState, useEffect, useContext} from 'react'
import avatar from '../../images/avatar.jpg'
import NewCard from './components/form/NewCard/NewCard';
import EditProfile from './components/form/EditProfile/EditProfile';
import EditAvatar from './components/form/EditAvatar/EditAvatar';
import Popup from './components/Popup/Popup';
import Card from './components/Card/Card';
import {api} from '../../utils/api';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';


function Main () {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        api.getInitialCards()
        .then((data) => {
            setCards(data);
        });
    }, []);

   const {currentUser} = useContext(CurrentUserContext);
    

    const [popup, setPopup]  = useState(null);

    const newCardPopup = {title: "Nuevo Lugar", children: <NewCard/>};
    const editProfilePopup = {title: "Editar Perfil", children: <EditProfile/>};
    const editAvatarPopup = {title: "Cambiar foto de perfil", children: <EditAvatar/>};
    
function handleOpenPopup(popup) {
    setPopup(popup);
}    

function handleClosePopup() {
    setPopup(null);
}

async function handleCardLike(card) {
    
    const isLiked = card.isLiked;
    
   
    await api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
        setCards((state) => state.map((currentCard) => currentCard._id === card._id ? newCard : currentCard));
    }).catch((error) => console.error(error));
}

function handleCardDelete (cardId) { 
    api.removeCard(cardId)
    .then((data) => {setCards((data) => {
        const newListCards = data.filter((card)=>
            { return card._id!==cardId })
        return newListCards })
})
}
    return(
            <main className="content">
                <section className="profile page__section">
                    <div className="profile__avatar">
                        <img className="profile__image" src={currentUser?.avatar} alt="Avatar"/>
                        <button
                            aria-label="Editar avatar"
                            className="profile__image-edit-button"
                            type="button" 
                            onClick= {() => handleOpenPopup(editAvatarPopup)}>
                        </button>
                    </div>
                    <div className="profile__info">
                        <h1 className="profile__title">{currentUser?.name}</h1>
                        <button
                            aria-label="Editar perfil"
                            className="profile__edit-button"
                            type="button"
                            onClick={() => handleOpenPopup(editProfilePopup)}>
                        </button>
                        <p className="profile__description">{currentUser?.about}</p>
                    </div>
                    <button
                        aria-label="Agregar tarjeta"
                        className="profile__add-button"
                        type="button"
                        onClick={() => handleOpenPopup(newCardPopup)}>
                    </button>
                </section>
          
                <section className="cards page__section">
                    <ul className="cards__list">
                        {cards.map ((card) => (
                            <Card key={card._id} card={card} isLiked={card.isLiked} handleOpenPopup={handleOpenPopup} onCardLike={handleCardLike} onCardDelete={handleCardDelete} onClose={handleClosePopup} />
                        ))}
            
                    </ul>
                </section>

                {popup && (
                   
                    <Popup onClose={handleClosePopup} title={popup.title}>
                        {popup.children}
                    </Popup>
                    
                )}

                
               
                
            </main>
        
    )
}

export default Main
