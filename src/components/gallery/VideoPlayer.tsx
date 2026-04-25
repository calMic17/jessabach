// src/components/gallery/videoPlayer.tsx

interface VideoPlayerProps {
  videoId: string;
  title?: string;
}

const VideoPlayer = ({ videoId, title = "YouTube video player" }: VideoPlayerProps) => {
  return (
    <div className="video-container" style={{ width: '100%', height: '100%' }}>
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&autoplay=0&mute=0&showinfo=0`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        style={{ border: 'none', borderRadius: '8px' }} // Optional: adds a nice curve
      ></iframe>
    </div>
  );
};

export default VideoPlayer;