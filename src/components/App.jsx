import {useState, useEffect} from 'react'
import {api} from '../utils/api'
import {CurrentUserContext} from '../contexts/CurrentUserContext'
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'


function App() {

  const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
      api.getUserInfo()
        .then((data) => {    
        setCurrentUser(data);
        });
    }, []);

function handleUpdateUser (formdata) {
  return api.profileUserEdit(formdata)
    .then((data) => {
    setCurrentUser(data) 
    handleClosePopup();   
  })
}    

function handleUpdateAvatar(formData) {
  return api.updateAvatar(formData)
  .then ((data) => {
    setCurrentUser(data);
    handleClosePopup();
  });
}

const [popup, setPopup]  = useState(null);

function handleOpenPopup(popup) {
  setPopup(popup);
}    

function handleClosePopup() {
  setPopup(null);
}

const [cards, setCards] = useState([]);

    useEffect(() => {
        api.getInitialCards()
        .then((data) => {
          setCards(data);
        });
    }, []);

function handleCardLike(card) {
        
  const isLiked = card.isLiked; 
      api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((currentCard) => currentCard._id === card._id ? newCard : currentCard));
        })
    }
    
function handleCardDelete (cardId) { 
        api.removeCard(cardId)
        .then((data) => {setCards((data) => {
            const newListCards = data.filter((card)=>
                { return card._id!==cardId })
            return newListCards })
    })
    }

function handleAddPlaceSubmit(formData) {
  return api.addNewCard(formData)
  .then((data) => {
    setCards([data, ...cards])
    handleClosePopup();
  });
}

  return (
    
    <div className="page">
       <div className="page__content">
        <CurrentUserContext.Provider value={{currentUser, handleUpdateUser, handleUpdateAvatar, handleAddPlaceSubmit}}>
        <Header />
        <Main popup={popup} handleOpenPopup= {handleOpenPopup} handleClosePopup={handleClosePopup}
        cards={cards} onCardLike={handleCardLike} onCardDelete={handleCardDelete}/>
        <Footer/>
        </CurrentUserContext.Provider>
        </div>
    </div>
        
    
  )
  
}

export default App
