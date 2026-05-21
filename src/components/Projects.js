import { useMemo, useState } from "react";
import VideoCard from "./VideoCard";
import Cyber1 from "../images/Cyber1.jpeg";
import RaceCarBfunviel1 from "../images/Race_car_bfunviel_1.jpg";
import RaceCarUnviel1 from "../images/Race_car_unviel_1.jpg";
import Shadingass from "../images/Shadingass.jpg";
import Shadingass3 from "../images/Shadingass3.jpg";
import Shreyes from "../images/Shreyes.jpg";
import Snapshot from "../images/Snapshot.jpg";
import Snapshot1 from "../images/Snapshot1.jpg";
import Ass1 from "../images/ass1.jpg";
import Carwali from "../images/carwali.png";
import CyberDark from "../images/cyberDark.jpeg.jpg";
import Denoise from "../images/denoise.jpg";
import FurBoy from "../images/fur_boy.jpg";
import Furboy from "../images/furboy.jpg";
import Pythonass from "../images/pythonass.jpg";

const projects = [
  { id: "ihaenKN_878", title: "VFX Reel 01", tools: ["Unreal Engine"], media: "video", tags: ["animation", "modeling"] },
  { id: "k5rlPFpS6yI", title: "Realtime Scene", tools: ["Maya", "Houdini", "Substance"], media: "video", tags: ["simulation", "texturing", "animation", "modeling"] },
  { id: "DKOEG_h87Yc", title: "Motion Graphics", tools: ["Unreal Engine", "Embergen"], media: "video", tags: ["simmulation", "animation", "modelling"] },
  { id: "e6pfo5k6AtM", title: "FX Study", tools: ["Maya"], media: "video", tags: ["Animation", "modelling","Motion Graphics"] },
  { id: "PRsp7xV_XdM", title: "Cinematic Shot", tools: ["Unreal Engine","Metahuman"], media: "video", tags: ["animation", "Motion Capture","rigging"] },
  { id: "aKoxmXmp5rM", title: "3D Animation", tools: ["Unreal Engine"], media: "video", tags: ["animation", "render"] },
  { id: "GZCBPSRHOwg", title: "Compositing Breakdown", tools: ["Maya", "Substance Painter"], media: "video", tags: ["modelling", "Rigging","animation"] },
  { id: "B7s-rbg2C_8", title: "Environment Art", tools: ["Nuke", "Maya"], media: "video", tags: ["compositing", "animation"] },
  { id: "3bLzyQvFlyg", title: "Visual Experiment", tools: ["Nuke", "Maya"], media: "video", tags: ["compositing",] },
  { id: "qF7dczHS1Pk", title: "Showcase Edit", tools: ["Maya", "After Effects"], media: "video", tags: ["Animation", "simmulation"] },
  { id: "DuI4WDmCUHE", title: "Music Video 01", tools: [], media: "video", tags: ["Music Video"] },
  { id: "QqOle8AciJk", title: "Music Video 02", tools: [], media: "video", tags: ["Music Video"] },
  { id: "rEhJ-Y5LGqE", title: "Music Video 03", tools: [], media: "video", tags: ["Music Video"] },
  { id: "93qP5XAnen0", title: "Music Video 04", tools: [], media: "video", tags: ["Music Video"] },
  { id: "J8PD7tRqiwY", title: "Music Video 05", tools: [], media: "video", tags: ["Music Video"] },
  { id: "OQGZpvi4ZPs", title: "Music Video 06", tools: [], media: "video", tags: ["Music Video"] },
  { id: "kfs-xiabWxQ", title: "Music Video 07", tools: [], media: "video", tags: ["Music Video"] },
  { id: "RgOSNJgJNzQ", title: "Music Video 08", tools: [], media: "video", tags: ["Music Video"] },
  { id: "k2V2aZ9N-UU", title: "Music Video 09", tools: [], media: "video", tags: ["Music Video"] },
  { id: "Z55OvlbuiLs", title: "Music Video 10", tools: [], media: "video", tags: ["Music Video"] },
  { id: "G-9whFU5jXE", title: "Music Video 11", tools: [], media: "video", tags: ["Music Video"] },
  { id: "1JTgMcO3wmM", title: "Music Video 12", tools: [], media: "video", tags: ["Music Video"] },
  { id: "jUCyryR4srI", title: "Music Video 13", tools: [], media: "video", tags: ["Music Video"] },

  { id: Cyber1, title: "Cyber Concept", tools: ["Maya", "Photoshop"], media: "image", tags: ["concept", "render", "cyber"] },
  { id: RaceCarBfunviel1, title: "Race Car Reveal 01", tools: ["Maya", "Substance Painter"], media: "image", tags: ["vehicle", "modeling", "render"] },
  { id: RaceCarUnviel1, title: "Race Car Reveal 02", tools: ["Maya", "Substance Painter"], media: "image", tags: ["vehicle", "modeling", "render"] },
  { id: Shadingass, title: "Shading Study", tools: ["Maya"], media: "image", tags: ["shading", "lighting", "render"] },
  { id: Shadingass3, title: "Shading Study 03", tools: ["Maya"], media: "image", tags: ["shading", "lighting", "render"] },
  { id: Shreyes, title: "Character Portrait", tools: ["Maya", "ZBrush"], media: "image", tags: ["character", "portrait", "modeling"] },
  { id: Snapshot, title: "Snapshot Render", tools: ["Unreal Engine"], media: "image", tags: ["realtime", "environment", "render"] },
  { id: Snapshot1, title: "Snapshot Render 02", tools: ["Unreal Engine"], media: "image", tags: ["realtime", "environment", "render"] },
  { id: Ass1, title: "Assignment Study 01", tools: ["Maya"], media: "image", tags: ["study", "modeling", "render"] },
  { id: Carwali, title: "Car Render", tools: ["Maya", "Substance Painter"], media: "image", tags: ["vehicle", "car", "render"] },
  { id: CyberDark, title: "Cyber Dark", tools: ["Maya", "Photoshop"], media: "image", tags: ["cyber", "concept", "lighting"] },
  { id: Denoise, title: "Denoise Render", tools: ["Maya"], media: "image", tags: ["render", "lighting", "denoise"] },
  { id: FurBoy, title: "Fur Boy", tools: ["Maya", "XGen"], media: "image", tags: ["fur", "character", "grooming"] },
  { id: Furboy, title: "Fur Boy Study", tools: ["Maya", "XGen"], media: "image", tags: ["fur", "character", "grooming"] },
  { id: Pythonass, title: "Python Assignment", tools: ["Python", "Maya"], media: "image", tags: ["python", "tooling", "study"] },
];

function Projects() {
  const [query, setQuery] = useState("");

  const filteredProjects = useMemo(() => {
    const search = query.trim().toLowerCase();
    if (!search) return projects;

    return projects.filter((project) => {
      const searchableText = [
        project.title,
        project.media,
        ...project.tools,
        ...project.tags,
      ]
        .join(" ")
        .toLowerCase();

      return searchableText.includes(search);
    });
  }, [query]);

  const quickFilters = ["Unreal Engine", "Maya", "Houdini", "After Effects", "Video", "Image", "Music Video", "Embergen",
  "Metahuman",
  "Nuke",
  "Photoshop",
  "Python",
  "Substance",
  "Substance Painter",
  "XGen",
  "ZBrush",];

  return (
    <section id="projects" className="section projects-section">
      <p className="eyebrow">Featured work</p>
      <h1 className="title">Projects</h1>

      <div className="project-filter">
        <input
          type="search"
          placeholder="Search by tool, tag, or media type..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />

        <div className="filter-chips">
          {quickFilters.map((filter) => (
            <button key={filter} type="button" onClick={() => setQuery(query === filter ? "" : filter)}>
              {filter}
            </button>
          ))}
          {query && <button type="button" onClick={() => setQuery("")}>Clear</button>}
        </div>
      </div>

      <div className="video-grid">
        {filteredProjects.map((project) => (
          <VideoCard key={project.id} project={project} />
        ))}
      </div>

      {!filteredProjects.length && <p className="empty-state">No projects match that filter.</p>}
    </section>
  );
}

export default Projects;
