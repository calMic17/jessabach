import "../styles/_gallery.scss";
import { GALLERY_IMAGES } from "./helpers/constants";
import VideoPlayer from "../components/gallery/VideoPlayer"; 

function Gallery() {
  return (
    <div className="gallery-page">
      <div className="collage-grid">
        {GALLERY_IMAGES.map((item) => (
          <div key={item.id} className={`collage-item ${item.size}`}>
            {item.type === "video" && item.videoId ? (
              /* Render the video player if type is video */
              <VideoPlayer videoId={item.videoId} />
            ) : (
              /* Otherwise, render the standard image */
              <img 
                src={item.src} 
                alt="Gallery Music" 
                loading="lazy" 
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;