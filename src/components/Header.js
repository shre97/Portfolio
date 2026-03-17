import { NavLink } from "react-router-dom";

function Header() {
    return (
        <nav className="header">
            <h2><NavLink to="/home">Shreyezz</NavLink></h2>
            <ul>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/skills">Skills</NavLink>
                </li>
                <li>
                    <NavLink to="/projects">Projects</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Header;

// function Header({activeTab, setActiveTab}) {
//     return (
//         <nav className="header">
//             <h2>My Portfolio</h2>
//             <ul>
//                 <li
//                     className={activeTab === "about" ? "active" : ""}
//                     onClick={() => setActiveTab("about")}
//                 >
//                     About
//                 </li>
//                 <li
//                     className={activeTab === "skills" ? "active" : ""}
//                     onClick={() => setActiveTab("skills")}
//                 >
//                     Skills
//                 </li>
//                 <li
//                     className={activeTab === "projects" ? "active" : ""}
//                     onClick={() => setActiveTab("projects")}
//                 >
//                     Projects
//                 </li>
//                 <li
//                     className={activeTab === "contact" ? "active" : ""}
//                     onClick={() => setActiveTab("contact")}
//                 >
//                     Contact
//                 </li>
//                 {/* <li><a href ="#skills">Skills</a></li>
//                 <li><a href ="#projects">Projects</a></li>
//                 <li><a href ="#contact">Contact</a></li> */}
//                 {/* <li><a href ="#projects">Project</a></li> */}
//             </ul>
//         </nav>
//     );
// }

// export default Header;