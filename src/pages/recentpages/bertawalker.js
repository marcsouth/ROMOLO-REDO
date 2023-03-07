import Navigation from "../../components/navigation"
import { useState } from 'react';
import { Bertaimages } from "../../utils/data";

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
        <p>Romolo Del Deo: The Constallation of Cassiopeia, Berta Walker Gallery, Provincetown, MA</p>
        <p>July 1 - July 23, 2022</p>


        <div className="artwork-gallery">
        <div className="artgrid">
          {Bertaimages.map((images) => (
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
