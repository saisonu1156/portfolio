import '../components/navbar.css'
import { FaHtml5 } from "react-icons/fa6";
import { MdCss } from "react-icons/md";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiReactjsLine } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";
export const Skills = () => {
    return (
      <>
        <div className="skills" style={{ color: "aliceblue", backgroundColor: "black"}} id="skills">
          <h2 className="skills-title">Skills</h2> {/* Added className for styling */}
          <p className="skill-content">The skills, tools, and technologies I am really good at:</p>
  
          {/* Web Development Section */}
          <div className="webTools">
            <h2 style={{ padding: "3%" }}>Web Development</h2>
            <ul>
              <li>
                <FaHtml5 size={40} color="orange" />
              </li>
              <li>
                <MdCss size={40} color=" skyblue"/>
              </li>
              <li>
                <RiTailwindCssFill size={40} color="skyblue"/>
              </li>
              <li>
                <RiReactjsLine size={30} color="#f803fc"/>
              </li>
            </ul>
          </div>
  
          {/* Programming Languages Section */}
          <div className="programming">
            <h2 style={{ padding: "3%" }}>Programming Languages</h2>
            <ul>
              <li>
              <IoLogoJavascript size={40} color="yellow"/>
              </li>
              <li>
              <FaPython size={40} color="#1E90FF"/>
              </li>
              <li>
              <FaJava size={40} color="white"/>
              </li>
            </ul>
          </div>
  
          {/* Database Section */}
          <div className="dataBase">
            <h2 style={{ padding: "3%" }}>Database</h2>
            <ul>
              <li>
              <SiMysql size={40} color="#483D8B"/>

              </li>
              <li>
              <SiMongodb size={40} color="green"/>
              </li>
            </ul>
          </div>
  
          {/* Dev Tools Section */}
          <div className="DevTools">
            <h2 style={{ padding: "3%", textAlign: "center" }}>Dev Tools</h2>
            <ul>
              <li>
              <VscVscode size={40} color="#6495ED"/>

              </li>
              <li>
              <FaGithub size={40} color="white"/>

              </li>
            </ul>
          </div>
        </div>
      </>
    );
  };
  