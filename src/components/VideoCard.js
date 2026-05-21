import { useState } from "react";

function VideoCard({ project }) {
  const [hovered, setHovered] = useState(false);
  const [play, setPlay] = useState(false);
  const { id, title, tools, media } = project;

  return (
    <article
      className="video-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setPlay(true)}
    >
      <div className="video-frame">
        {project.media === "video" ? (
          play ? (
            <iframe
              src={`https://www.youtube.com/embed/${id}?autoplay=1`}
              title={title}
              allow="autoplay"
              allowFullScreen
            />
          ) : hovered ? (
            <iframe
              src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0`}
              title={`${title} preview`}
              allow="autoplay"
            />
          ) : (
            <img src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`} alt={title} />
          )
        ) : (
          <img
            src={project.id}
            alt={project.title}
            loading="lazy"
         />
        )}
      </div>

      <div className="project-meta">
        <span>{media}</span>
        <h3>{title}</h3>
        <p>{tools.join(" • ")}</p>
      </div>
    </article>
  );
}

export default VideoCard;
