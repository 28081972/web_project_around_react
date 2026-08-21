import { useEffect } from "react";


function Popup (props) {

    const {onClose, title, children} = props;

    function handleOverlayClick (event) {
      if (event.target === event.currentTarget) {
      onClose();
    }
  }

    function handleEscapeClick (event) {
      if (event.key === "Escape") {
        onClose();
      } 
    } 
    
    useEffect ( () => {
      document.addEventListener("keydown", handleEscapeClick);

      return () => {
        document.removeEventListener("keydown", handleEscapeClick);
      };
    }, [onClose]);  
   
 
    return (
       
      
     <div className="popup"
      onClick={handleOverlayClick}>
        <div className={`popup__content ${
          !title ? "popup__content_content_image" : ""
        }`}>
          <button
            aria-label="Cerrar ventana emergente"
            className="popup__close"
            type="button"
            onClick={onClose}
          ></button>
          {title && <h3 className="popup__title"> {title} </h3>}
          {children}
        </div>
      </div>

    )
}

export default Popup