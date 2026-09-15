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
          console.log(data);         
        setCurrentUser(data);
        
        });
    }, []);

function handleUpdateUser (formdata) {
  console.log(formdata)
  api.profileUserEdit(formdata)
  .then((data) => {
    console.log(data);
    setCurrentUser(data) 
    handleClosePopup();   
  })

}    

function handleUpdateAvatar(formData) {
  console.log(formData);
  api.updateAvatar(formData)
  .then ((data) => {
    console.log(data);
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
          console.log(data);
            setCards(data);
        });
    }, []);

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

function handleAddPlaceSubmit(formData) {
  console.log(formData);
  api.addNewCard(formData)
  .then((data) => {
    console.log("A");
    console.log(data);
    console.log("B");
    console.log(cards);
    console.log("C");
    setCards([data, ...cards])
    console.log("voy a cerrar");
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
