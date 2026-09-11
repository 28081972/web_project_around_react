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
console.log(currentUser);
  return (
    
    <div className="page">
       <div className="page__content">
        <CurrentUserContext.Provider value={currentUser}>
        <Header/>
        <Main/>
        <Footer/>
        </CurrentUserContext.Provider>
        </div>
    </div>
        
    
  )
  
}

export default App
