import Navigation from "../../components/navigation"
import { useState } from 'react';
import { Veniceimages } from "../../utils/data";

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
        <p>Romolo Del Deo: Farewell Concert for “The Tree of Life Which Is Ours,” Venice Art Biennial 22, Palazzo Mora, Venice, Italy</p>
        <p>November 27, 2022, 16:00-17:00 CET</p>


        <div className="artwork-gallery">
        <div className="artgrid">
          {Veniceimages.map((images) => (
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
