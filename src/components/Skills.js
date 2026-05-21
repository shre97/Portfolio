const skillGroups = [
  {
    title: "3D / Real-Time",
    skills: ["Unreal Engine", "Maya", "Houdini", "Z Brush", "MetaHuman"],
  },
  {
    title: "VFX / Compositing",
    skills: ["Nuke", "After Effects", "Mocha", "Embergen", "Gaea", "Arnold"],
  },
  {
    title: "Texturing / Design",
    skills: ["Substance Painter", "Photoshop", "Illustrator", "Lightroom", "Lunacy"],
  },
  {
    title: "Editing / Color",
    skills: ["Premier Pro", "DaVinci Resolve"],
  },
];

function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <p className="eyebrow">Creative toolkit</p>

      <h1 className="title">Skills</h1>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-card" key={group.title}>
            <h3>{group.title}</h3>

            <div className="skill-tags">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

// function Skills() {
//     return (
//         <section id="skills" className="section">
//             <h1 className="title">
//                 Skills
//             </h1>
//             <div className="skills-container">
//                 <div className="skill-category">
//                     <h3 className="highlight">
//                         Technical Expertise
//                     </h3>
//                     <ul>
//                         <li>3D & Simulation</li>
//                         <li>3D Animation & Rendering</li>
//                         <li>Real-Time & Game Engines</li>
//                         <li>2D & Design</li>
//                     </ul>
//                 </div>

//                 <div className="skill-category">
//                     <h3 className="highlight">
//                         Tools & Software
//                     </h3>
//                     <ul>
//                         <li>Maya</li>
//                         <li>Unreal Engine/C++</li>
//                         <li>Houdini</li>
//                         <li>Photoshop</li>
//                     </ul>
//                 </div>
//             </div>            
//         </section>
//     );
// }

// export default Skills;