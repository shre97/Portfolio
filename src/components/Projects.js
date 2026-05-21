import VideoCard from "./VideoCard";

function Projects() {
  const videos = [
    "ihaenKN_878",
    "k5rlPFpS6yI",
    "DKOEG_h87Yc",
    "e6pfo5k6AtM",
    "PRsp7xV_XdM",
    "aKoxmXmp5rM",
    "GZCBPSRHOwg",
    "B7s-rbg2C_8",
    "3bLzyQvFlyg",
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