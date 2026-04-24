import "../styles/_gallery.scss";
import { GALLERY_IMAGES } from "./helpers/constants";
function Gallery() {
  return (
    <div className="gallery-page">
      <div className="collage-grid">
        {GALLERY_IMAGES.map((img) => (
          <div key={img.id} className={`collage-item ${img.size}`}>
            <img src={img.src} alt="Gallery Music" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;