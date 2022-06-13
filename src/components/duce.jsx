import React, { useContext } from "react";
import { ThemeContext } from "contexts/theme";
import get from "loadsh/get";
import * as style from "assets/styles/components/duce.module.scss";

const Duce = ({ data }) => {
  const skills = get(data, 'site.siteMetadata.skills', false);
  const projects = get(data, 'site.siteMetadata.projects', false);
  const educations = get(data, 'site.siteMetadata.educations', false);
  // dark mode
  const { theme } = useContext(ThemeContext);
  return (
    <div className={!theme ? style.duce : style.duceDark}>
      { skills &&
        <div className={style.skill}>
          <h1>Skills</h1>
          <ul>
            {skills.map((el, idx) => {
              const { name, image } = el;
              return (
                <li key={idx}>
                  <img src={image}/>
                  <p>{name}</p>
                </li>
              );
            })}
          </ul>
        </div>
      }
      { projects &&
        <div className={style.project}>
          <h1>Projects</h1>
          {projects.map((el, idx) => {
            const { image, links, title, description } = el;
            return (
              <div key={idx} className={`${style.projectMain} ${idx%2 === 1 ? style.reverse : ''}`}>
                <div className={style.projectImage}>
                  <div className={style.ratio}>
                    <img src={image}/>
                  </div>
                </div>
                <div className={style.projectInfo}>
                  <div className={style.projectTextWrap}>
                    <div className={style.projectText}>
                      <h2>{title}</h2>
                      <p>{description}</p>
                      <ul>
                        {links && links.map((_el, idx) => {
                          const { name, href } = _el;
                          return (
                            <li key={idx}>
                              <a href={href} target="_blank">{name}</a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      }
      { educations &&
        <div className={style.education}>
          <h1>Education</h1>
          <ul>
            {educations.map((el, idx) => {
              const { name, description } = el;
              return (
                <li key={idx}>
                  <h2>{name}</h2>
                  <p>{description}</p>
                </li>
              )
            })}
          </ul>
        </div>
      }
    </div>
  );
}

export default Duce;