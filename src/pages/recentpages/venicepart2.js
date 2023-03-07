import Navigation from "../../components/navigation"
import { useState } from 'react';
import { Venice2images } from "../../utils/data";

export default function Venice() {


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
        <p>Romolo Del Deo: The Tree Of Life Which is Ours, European Cultural Centre, Personal Structures </p>
        <p>Installation, Venice Art Biennial 22, Venice Italy</p>
        <p>April 21 - November 27, 2022</p>


        <div className="artwork-gallery">
        <div className="artgrid">
          {Venice2images.map((images) => (
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
