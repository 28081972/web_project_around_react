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
  })

}    

  return (
    
    <div className="page">
       <div className="page__content">
        <CurrentUserContext.Provider value={{currentUser, handleUpdateUser}}>
        <Header/>
        <Main/>
        <Footer/>
        </CurrentUserContext.Provider>
        </div>
    </div>
        
    
  )
  
}

export default App
