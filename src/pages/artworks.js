import Navigation from "../components/navigation"
import { ArtworkData } from "../utils/data"

export default function Artworks() {
  return (
    <>
    <Navigation />
    <div className="artwork-gallery">
        <div className="artgrid">
          {ArtworkData.map((artworkdata) => (
            <div key={artworkdata.id} className="artgrid-item">
              <img src={artworkdata.src} alt={artworkdata.title} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
 