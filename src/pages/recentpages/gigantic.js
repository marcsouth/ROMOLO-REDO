import Navigation from "../../components/navigation"
import { useState } from 'react';
import { Giganticimages } from "../../utils/data";

export default function Gigantic() {


  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  function openWindow(artworkdata) {
    setSelectedImage(artworkdata);
    setOpenModal(true);
  }

  function closeWindow() {
    setSelectedImage(null);
    setOpenModal(false);
  }

  let modalOpen = openModal ? 'openmodal' : null;
  
  return (
   <>
    <Navigation />

    <div className="recentlinkcontainer">
        <p>Romolo Del Deo: A Touch of Time, Gigantic NY, Tribeca, NY</p>
        <p>October 13 - November 12, 2022</p>


        <div className="artwork-gallery">
        <div className="artgrid">
          {Giganticimages.map((images) => (
            <div key={images.id} className="artgrid-item">
              <img src={images.src} alt={images.title} onClick={() => openWindow(images)}/>
            </div>
          ))}
        </div>
      </div>


      <div className={`modal ${modalOpen}`} onClick={closeWindow}>
        <div className="modalcontainer">
          {selectedImage && (
            <>
              <img src={selectedImage.src} alt={selectedImage.title} />
            </>
          )}
        </div>
      </div>



    </div>

    
   </>
  )
}
