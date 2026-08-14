export default function ImagePopup(props) {

const {name, link} = props.card


  return (
    
    
    <img className="card__image" src={link} alt={name}/>
    
 
    
    
  )
}

