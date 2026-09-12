export default function RemoveCard (props) {
console.log(props);


    return (
         <> 
          
          <button className="button popup__button" type="submit" onClick={() => {props.onCardDelete(); props.closePopup()}} >Si</button>
        </>
    )
}
