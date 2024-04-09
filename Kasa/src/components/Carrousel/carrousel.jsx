import { useState } from "react"
import arrowRight from "../../assets/images/arrowRight.png"
import arrowLeft from "../../assets/images/arrowLeft.png"

export function Carrousel ({ photos }) {

  const photoNb = photos.length
  const [currentImageIndex, setcurrentImageIndex] = useState(0)

  const prevImage = () => {
    if (currentImageIndex > 0) { setcurrentImageIndex(currentImageIndex - 1) }
    else {setcurrentImageIndex(photoNb - 1)}
    }

  const nextImage = () => {
    if (currentImageIndex < photoNb - 1) { setcurrentImageIndex(currentImageIndex +1) }
    else {setcurrentImageIndex(0)}
    }
  
   return (
    <div className="slide">
      {photoNb > 1 && (
        <>
          <div className="slide-photo-number">
            {currentImageIndex + 1}/{photoNb}
          </div>
          <img className="slide-arrow-left" src={arrowLeft} alt="Flèche vers la gauche" onClick={prevImage}></img>
          <img className="slide-arrow-right" src={arrowRight} alt="Flèche vers la droite" onClick={nextImage}></img>
        </>
      )}
      <img className="slide-photo" src={photos[currentImageIndex]} alt="Logement"></img>
    </div>
   )
}