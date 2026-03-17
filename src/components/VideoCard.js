import { useState } from "react";

function VideoCard({ id }) {
  const [hovered, setHovered] = useState(false);
  const [play, setPlay] = useState(false);

  return (
    <div
      className="video-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setPlay(true)}
    >
      {play ? (
        <iframe
          src={`https://www.youtube.com/embed/${id}?autoplay=1`}
          title="video"
          allow="autoplay"
          allowFullScreen
        />
      ) : hovered ? (
        <iframe
          src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0`}
          title="preview"
          allow="autoplay"
        />
      ) : (
        <img
          src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
          alt="thumbnail"
        />
      )}
    </div>
  );
}

export default VideoCard;