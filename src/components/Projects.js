import VideoCard from "./VideoCard";

function Projects() {
  const videos = [
    "ihaenKN_878",
    "DKOEG_h87Yc",
    "PRsp7xV_XdM",
    "k5rlPFpS6yI",
    "e6pfo5k6AtM",
    "qF7dczHS1Pk",
  ];

  return (
    <section id="projects" className="section">
      <h1 className="title">Projects</h1>

      <div className="video-grid">
        {videos.map((id, index) => (
          <VideoCard key={index} id={id} />
        ))}
      </div>
    </section>
  );
}

export default Projects;