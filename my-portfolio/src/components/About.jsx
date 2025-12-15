import React from "react";
import "../styles/about.css";
import avatar from "../assets/une.png";
import { 
  FaJava, 
  FaReact, 
  FaHtml5, 
  FaPython, 
  FaGitAlt, 
  FaWordpress 
} from "react-icons/fa";
import { 
  SiJavascript, 
  SiMysql, 
  SiKotlin,
  SiJira,
  SiTrello,
  SiElementor
} from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";

const About = () => {
  return (
    <section className="about-section" aria-labelledby="about-heading">
      <div className="about-inner">
        {/* Main profile */}
        <div className="profile-card">
          <div className="profile-avatar">
            <img src={avatar} alt="Erona Gojnovci" />
          </div>

          <div className="profile-info">
            <h2 id="about-heading">HI,I AM ERONË GOJNOVCI</h2>
            <p className="subtitle">COMPUTER SCIENCE GRADUATE</p>
          </div>
        </div>

        <div className="experience-block" id="experience">
          <div className="experience-head">
            <h3>Experience</h3>
          </div>
          <ul className="experience-list">
            <li className="experience-item">
              <div className="exp-left">
                <div className="exp-logo exp-blue">SD</div>
                <div>
                  <div className="exp-role">WordPress Developer - SoftDome</div>
                  <div className="exp-company">Internship</div>
                </div>
              </div>
              <span className="exp-date">October 2025 - December 2025</span>
            </li>

            <li className="experience-item">
              <div className="exp-left">
                <div className="exp-logo exp-green">D</div>
                <div>
                  <div className="exp-role">AI Research&Agent Developer - Dunyagoz Ballakans
</div>
                  <div className="exp-company">Internship</div>
                </div>
              </div>
              <span className="exp-date">August 2025 September 2025</span>
            </li>
          </ul>
        </div>

        <div className="experience-block" id="certifications">
          <div className="experience-head">
            <h3>Certifications</h3>
          </div>
          <ul className="experience-list">
            <li className="experience-item">
              <div className="exp-left">
                <div className="exp-logo exp-accent">R</div>
                <div>
                  <div className="exp-role">ReactJS Development</div>
                  <div className="exp-company"></div>
                </div>
              </div>
              <span className="exp-date">BIT Academy</span>
            </li>

            <li className="experience-item">
              <div className="exp-left">
                <div className="exp-logo exp-pink">M </div>
                <div>
                  <div className="exp-role">Intro to Machine Learning</div>
                  <div className="exp-company"></div>
                </div>
              </div>
              <span className="exp-date">Kaggle</span>
            </li>

 <li className="experience-item">
              <div className="exp-left">
                <div className="exp-logo exp-pink">W</div>
                <div>
                  <div className="exp-role">Responsive Web Design</div>
                  <div className="exp-company"></div>
                </div>
              </div>
              <span className="exp-date">freecodecamp</span>
            </li>

            <li className="experience-item">
              <div className="exp-left">
                <div className="exp-logo exp-teal">P</div>
                <div>
                  <div className="exp-role">Python Coder</div>
                  <div className="exp-company"></div>
                </div>
              </div>
              <span className="exp-date">Kaggle</span>
            </li>
          </ul>
        </div>

        {/* Skills sidebar */}
        <div className="about-grid">
          <aside className="about-side">
            <h3>Skills</h3>

            <div className="skills-grid">
              <span className="skill-chip"><FaJava /> Java</span>
              <span className="skill-chip"><SiJavascript /> JavaScript</span>
              <span className="skill-chip"><FaReact /> ReactJS</span>
              <span className="skill-chip"><FaHtml5 /> HTML / CSS</span>
              <span className="skill-chip"><SiMysql /> SQL / MySQL</span>
              <span className="skill-chip"><FaPython /> Python</span>
              <span className="skill-chip"><SiKotlin /> Kotlin</span>
              <span className="skill-chip"><FaGitAlt /> Git</span>
              <span className="skill-chip"><FaWordpress /> WordPress</span>
              <span className="skill-chip"><SiJira /> Jira</span>
              <span className="skill-chip"><SiTrello /> Trello</span>
              <span className="skill-chip"><SiElementor /> Elementor</span>
            </div>
          </aside>
        </div>

      </div>
    </section>
  );
};

export default About;
