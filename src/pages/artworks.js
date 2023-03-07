import Navigation from "../components/navigation"
import { ArtworkData } from "../utils/data"
import { useState } from 'react';

export default function Artworks() {



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
    <div className="artwork-gallery">
        <div className="artgrid">
          {ArtworkData.map((artworkdata) => (
            <div key={artworkdata.id} className="artgrid-item">
              <img src={artworkdata.src} alt={artworkdata.title} onClick={() => openWindow(artworkdata)}/>
            </div>
          ))}
        </div>
      </div>


      <div className={`modal ${modalOpen}`} onClick={closeWindow}>
        <div className="modalcontainer">
          {selectedImage && (
            <>
              <img src={selectedImage.src} alt={selectedImage.title} />
              <div className="modaltitle">{selectedImage.title}</div>
            </>
          )}
        </div>
      </div>


    </>
  );
}
 